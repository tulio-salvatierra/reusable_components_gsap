
// --- JAVASCRIPT ---
function initMasonryGrid ( ) {
  document .querySelectorAll( '[data-masonry-list]' ).forEach( container => {
    const shuffle = container.dataset.masonryShuffle !== 'false' ;
    let cols, gapPx, colHeights;

    // Take columns and gaps from CSS
    const getVars = () => {
      const cs = getComputedStyle(container);
      cols = parseInt (cs.getPropertyValue( '--masonry-col' ));
      const rawGap = cs.getPropertyValue( '--masonry-gap' ).trim();
      if (rawGap.endsWith( 'px' )) {
        gapPx = parseFloat (rawGap);
      } else if (rawGap.endsWith( 'em' )) {
        gapPx = parseFloat (rawGap) * parseFloat (cs.fontSize);
      } else if (rawGap.endsWith( 'rem' )) {
        gapPx = parseFloat (rawGap) * parseFloat (getComputedStyle( document .documentElement).fontSize);
      } else {
        gapPx = parseFloat (rawGap);
      }
    };

    // Set the layout
    const layout = () => {
      getVars();
      const wCalc = `(100% - ${(cols - 1 )} *var(--masonry-gap)) / ${cols} ` ;
      colHeights = Array (cols).fill( 0 );

      container.style.position = 'relative' ;
      const items = Array .from(container.children);
      items.forEach( el => {
        el.style.position = 'absolute' ;
        el.style.width = `calc( ${wCalc} )` ;
      });

      items.forEach( ( el, i ) => {
        const h = el.offsetHeight;
        const idx = shuffle ? colHeights.indexOf( Math .min(...colHeights)) : (i % cols);
        el.style.top  = ` ${colHeights[idx]} px` ;
        el.style.left = `calc( ${wCalc} * ${idx} + var(--masonry-gap)* ${idx} )` ;
        colHeights[idx] += h + gapPx;
      });

      container.style.height = ` ${ Math .max(...colHeights)} px` ;
    };

    // Debounce function to use on resize
    const debounce = ( fn, delay ) => {
      let t;
      return () => {
        clearTimeout (t);
        t = setTimeout (fn, delay);
      };
    };
    const onResize = debounce(layout, 100 );
    window .addEventListener( 'resize' , onResize);

    // Return promise if images are loaded
    const imgLoad = () => {
      const imgs = container.querySelectorAll( 'img' );
      return Promise .all( Array .from(imgs).map( img => img.complete ? Promise .resolve() : new Promise ( r => img.addEventListener( 'load' , r)) ));
    };

    // When images are ready, set the layout
    imgLoad().then(layout);

    // Constructor with destroy and recalc function
    container._masonry = {
      recalc : () => imgLoad().then(layout),
      destroy : () => {
        window .removeEventListener( 'resize' , onResize);
        const items = Array .from(container.children);
        items.forEach( el => {
          el.style.position = el.style.width = el.style.top = el.style.left = '' ;
        });
        container.style.position = container.style.height = '' ;
      }
    };
  });
}

// Initialize Masonry Grid
document .addEventListener( 'DOMContentLoaded' , () => {
  initMasonryGrid();
});