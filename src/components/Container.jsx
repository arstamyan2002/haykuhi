export default function Container({ children, disableYPadding = false }) {
  return (
    <section
      className={`container mx-auto px-4 md:px-8 ${
        disableYPadding ? "py-5" : "py-16"
      }`}
    >
      {children}
    </section>
  );
}
