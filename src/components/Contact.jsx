import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus('Message sent successfully!')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#04150f] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s build a safer system</h2>
          <p className="mt-3 text-white/70 max-w-xl">Share a bit about your environment and goals. I’ll respond within 24 hours with next steps.</p>
          {status && <p className="mt-4 text-sm text-emerald-300">{status}</p>}
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" required className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Company (optional)</label>
            <input name="company" className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Topic</label>
            <input name="topic" placeholder="Pentest, audit, consulting..." className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" required rows="5" className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <button className="mt-2 px-5 py-3 rounded-md bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition">Send message</button>
        </form>
      </div>
    </section>
  )
}
