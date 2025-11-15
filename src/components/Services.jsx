import { Shield, Bug, Lock, Cloud, KeyRound, Network } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Security Architecture',
    desc: 'Threat modeling, secure SDLC, and hardening aligned with industry frameworks.'
  },
  {
    icon: Bug,
    title: 'Penetration Testing',
    desc: 'Application, API, and cloud pentests with actionable remediation guidance.'
  },
  {
    icon: Lock,
    title: 'Zero Trust Enablement',
    desc: 'Identity-first, least-privilege strategies with strong segmentation.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'Misconfiguration audits, IaC reviews, and guardrails for AWS/GCP/Azure.'
  },
  {
    icon: KeyRound,
    title: 'Secrets Management',
    desc: 'Vaults, KMS, and rotation patterns that scale with your platform.'
  },
  {
    icon: Network,
    title: 'Incident Readiness',
    desc: 'Runbooks, tabletop exercises, and detection engineering to reduce MTTR.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black to-[#04150f] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Capabilities</h2>
          <p className="mt-3 text-white/70">Modern security for modern stacks. Scoped engagements with measurable outcomes.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-6">
              <div className="w-11 h-11 rounded-lg bg-emerald-400/20 ring-1 ring-emerald-300/30 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
