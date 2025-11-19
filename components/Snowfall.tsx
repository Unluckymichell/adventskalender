import "./Snowfall.css"

export default function Snowfall() {
  const flakes = Array.from({ length: 20 }); // Anzahl Schneeflocken

  return (
    <div className="snowfall">
      {flakes.map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.7,
            transform: `scale(${0.4 + Math.random() * 1})`,
            // zIndex: Math.random() > 0.5 ? "initial" : 9999
          }}
        ></span>
      ))}
    </div>
  );
}
