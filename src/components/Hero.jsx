import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden bg-[#030a07] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 text-emerald-300 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for security engagements
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Fortifying systems with code, curiosity, and care.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            I’m a cybersecurity engineer focused on offensive testing and secure-by-design engineering. I help teams ship with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition">
              Book a consultation
            </a>
            <a href="#work" className="px-5 py-3 rounded-md border border-white/20 hover:bg-white/5 transition">
              View case studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
