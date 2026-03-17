import { ReactNode } from 'react'
import { CreditCard, Building2, Zap, Users, PiggyBank, Banknote, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.tsx'

interface Service {
  icon: ReactNode
  title: string
  desc: string
  details: string[]
  color: string
  iconBg: string
}

const services: Service[] = [
  {
    icon: <CreditCard size={26} />, title: 'POS Distribution & Support',
    desc: 'Full POS terminal distribution, deployment, and ongoing technical support services for agents and merchants across Nigeria.',
    details: ['Terminal procurement & supply', 'On-site installation & setup', '24/7 technical support', 'Agent training & onboarding'],
    color: 'border-primary-200', iconBg: 'bg-primary-50 text-primary-700',
  },
  {
    icon: <Building2 size={26} />, title: 'Agency Banking',
    desc: 'Cash withdrawal, deposits, and fund transfers through our growing network of trusted banking agents.',
    details: ['Cash withdrawal & deposit', 'Inter-bank fund transfers', 'Account opening', 'Balance enquiry'],
    color: 'border-blue-200', iconBg: 'bg-blue-50 text-blue-700',
  },
  {
    icon: <Zap size={26} />, title: 'Utility Bill Payments',
    desc: 'Seamless payment of electricity, cable TV, water bills and instant airtime top-ups across all networks.',
    details: ['Electricity bill payment', 'Cable TV subscription', 'Water bill payments', 'Airtime & data top-up'],
    color: 'border-amber-200', iconBg: 'bg-amber-50 text-amber-700',
  },
  {
    icon: <Users size={26} />, title: 'Merchant Onboarding',
    desc: 'Onboard your business and access powerful management tools to streamline operations and grow revenue.',
    details: ['Business registration support', 'POS terminal allocation', 'Sales dashboard & analytics', 'Settlement management'],
    color: 'border-purple-200', iconBg: 'bg-purple-50 text-purple-700',
  },
  {
    icon: <PiggyBank size={26} />, title: 'Savings & Deposits',
    desc: 'Grow your money with our secured savings plans designed to help you achieve your financial goals.',
    details: ['Fixed deposit accounts', 'Target savings plans', 'High-yield interest rates', 'Flexible withdrawal terms'],
    color: 'border-green-200', iconBg: 'bg-green-50 text-green-700',
  },
  {
    icon: <Banknote size={26} />, title: 'Loan Products',
    desc: 'Flexible and accessible loan products tailored for individuals, SMEs and growing businesses.',
    details: ['Personal loans', 'SME business loans', 'Quick approval process', 'Competitive interest rates'],
    color: 'border-rose-200', iconBg: 'bg-rose-50 text-rose-700',
  },
]

export default function ServicesPage(): JSX.Element {
  return (
    <div className="pt-24">
      <PageHero
        badge="Our Services"
        title={<>Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Services</span></>}
        subtitle="Presenting banking plans and services that are right for you — from payments to savings, loans and beyond."
      />

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className={`group rounded-3xl border-2 ${s.color} p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-6`}>{s.icon}</div>
                <h3 className="font-display font-bold text-dark-900 text-xl mb-3">{s.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-dark-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  Get Started <ArrowRight size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-extrabold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/70 mb-8">Speak to a SmartPay specialist today and find the right service for you.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-full hover:bg-primary-50 transition-colors">
            Contact Us <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
