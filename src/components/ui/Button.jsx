export default function Button({ invert = false, children, className }) {
  return (
    <button className={`rounded-xl px-8 py-5 text-white font-semibold transition-all duration-300 ${
      invert ? "bg-secondary hover:bg-primary" : "bg-primary hover:bg-secondary"
    } ${className}`}
    >
      {children}
    </button>
  );
}
