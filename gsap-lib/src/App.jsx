import { MasonryGrid } from "./components/masonry/masonry";
import "./App.css";
import InteractiveDotGrid from "./components/interativeDotGrid/InteractiveDotGrid";
import { BigWord } from "./components/bigWord/BigWord";
import LogoRevealLoader from "./components/LogoRevealLoader/LogoRevealLoader";
import { useEffect, useState } from "react";
import { images } from "./components/masonry/images";

function App() {
  // Always show loader on every reload
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-fullscreen">
        <LogoRevealLoader />
      </div>
    );
  }

  return (
    <>
      <main>
        <section className="container">
          <h1 className="heading">CICERO WEB STUDIO</h1>
        </section>

        <section className="container">
          <BigWord text="TULIO" />
          <BigWord text="SALVATIERRA" />
        </section>

        <section className="container">
          <MasonryGrid shuffle={true}>
            {images.map((src, i) => (
              <div className="masonry-item" key={i}>
                <div className="masonry-item__visual">
                  <img
                    src={src.src}
                    alt={`Masonry ${i + 1}`}
                    className={`masonry-item__visual-img ${src.variant}`}
                  />
                </div>
              </div>
            ))}
          </MasonryGrid>
        </section>

        <InteractiveDotGrid />
      </main>
    </>
  );
}

export default App;