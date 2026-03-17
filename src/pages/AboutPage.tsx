import { CheckCircle2, Target, Eye, Users } from 'lucide-react'
import PageHero from '../components/PageHero.tsx'
import Team from '../components/Team.tsx'

const values = [
  { icon: <Target size={22} className="text-primary-600" />, title: 'Our Mission', desc: 'To revolutionize financial services in Nigeria through innovative, accessible, and secure digital solutions that empower every individual and business.' },
  { icon: <Eye size={22} className="text-primary-600" />, title: 'Our Vision', desc: "To become Nigeria's leading fintech enterprise by 2029 — a multimillion-dollar platform trusted by millions across all 36 states." },
  { icon: <Users size={22} className="text-primary-600" />, title: 'Our People', desc: 'Our team of experienced directors are committed to delivering excellence and driving financial inclusion nationwide.' },
]

const pillars = [
  { title: 'SmartPay Digital Solutions and Financial Services Limited', sub: 'Agency Banking', desc: 'Providing agency banking services through a trusted network of agents nationwide.', dark: false },
  { title: 'SmartPay Microfinance Bank (MFB)', sub: 'Microfinance', desc: 'A regulated microfinance bank offering savings, deposits, and loan products to individuals and SMEs.', dark: true },
]

const highlights = ['Driving financial inclusion across Nigeria','Bridging the digital divide','Fostering economic growth','Targeting multimillion-dollar scale by 2029','Subsidiary of BICTECH GROUP INCORPORATION','Scalable IT infrastructure and cybersecurity']

export default function AboutPage(): JSX.Element {
  return (
    <div className="pt-24">
      <PageHero
        badge="About Us"
        title={<>Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Are</span></>}
        subtitle="SmartPay Finance & Holdings Limited is an innovative financial solution built to transform finance in Nigeria."
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">Executive Summary</span>
            <h2 className="text-4xl font-display font-extrabold text-dark-900 leading-tight mb-6">Revolutionizing Financial Services in Nigeria</h2>
            <p className="text-dark-600 leading-relaxed mb-6">SmartPay Finance & Holdings Limited is strategically positioned to drive financial inclusion, bridge the digital divide, and foster economic growth. With two core pillars, the company aspires to grow into a multimillion-dollar enterprise by 2029.</p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary-600 flex-shrink-0" />
                  <span className="text-dark-700 text-sm font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-primary-600 to-primary-950 p-10 text-white shadow-2xl">
            <h3 className="font-display font-extrabold text-3xl mb-2">SmartPay Finance & Holdings Limited</h3>
            <p className="text-white/50 text-sm mb-8">A subsidiary of BICTECH GROUP INCORPORATION</p>
            <div className="grid grid-cols-2 gap-4">
              {[{v:'2029',l:'Goal Year'},{v:'2',l:'Core Pillars'},{v:'36',l:'States'},{v:'N M+',l:'Target Scale'}].map((s) => (
                <div key={s.l} className="bg-white/10 rounded-2xl p-4">
                  <p className="text-white/40 text-xs">{s.l}</p>
                  <p className="text-white font-display font-bold text-2xl mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">What Drives Us</span>
            <h2 className="text-4xl font-display font-extrabold text-dark-900">Our Mission, Vision and People</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-5">{v.icon}</div>
                <h3 className="font-display font-bold text-dark-900 text-xl mb-3">{v.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team />
    </div>
  )
}
