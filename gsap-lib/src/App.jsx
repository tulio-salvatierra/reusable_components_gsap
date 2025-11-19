
import { MasonryGrid } from "./components/masonry/masonry";
import "./App.css";
import InteractiveDotGrid from "./components/interativeDotGrid/InteractiveDotGrid";

function App() {
  
  const images = [
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cdca559e9bd5ebd7d7_masonry-img-1.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cdf54d6a568093e395_masonry-img-8.avif",
      variant: "is--wide",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cdea9e46cc9cff02a5_masonry-img-2.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cddd1040e5b58dbc36_masonry-img-3.avif",
      variant: "is--square",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd2e50b385995fd987_masonry-img-4.avif",
      variant: "is--square",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd7ca8630a1e6d711c_masonry-img-5.avif",
      variant: "is--tall",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd2f6c02ac20dda78d_masonry-img-6.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd7f801a64b787dab7_masonry-img-7.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd19ad8f594cbaf606_masonry-img-9.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd60cd447d80485e3b_masonry-img-10.avif",
      variant: "is--square",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd19ad8f594cbaf624_masonry-img-12.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cd15fb1cab1dfa8d99_masonry-img-11.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cdd2006fe51677421f_masonry-img-15.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cdb52036722a27a35c_masonry-img-13.avif",
      variant: "",
    },
    {
      src: "https://cdn.prod.website-files.com/688006f2c368aa3a853bab48/688008cdd6a1c7f361a73e0e_masonry-img-14.avif",
      variant: "",
    },
  ];

  return (
    <>
      <div>
        <h1>CICERO WEB STUDIO</h1>
      </div>
      <div className="container">
       
      </div>
      <div>
        <MasonryGrid shuffle={true}>
          {images.map((src, i) => (
            <div className="masonry-item" key={i}>
              <div className="masonry-item__visual">
                <img
                  src={src.src}
                  alt={`Masonry ${i + 1}`}
                  className="masonry-item__visual-img"
                />
              </div>
            </div>
          ))}
        </MasonryGrid>
      </div>
       <InteractiveDotGrid />
      
    </>
  );
}

export default App;
