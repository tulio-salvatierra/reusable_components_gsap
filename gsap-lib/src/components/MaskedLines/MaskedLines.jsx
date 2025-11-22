import React, { useEffect, useRef } from "react";
import  gsap  from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MaskedLines.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

// eslint-disable-next-line no-unused-vars
export default function MaskedLines({
  children,
  // eslint-disable-next-line no-unused-vars
  as: Component = "p",
  scroll = false,
  scrollStart = "top 80%",
  once = false,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    let splitInstance;
    let tween;

    document.fonts?.ready
      ?.then(() => {
        const el = textRef.current;
        if (!el) return;

        // Ensure text is visible when fonts are ready
        gsap.set(el, { opacity: 1 });

        // Split text into lines/words
        splitInstance = SplitText.create(el, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
        });

        const animationConfig = {
          duration: 1.6,      // each line takes a bit longer
          yPercent: 120,      // travels a bit more distance
          opacity: 0,
          stagger: 0.28,      // more time between lines
          ease: "power3.out", // still smooth but less snappy than expo
          delay: 0.15,        // small pause before the first line starts
        };

        if (scroll) {
          animationConfig.scrollTrigger = {
            trigger: el,
            start: scrollStart,
            toggleActions: once ? "play none none none" : "play none none reset",
          };
        }

        tween = gsap.from(splitInstance.lines, animationConfig);
      })
      .catch(() => {});

    return () => {
      if (tween) {
        tween.kill();
      }
      if (splitInstance) {
        splitInstance.revert();
      }
    };
  }, [scroll, scrollStart, once, children]);

  return (
    
      <div className="container-text-masked-lines">
        <Component ref={textRef} className="split">
          {children}
        </Component>
      </div>
    
  );
}