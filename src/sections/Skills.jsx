import { Code2, BrainCircuit, ServerCog, Wrench } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    color: "green",
    items: ["React.js", "Tailwind CSS", "JSX", "React Router", "Redux"],
  },
  {
    category: "IA & Data Science",
    icon: BrainCircuit,
    color: "blue",
    items: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "NumPy"],
  },
  {
    category: "Backend",
    icon: ServerCog,
    color: "green",
    items: ["Django", "Laravel", "API REST"],
  },
  {
    category: "DevOps & Outils",
    icon: Wrench,
    color: "blue",
    items: ["Git", "GitHub", "Docker", "Linux", "Figma"],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre */}
        <div className="text-center mb-10">
          <span className="text-blue-400 uppercase tracking-widest text-md">
            Compétences
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Technologies que j'utilise
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Développement web, intelligence artificielle et outils modernes.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <div
                key={skill.category}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-zinc-800">
                    <Icon
                      size={22}
                      className={
                        skill.color === "green"
                          ? "text-green-400"
                          : "text-blue-400"
                      }
                    />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}