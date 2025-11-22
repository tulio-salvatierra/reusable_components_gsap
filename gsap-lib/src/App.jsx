import { MasonryGrid } from "./components/masonry/masonry";
import "./App.css";
import InteractiveDotGrid from "./components/interativeDotGrid/InteractiveDotGrid";
import { BigWord } from "./components/bigWord/BigWord";
import LogoRevealLoader from "./components/LogoRevealLoader/LogoRevealLoader";
import { useEffect, useState } from "react";
import { images } from "./components/masonry/images";
import MaskedLines from "./components/MaskedLines/MaskedLines";

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
        <section className="container">
        <div className="card">
          <MaskedLines as="h3" scroll scrollStart="top 60%">
            Card Title{" "}
          </MaskedLines>

          <MaskedLines as="p" scroll scrollStart="top 60%">
            Card Description
          </MaskedLines>
        </div>
        
          <MaskedLines as="p" scroll scrollStart="top 60%">
            The text in this paragraph is split by words and lines. We have enabled masking on the lines so that we can animate the lines to create a fun 'reveal' animation. Nice and easy!
          </MaskedLines>
        

        <MaskedLines as="h1">CICERO WEB STUDIO</MaskedLines>
        <MaskedLines
          as="h2"
          scroll
          scrollStart="top 60%"
        >This is another line that reveals on scroll. The effect is not quite there yet.</MaskedLines>
        <MaskedLines as="p" scroll scrollStart="top 60%">
          All items at Ecclection are affordable, curated from local artists,
          and chosen with care to support the community.
        </MaskedLines>
        
      </section>
      </main>
    </>
  );
}

export default App;
