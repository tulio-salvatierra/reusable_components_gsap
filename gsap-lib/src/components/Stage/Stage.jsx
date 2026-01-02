import "./stage.css";

function Stage() {
  return (
    <section className="stage h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="stage__content">
        <h1 className="stage__title">Welcome to the Stage Component</h1>
        <p className="stage__description">
          In this section, we showcase the animations of our application.
        </p>
      </div>
      <div className="stage__main flex flex-col flex-grow items-center justify-center bg-gray-600">
        <div className="stage__box shadow-lg flex items-center justify-center">
          <h2 data-anim="headline" className="stage__box-h1 text-xl font-semibold">Headline</h2>
          <p data-anim="subhead" className="stage__box-subtext text-gray-200">Subhead</p>
          
        </div>
        <div>
            <img
            data-anim="image"
            className="stage__box-image mt-4"
            src="/vite.svg"
            alt="Placeholder"
          />
        </div>

        <div className="stage__footer mt-8">
          <button data-anim="primaryCta" className="stage__box-button mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Primary CTA
          </button>
          <button data-anim="secondaryCta" className="stage__box-secondary-button mt-2 px-4 py-2 bg-gray-300 text-gray-800 rounded">
            Secondary CTA
          </button>
        </div>
      </div>
    </section>
  );
}

export default Stage;
