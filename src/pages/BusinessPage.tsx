import PageHero from '../components/PageHero.tsx'
import { Building2, CreditCard, Users, TrendingUp, BarChart3, Shield, ArrowRight } from 'lucide-react'

const solutions = [
  { icon: <CreditCard size={24} />, title: 'POS Solutions', desc: 'Accept payments anywhere with our reliable POS terminals and real-time settlement.', bg: 'bg-primary-50 text-primary-700' },
  { icon: <Building2 size={24} />, title: 'Agency Banking', desc: 'Become a SmartPay agent and offer banking services to your community profitably.', bg: 'bg-blue-50 text-blue-700' },
  { icon: <Users size={24} />, title: 'Merchant Onboarding', desc: 'Register your business and get access to tools that help you manage and grow.', bg: 'bg-purple-50 text-purple-700' },
  { icon: <TrendingUp size={24} />, title: 'Business Loans', desc: 'Access working capital and business loans with flexible repayment terms.', bg: 'bg-green-50 text-green-700' },
  { icon: <BarChart3 size={24} />, title: 'Business Analytics', desc: 'Real-time dashboards to track sales, transactions, and business performance.', bg: 'bg-amber-50 text-amber-700' },
  { icon: <Shield size={24} />, title: 'Secure Infrastructure', desc: 'Enterprise-grade cybersecurity keeping your business transactions safe 24/7.', bg: 'bg-rose-50 text-rose-700' },
]

const benefits = [
  { value: 'Fast', label: 'Settlement', desc: 'Same-day settlement to your business account.' },
  { value: '24/7', label: 'Support', desc: 'Round-the-clock technical support for your business.' },
  { value: 'Low', label: 'Transaction Fees', desc: 'Competitive fees designed to maximize your profit.' },
  { value: 'Easy', label: 'Onboarding', desc: 'Simple registration and quick terminal deployment.' },
]

export default function BusinessPage(): JSX.Element {
  return (
    <div className="pt-24">
      <PageHero
        badge="Business Banking"
        title={<>Power Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Business</span></>}
        subtitle="From POS terminals to agency banking and business loans — SmartPay gives your business the tools to grow."
      />

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Business Solutions</span>
            <h2 className="text-4xl font-display font-extrabold text-dark-900">Everything Your Business Needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-3xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mb-5`}>{s.icon}</div>
                <h3 className="font-display font-bold text-dark-900 text-lg mb-2">{s.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-extrabold text-white">Why Choose SmartPay for Business?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.label} className="bg-white/10 rounded-3xl p-7 text-center border border-white/20">
                <p className="text-white font-display font-extrabold text-3xl mb-1">{b.value}</p>
                <p className="text-accent-400 font-bold text-sm mb-2">{b.label}</p>
                <p className="text-white/60 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-extrabold text-white mb-4">Ready to grow your business?</h2>
          <p className="text-white/50 mb-8">Contact our business team and get onboarded today.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-full transition-colors">
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
