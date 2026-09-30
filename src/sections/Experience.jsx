const experiences = [
    {
    role: " Baccalauréat ",
    company: "Martin Lutter King",
    period: "2021",
    desc: "Serie D",
    color: "blue",
  },
  {
    role: "Licence en Architecture Logiciel",
    company: "ESGIS BENIN",
    period: "2022 – 2025",
    desc: "Création d'interfaces modernes avec React, Tailwind et animations avancées.",
    color: "green",
  },
  {
    role: "BIG Data & IA",
    company: "ESGIS BENIN",
    period: "2025 – présent",
    desc: "Analyse de données, modèles ML avec Python, TensorFlow et Pandas.",
    color: "blue",
  },
 
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Mon <span className="text-blue-400">Parcours</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-12 rounded-full" />
        <div className="relative border-l-2 border-gray-800 ml-4 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.role} className="pl-8 relative">
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${exp.color === "green" ? "border-green-400 bg-green-400/20" : "border-blue-400 bg-blue-400/20"}`} />
              <span className="text-xs text-gray-500 font-mono">{exp.period}</span>
              <h3 className={`text-lg font-bold mt-1 ${exp.color === "green" ? "text-green-400" : "text-blue-400"}`}>
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm">{exp.company}</p>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}