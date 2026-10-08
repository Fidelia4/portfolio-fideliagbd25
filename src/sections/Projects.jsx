import { Home, Vote, Leaf, Sparkles, PiggyBank, Film, ServerCog } from "lucide-react"

const projects = [
  {
    title: "Louée Meublée",
    desc: "Application web de location de biens meublés. Interfaces frontend complètes pour la mise en relation propriétaires / locataires.",
    tags: ["React.js", "Tailwind CSS", "Frontend"],
    color: "green",
    icon: Home,
    link: "https://louermeublee.niyiexpertise.com/",
    company: "NIYI Expertise · Stage",
  },
  {
    title: "IVSD",
    desc: "Plateforme frontend de gestion des élections présidentielles au Cameroun. Suivi et gestion des annonces électorales.",
    tags: ["React.js", "Frontend", "Élections"],
    color: "blue",
    icon: Vote,
    link: "https://ivsd.niyiexpertise.com/",
    company: "NIYI Expertise · Stage",
  },
  {
    title: "Asgreens",
    desc: "Plateforme e-commerce de vente de jus d'ananas en ligne. Interface complète de commande et gestion des produits.",
    tags: ["React.js", "E-commerce", "Frontend"],
    color: "green",
    icon: Leaf,
    link: "https://asgreens.com/",
    company: "NIYI Expertise · Stage",
  },
  {
    title: "Fascino",
    desc: "Application web personnelle avec site vitrine, commande en ligne et chatbot intégré. Développement complet de l'interface et des fonctionnalités.",
    tags: ["Meteor.js", "Frontend", "Chatbot"],
    color: "blue",
    icon: Sparkles,
    link: "https://ffascino.au.meteorapp.com",
    company: "Projet Personnel",
  },
  {
    title: "Fascino — Déploiement",
    desc: "Déploiement de l'application Fascino sur serveur Linux. Configuration serveur, mise en production et maintenance.",
    tags: ["DevOps", "Linux", "Serveur", "Meteor.js"],
    color: "green",
    icon: ServerCog,
    link: "https://ffascino.au.meteorapp.com",
    company: "Benin Digital · Stage",
  },
  {
    title: "Shikova",
    desc: "Plateforme de gestion de tontine et épargne en ligne. Interface pour la gestion des cotisations entre membres.",
    tags: ["React.js", "FinTech", "Frontend"],
    color: "blue",
    icon: PiggyBank,
    link: null,
    company: "NIYI Expertise · Stage",
  },
  {
    title: "Cacher",
    desc: "Application de gestion de contenus multimédias. Interface frontend pour l'organisation et la lecture de médias.",
    tags: ["React.js", "Multimédia", "Frontend"],
    color: "green",
    icon: Film,
    link: null,
    company: "NIYI Expertise · Stage",
  },
  {
    title: "Nukpen IA",
    desc: "Miroir intelligent propulsé par l'IA. Projet en cours de développement alliant vision par ordinateur et interface interactive.",
    tags: ["Python", "IA", "Computer Vision", "React.js"],
    color: "blue",
    icon: Sparkles,
    link: null,
    company: "Projet Personnel · En cours",
  },
  {
    title: "Portfolio Fidélia",
    desc: "Mon portfolio personnel développé avec React.js, Vite et Tailwind CSS. Design futuriste avec animations, fond animé et effet machine à écrire.",
    tags: ["React.js", "Tailwind CSS", "Vite", "Lucide React"],
    color: "green",
    icon: Sparkles,
    link: "https://fidelia-gbaguidi.netlify.app",
    company: "Projet Personnel",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-10">
          <p className="text-green-400 text-xs tracking-widest uppercase font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Mes <span className="text-green-400">Projets</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Quelques réalisations en développement web, intelligence artificielle et déploiement d'applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-green-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <div className={`p-3 rounded-xl ${p.color === "green" ? "bg-green-500/10" : "bg-blue-500/10"}`}>
                        <Icon size={20} className={p.color === "green" ? "text-green-400" : "text-blue-400"} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">{p.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{p.company}</p>
                      </div>
                    </div>
                    {p.company.includes("En cours") && (
                      <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full flex-shrink-0">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        En cours
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-gray-300 border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium px-4 py-2 rounded-xl border text-center transition-all duration-300 hover:-translate-y-0.5 ${
                      p.color === "green"
                        ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                        : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                    }`}
                  >
                    Voir le projet →
                   </a>
                ) : (
                  <span className="text-sm text-center text-gray-500">
                    {p.company.includes("En cours") ? "En développement" : "Projet confidentiel"}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}