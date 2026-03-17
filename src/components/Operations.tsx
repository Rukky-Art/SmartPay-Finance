import { Code2, MapPin, Server } from 'lucide-react'

const ops = [
  {
    icon: <Code2 size={28} className="text-primary-600" />,
    title: 'Key Activities',
    desc: 'Fintech mobile app development, agent and staff training, and robust cybersecurity measures to protect every transaction.',
    bg: 'bg-primary-50',
  },
  {
    icon: <MapPin size={28} className="text-primary-600" />,
    title: 'Location',
    desc: 'Operations based in regional hubs across Nigeria with a strong digital presence to reach customers everywhere.',
    bg: 'bg-primary-50',
  },
  {
    icon: <Server size={28} className="text-primary-600" />,
    title: 'Technology',
    desc: 'Scalable IT infrastructure powered by BICTECH GROUP expertise and strategic technology partners for reliability and growth.',
    bg: 'bg-primary-50',
  },
]

export default function Operations() {
  return (
    <section id="operations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Operations
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-dark-900 leading-tight">
            How We Work
          </h2>
          <p className="text-dark-500 mt-4 max-w-xl mx-auto">
            Our operations are designed for scale, security, and seamless access to financial services across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ops.map((op) => (
            <div key={op.title} className="relative group">
              <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${op.bg} flex items-center justify-center mb-6`}>
                  {op.icon}
                </div>
                <h3 className="font-display font-bold text-dark-900 text-xl mb-3">{op.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{op.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-primary-700 to-primary-950 p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display font-extrabold text-2xl lg:text-3xl leading-tight max-w-lg">
              By 2029, SmartPay aspires to be a multimillion-dollar enterprise.
            </h3>
            <p className="text-white/60 mt-2 text-sm">Providing seamless, accessible, and secure financial services across Nigeria.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-7 py-4 rounded-full hover:bg-primary-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
