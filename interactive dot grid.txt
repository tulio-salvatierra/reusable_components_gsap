// --- EXTERNAL SCRIPTS ---
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/InertiaPlugin.min.js"></script>

// --- HTML ---
<section class="section-dots">
  <div class="section-dots__wrap">
    <div data-dots-container-init="" class="dots-container">
      <div class="dot"></div>
    </div>
  </div>
  <a href="https://osmo.supply/" target="_blank" class="osmo-icon__link">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewbox="0 0 160 160" fill="none" class="osmo-icon-svg">
      <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
    </svg>
  </a>
</section>

// --- CSS ---
.section-dots { background-color : #08342a ; color : #efeeec ; justify-content : center; align-items : stretch; min-height : 100vh ; padding : 4em ; display : flex; position : relative; overflow : hidden; }
.section-dots__wrap { width : 100% ; min-height : 30em ; position : relative; }
.dots-container { gap: 2em ; pointer-events : none; flex-flow : wrap; justify-content : center; align-items : center; display : flex; position : absolute; inset: 0 ; }
.dot { will-change: transform, background-color; transform-origin : center; background-color : #245e51 ; border-radius : 50% ; width : 1em ; height : 1em ; position : relative; transform : translate ( 0 ); }
.osmo-icon__link { color : currentColor; text-decoration : none; position : absolute; top : 50% ; left : 50% ; transform : translate (- 50% , - 50% ); }
.osmo-icon-svg { width : 10em ; }

// --- JAVASCRIPT ---
gsap.registerPlugin(InertiaPlugin);

function initGlowingInteractiveDotsGrid ( ) {
  document .querySelectorAll( '[data-dots-container-init]' ).forEach( container => {
    const colors         = { base : "#245E51" , active : "#A8FF51" };
    const threshold      = 200 ;
    const speedThreshold = 100 ;
    const shockRadius    = 325 ;
    const shockPower     = 5 ;
    const maxSpeed       = 5000 ;
    const centerHole     = true ;

    let dots       = [];
    let dotCenters = [];

    function buildGrid ( ) {
      container.innerHTML = "" ;
      dots = [];
      dotCenters = [];

      const style = getComputedStyle(container);
      const dotPx = parseFloat (style.fontSize);
      const gapPx = dotPx * 2 ;

      const contW = container.clientWidth;
      const contH = container.clientHeight;

      const cols  = Math .floor((contW + gapPx) / (dotPx + gapPx));
      const rows  = Math .floor((contH + gapPx) / (dotPx + gapPx));
      const total = cols * rows;

      const holeCols = centerHole ? (cols % 2 === 0 ? 4 : 5 ) : 0 ;
      const holeRows = centerHole ? (rows % 2 === 0 ? 4 : 5 ) : 0 ;
      const startCol = (cols - holeCols) / 2 ;
      const startRow = (rows - holeRows) / 2 ;

      for ( let i = 0 ; i < total; i++) {
        const row    = Math .floor(i / cols);
        const col    = i % cols;
        const isHole = centerHole && row >= startRow && row < startRow + holeRows && col >= startCol && col < startCol + holeCols;

        const d = document .createElement( "div" );
        d.classList.add( "dot" );

        if (isHole) {
          d.style.visibility = "hidden" ;
          d._isHole = true ;
        } else {
          gsap.set(d, { x : 0 , y : 0 , backgroundColor : colors.base });
          d._inertiaApplied = false ;
        }
        container.appendChild(d);
        dots.push(d);
      }

      requestAnimationFrame( () => {
        dotCenters = dots
          .filter( d => !d._isHole)
          .map( d => {
            const r = d.getBoundingClientRect();
            return { el : d, x :  r.left + window .scrollX + r.width  / 2 , y :  r.top  + window .scrollY + r.height / 2 };
          });
      });
    }

    window .addEventListener( "resize" , buildGrid);
    buildGrid();

    let lastTime = 0 , lastX = 0 , lastY = 0 ;

    window .addEventListener( "mousemove" , e => {
      const now   = performance.now();
      const dt    = now - lastTime || 16 ;
      let dx    = e.pageX - lastX;
      let dy    = e.pageY - lastY;
      let vx    = dx / dt * 1000 ;
      let vy    = dy / dt * 1000 ;
      let speed = Math .hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      lastTime = now;
      lastX    = e.pageX;
      lastY    = e.pageY;

      requestAnimationFrame( () => {
        dotCenters.forEach( ( { el, x, y } ) => {
          const dist = Math .hypot(x - e.pageX, y - e.pageY);
          const t    = Math .max( 0 , 1 - dist / threshold);
          const col  = gsap.utils.interpolate(colors.base, colors.active, t);
          gsap.set(el, { backgroundColor : col });

          if (speed > speedThreshold && dist < threshold && !el._inertiaApplied) {
            el._inertiaApplied = true ;
            const pushX = (x - e.pageX) + vx * 0.005 ;
            const pushY = (y - e.pageY) + vy * 0.005 ;

            gsap.to(el, {
              inertia : { x : pushX, y : pushY, resistance : 750 },
              onComplete ( ) {
                gsap.to(el, { x : 0 , y : 0 , duration : 1.5 , ease : "elastic.out(1,0.75)" });
                el._inertiaApplied = false ;
              }
            });
          }
        });
      });
    });

    window .addEventListener( "click" , e => {
      dotCenters.forEach( ( { el, x, y } ) => {
        const dist = Math .hypot(x - e.pageX, y - e.pageY);

        if (dist < shockRadius && !el._inertiaApplied) {
          el._inertiaApplied = true ;
          const falloff = Math .max( 0 , 1 - dist / shockRadius);
          const pushX   = (x - e.pageX) * shockPower * falloff;
          const pushY   = (y - e.pageY) * shockPower * falloff;

          gsap.to(el, {
            inertia : { x : pushX, y : pushY, resistance : 750 },
            onComplete ( ) {
              gsap.to(el, { x : 0 , y : 0 , duration : 1.5 , ease : "elastic.out(1,0.75)" });
              el._inertiaApplied = false ;
            }
          });
        }
      });
    });
  });
}

// Initialize Glowing Interactive Dots Grid
document .addEventListener( 'DOMContentLoaded' , function ( ) {
  initGlowingInteractiveDotsGrid();
});