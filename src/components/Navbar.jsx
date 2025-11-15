import { useState } from 'react'
import { ShieldCheck, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
          <span className="p-2 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/25 transition">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </span>
          <span className="font-semibold tracking-tight">BlueShield Security</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-white/80 hover:text-white transition">
              {l.label}
            </button>
          ))}
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="px-4 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium transition">
            Get in touch
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg ring-1 ring-white/15">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-white/85 px-2 py-2 rounded hover:bg-white/5">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="mt-2 px-4 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium transition">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
