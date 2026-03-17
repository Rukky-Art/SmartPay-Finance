import { ReactNode } from 'react'
import { CreditCard, Building2, Zap, Users, PiggyBank, Banknote, ArrowRight } from 'lucide-react'

interface Service {
  icon: ReactNode
  title: string
  desc: string
  color: string
  border: string
}

const services: Service[] = [
  { icon: <CreditCard size={24} />, title: 'POS Distribution & Support', desc: 'Full POS terminal distribution, deployment, and ongoing technical support services for agents and merchants.', color: 'bg-primary-50 text-primary-700', border: 'border-primary-100' },
  { icon: <Building2 size={24} />, title: 'Agency Banking', desc: 'Cash withdrawal, cash deposits, and fund transfers through our growing network of trusted banking agents.', color: 'bg-blue-50 text-blue-700', border: 'border-blue-100' },
  { icon: <Zap size={24} />, title: 'Utility Bill Payments', desc: 'Seamless payment of electricity, cable TV, water bills and instant airtime top-ups across all networks.', color: 'bg-amber-50 text-amber-700', border: 'border-amber-100' },
  { icon: <Users size={24} />, title: 'Merchant Onboarding', desc: 'Onboard your business and access powerful management tools to streamline operations and grow revenue.', color: 'bg-purple-50 text-purple-700', border: 'border-purple-100' },
  { icon: <PiggyBank size={24} />, title: 'Savings & Deposits', desc: 'Grow your money with our secured savings plans designed to help you achieve your financial goals.', color: 'bg-green-50 text-green-700', border: 'border-green-100' },
  { icon: <Banknote size={24} />, title: 'Loan Products', desc: 'Flexible and accessible loan products tailored for individuals, SMEs and growing businesses.', color: 'bg-rose-50 text-rose-700', border: 'border-rose-100' },
]

export default function Services(): JSX.Element {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Our Products & Services</span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-dark-900 leading-tight">Banking Plans Built for You</h2>
          <p className="text-dark-500 mt-4 max-w-xl mx-auto">Comprehensive financial services that meet you wherever you are.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className={`group bg-white rounded-3xl p-7 border ${service.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
              <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-5`}>{service.icon}</div>
              <h3 className="font-display font-bold text-dark-900 text-lg mb-2 leading-snug">{service.title}</h3>
              <p className="text-dark-500 text-sm leading-relaxed mb-5">{service.desc}</p>
              <div className="flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight size={15} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
