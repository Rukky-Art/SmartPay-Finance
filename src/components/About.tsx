import { CheckCircle2 } from 'lucide-react'

const pillars = [
  {
    title: 'SmartPay Digital Solutions',
    sub: 'Financial Services Limited',
    desc: 'Agency banking services — bringing financial access to every community through trusted agents.',
  },
  {
    title: 'SmartPay Microfinance Bank',
    sub: 'MFB',
    desc: 'Regulated microfinance banking that empowers individuals and businesses with accessible credit and savings.',
  },
]

const highlights = [
  'Driving financial inclusion across Nigeria',
  'Bridging the digital divide',
  'Fostering economic growth',
  'Targeting multimillion-dollar scale by 2029',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top label */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Executive Summary
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-dark-900 leading-tight max-w-3xl mx-auto">
            Revolutionizing Financial Services in Nigeria
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image placeholder / brand card */}
          <div className="relative">
            <div className="aspect-auto min-h-[380px] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 to-primary-950 p-8 flex flex-col justify-between shadow-2xl shadow-primary-600/20">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-white font-display font-extrabold text-xl">S</span>
                </div>
                <h3 className="text-white font-display font-extrabold text-2xl lg:text-3xl leading-tight">
                  SmartPay<br />Finance & Holdings Limited
                </h3>
                <p className="text-white/60 text-sm mt-2">A subsidiary of BICTECH GROUP INCORPORATION</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-white/50 text-xs">Goal Year</p>
                  <p className="text-white font-display font-bold text-2xl mt-1">2029</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-white/50 text-xs">Reach</p>
                  <p className="text-white font-display font-bold text-2xl mt-1">Nigeria</p>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-2 border-primary-100 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent-500/10 -z-10 blur-xl" />
          </div>

          {/* Right: text */}
          <div>
            <p className="text-dark-700 text-lg leading-relaxed mb-8">
              SmartPay Finance & Holdings Limited is strategically positioned to drive financial inclusion, bridge the
              digital divide, and foster economic growth. With two core pillars, the company aspires to grow
              into a multimillion-dollar enterprise, providing seamless, accessible, and secure financial
              services across Nigeria.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary-600 flex-shrink-0" />
                  <span className="text-dark-700 font-medium">{h}</span>
                </li>
              ))}
            </ul>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="font-display font-bold text-dark-900 text-sm leading-snug">{p.title}</p>
                  <p className="text-primary-600 text-xs font-semibold mt-0.5 mb-2">{p.sub}</p>
                  <p className="text-dark-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
