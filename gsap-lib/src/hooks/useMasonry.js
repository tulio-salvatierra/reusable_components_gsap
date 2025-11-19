// src/hooks/useMasonry.js
import { useLayoutEffect } from "react";

export function useMasonry(containerRef, options = {}) {
  const { shuffle = true } = options;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cols;
    let gapPx;
    let colHeights;

    const getVars = () => {
      const cs = getComputedStyle(container);
      cols = parseInt(cs.getPropertyValue("--masonry-col")) || 1;

      const rawGap = cs.getPropertyValue("--masonry-gap").trim();

      if (rawGap.endsWith("px")) {
        gapPx = parseFloat(rawGap);
      } else if (rawGap.endsWith("em")) {
        gapPx = parseFloat(rawGap) * parseFloat(cs.fontSize);
      } else if (rawGap.endsWith("rem")) {
        gapPx =
          parseFloat(rawGap) *
          parseFloat(getComputedStyle(document.documentElement).fontSize);
      } else {
        gapPx = parseFloat(rawGap) || 0;
      }
    };

    const layout = () => {
      getVars();

      const wCalc = `(100% - ${(cols - 1)} * var(--masonry-gap)) / ${cols}`;
      colHeights = Array(cols).fill(0);

      container.style.position = "relative";
      const items = Array.from(container.children);

      items.forEach((el) => {
        el.style.position = "absolute";
        el.style.width = `calc(${wCalc})`;
      });

      items.forEach((el, i) => {
        const h = el.offsetHeight;

        const idx = shuffle
          ? colHeights.indexOf(Math.min(...colHeights))
          : i % cols;

        el.style.top = `${colHeights[idx]}px`;
        el.style.left = `calc(${wCalc} * ${idx} + var(--masonry-gap) * ${idx})`;

        colHeights[idx] += h + gapPx;
      });

      container.style.height = `${Math.max(...colHeights)}px`;
    };

    const debounce = (fn, delay) => {
      let t;
      return () => {
        clearTimeout(t);
        t = setTimeout(fn, delay);
      };
    };

    const onResize = debounce(layout, 100);
    window.addEventListener("resize", onResize);

    const imgLoad = () => {
      const imgs = container.querySelectorAll("img");
      return Promise.all(
        Array.from(imgs).map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.addEventListener("load", resolve, { once: true });
              })
        )
      );
    };

    imgLoad().then(layout);

    return () => {
      window.removeEventListener("resize", onResize);

      const items = Array.from(container.children);
      items.forEach((el) => {
        el.style.position = "";
        el.style.width = "";
        el.style.top = "";
        el.style.left = "";
      });

      container.style.position = "";
      container.style.height = "";
    };
  }, [containerRef, shuffle]);
}