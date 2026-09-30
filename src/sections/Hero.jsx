import { useEffect, useState } from "react";

export default function Hero() {
  const fullName = "GBAGUIDI";

  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [index, fullName]);

  return (
    <section
      id="hero"
      className="relative h-screen bg-black flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-3xl animate-pulse" />

        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Badge */}
        <span className="px-4 py-1.5 rounded-full border border-green-400/30 text-green-400 text-xs tracking-widest uppercase font-medium">
          Disponible pour des missions
        </span>

        {/* Nom */}
        <h1 className="text-2xl md:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-white">Fidélia </span>

          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {displayed}
          </span>

          {!done && (
            <span className="text-green-400 ml-1 animate-pulse">|</span>
          )}
        </h1>

        {/* Ligne décorative */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />

        {/* Sous-titre */}
        <p className="text-lg md:text-3xl text-gray-300 font-light">
          Développeuse Web{" "}
          <span className="text-green-400 font-semibold">Frontend</span> Junior
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "React.js",
            "Laravel",
            "Python",
            "IA & BIG-Data",

          ].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div className="flex gap-4 flex-wrap justify-center mt-2">
          <a
            href="#projects"
            className="px-7 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl font-bold text-white hover:opacity-90 hover:scale-105 transition-all"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-green-400 text-green-400 rounded-xl font-bold hover:bg-green-400 hover:text-black hover:scale-105 transition-all"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Flèche scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 text-xl">
        ↓
      </div>
    </section>
  );
}