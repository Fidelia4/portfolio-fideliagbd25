import { Code2, BrainCircuit, ServerCog } from "lucide-react"

const domains = [
  {
    icon: Code2,
    label: "Frontend Development",
    desc: "Interfaces modernes et réactives avec React.js et Tailwind CSS.",
    color: "green",
  },
  {
    icon: BrainCircuit,
    label: "IA & Big Data",
    desc: "Machine learning, analyse de données et solutions intelligentes.",
    color: "blue",
  },
  
]

const stats = [
  { value: "5+", label: "Projets réalisés" },
  { value: "5", label: "Stages en entreprise" },
  { value: "Master", label: "IA & Big Data" },
]

export default function About() {
  return (
    <section id="about" className="py-14 bg-gray-950 text-white relative overflow-hidden">

      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Titre */}
        <div className="text-center mb-14">
          <p className="text-green-400 text-xs tracking-widest uppercase font-medium mb-3">
            Qui suis-je ?
          </p>
          <h2 className="text-4xl font-bold mb-4">
            À <span className="text-green-400">Propos</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Bloc principal : texte + stats */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Texte gauche */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white leading-snug">
              Développeuse Web profil 'Frontend' &{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Etudiante en Master IA & Big Data
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Je suis <span className="text-white font-medium">Fidélia GBAGUIDI</span>, passionnée
              par la création d'interfaces qui allient esthétique et performance. Je combine mes
              compétences en frontend avec une vision orientée data et intelligence artificielle.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Curieuse, rigoureuse et motivée, je m'investis pleinement dans chaque projet —
              en équipe comme en autonomie — avec l'envie constante d'apprendre et de progresser.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "Tailwind CSS" , "PHP",, "Laravel","Django", "Python", "IA & Big Data", "Docker"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-900 border border-gray-700 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats droite */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center hover:border-green-400/40 transition-all"
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-1">
                  {s.value}
                </p>
                <p className="text-gray-500 text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Domaines */}
        <div className="grid md:grid-cols-3 gap-6">
          {domains.map((d) => {
            const Icon = d.icon
            return (
              <div
                key={d.label}
                className="group bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-green-400/40 transition-all relative overflow-hidden"
              >
                {/* Glow hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl ${d.color === "green" ? "bg-green-500/5" : "bg-blue-500/5"}`} />

                <div className={`inline-flex p-3 rounded-xl mb-4 ${d.color === "green" ? "bg-green-400/10" : "bg-blue-400/10"}`}>
                  <Icon size={22} className={d.color === "green" ? "text-green-400" : "text-blue-400"} />
                </div>
                <h3 className={`font-bold text-sm mb-2 ${d.color === "green" ? "text-green-400" : "text-blue-400"}`}>
                  {d.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}