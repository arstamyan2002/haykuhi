
export default function Card( {image, title, summary} ) {
  return (
    <div className="space-y-5 group">
        <div>
            <img src={image} className="group-hover:scale-110 transition-all duration-300" alt="card image" />
        </div>
        <h3 className="text-primary font-semibold text-xl sm:text-2xl">{title}</h3>
        <p className="text-primary">{summary}</p>
    </div>
  );
}
