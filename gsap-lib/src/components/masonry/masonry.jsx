import { useRef } from "react";
import { useMasonry } from "../../hooks/useMasonry";
import "./masonry.css";;




export function MasonryGrid({
  children,
  shuffle = true,
  className = "",
  ...rest
}) {
  const containerRef = useRef(null);

  useMasonry(containerRef, { shuffle });

  return (
    <div className={`masonry-wrap ${className}`} {...rest}>
      <div className="masonry-collection">
        <div
          ref={containerRef}
          className={`masonry-list ${className}`}
          data-masonry-list
        >
          {children}
        </div>
      </div>
    </div>
  );
}