import { useState } from "react"
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    const data = new FormData()

    data.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    )

    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("message", formData.message)

    data.append(
      "subject",
      "Nouveau message depuis le portfolio de Fidélia"
    )

    data.append(
      "from_name",
      "Portfolio Fidélia GBAGUIDI"
    )

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      )

      const result = await response.json()

      if (result.success) {
        setStatus("success")

        setFormData({
          name: "",
          email: "",
          message: "",
        })

        setTimeout(() => {
          setStatus("")
        }, 5000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="py-14 bg-black text-white relative overflow-hidden"
    >
      {/* Effets décoratifs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* En-tête */}
        <div className="text-center mb-14">

          <p className="text-green-400 text-xs tracking-widest uppercase font-medium mb-3">
            Travaillons ensemble
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Me{" "}
            <span className="text-green-400">
              Contacter
            </span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-4" />

          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Une idée de projet, une collaboration ou juste
            un bonjour ? Je suis disponible et réactive.
          </p>

        </div>

        {/* Contenu */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* =========================
              LIENS DE CONTACT
          ========================== */}
          <div className="space-y-4">

            {/* EMAIL */}
            <a
              href="mailto:fideliagbd@gmail.com"
              className="flex items-center gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 hover:border-green-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-green-400/10 group-hover:bg-green-400/20 transition-all">
                <Mail
                  size={22}
                  className="text-green-400"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                  Email
                </p>

                <p className="text-white font-medium text-sm">
                  fideliagbd@gmail.com
                </p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/22954103465"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 hover:border-green-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-green-400/10 group-hover:bg-green-400/20 transition-all">
                <MessageCircle
                  size={22}
                  className="text-green-400"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                  WhatsApp
                </p>

                <p className="text-white font-medium text-sm">
                  +229 54 10 34 65
                </p>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/fidelia-gbaguidi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-blue-400/10 group-hover:bg-blue-400/20 transition-all">
                <Send
                  size={22}
                  className="text-blue-400"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                  LinkedIn
                </p>

                <p className="text-white font-medium text-sm">
                  Fidélia GBAGUIDI
                </p>
              </div>
            </a>

          </div>

          {/* =========================
              FORMULAIRE
          ========================== */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-4"
          >

            {/* NOM */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-green-400 outline-none transition-all text-sm placeholder-gray-500"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-green-400 outline-none transition-all text-sm placeholder-gray-500"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Votre message..."
              required
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-green-400 outline-none transition-all resize-none text-sm placeholder-gray-500"
            />

            {/* MESSAGE DE SUCCÈS */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle size={18} />

                <span>
                  Votre message a bien été envoyé. Merci !
                </span>
              </div>
            )}

            {/* MESSAGE D'ERREUR */}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={18} />

                <span>
                  Une erreur est survenue. Veuillez réessayer.
                </span>
              </div>
            )}

            {/* BOUTON */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

