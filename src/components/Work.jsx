import { motion } from 'framer-motion'

const items = [
  {
    title: 'Banking Platform Hardening',
    summary: 'Reduced critical findings by 78% over two quarters via SDLC controls and IaC guardrails.',
    tags: ['SDLC', 'IaC', 'CIS Benchmarks']
  },
  {
    title: 'SaaS Pentest Program',
    summary: 'Built repeatable API/web testing playbooks and integrated fixes into CI/CD.',
    tags: ['Pentest', 'API', 'DevSecOps']
  },
  {
    title: 'Cloud Threat Modeling',
    summary: 'Designed secure multi-tenant isolation with blast-radius containment and zero-trust.',
    tags: ['Threat Modeling', 'Zero Trust', 'Cloud']
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-[#04150f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected work</h2>
          <p className="mt-3 text-white/70">A few examples of outcomes delivered across different industries.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map(t => (
                  <span key={t} className="px-2 py-1 rounded-md text-xs bg-emerald-400/15 ring-1 ring-emerald-300/30 text-emerald-200">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
