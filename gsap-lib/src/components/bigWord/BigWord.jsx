import "./BigWord.css";

export function BigWord({ text, className = "" }) {
  return (
    <div
      aria-hidden
      className={`bigword-container ${className}`}
    >
      {text}
    </div>
  );
}