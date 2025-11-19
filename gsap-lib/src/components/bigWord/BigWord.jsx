import "./BigWord.css";

export function BigWord({ text, className = "" }) {
  return (
    <section>
    <div
      aria-hidden
      className={`bigword-container ${className}`}
    >
      {text}
    </div>
    </section>
  );
}