import PageHero from '../components/PageHero.tsx'
import { Smartphone, PiggyBank, Banknote, Zap, Shield, ArrowRight } from 'lucide-react'

const features = [
  { icon: <Smartphone size={24} />, title: 'Mobile Payments', desc: 'Send and receive money instantly from your phone. No bank branch needed.', bg: 'bg-primary-50 text-primary-700' },
  { icon: <PiggyBank size={24} />, title: 'Personal Savings', desc: 'Set savings goals and watch your money grow with competitive interest rates.', bg: 'bg-green-50 text-green-700' },
  { icon: <Banknote size={24} />, title: 'Personal Loans', desc: 'Get quick access to personal loans with a simple application and fast approval.', bg: 'bg-rose-50 text-rose-700' },
  { icon: <Zap size={24} />, title: 'Bill Payments', desc: 'Pay electricity, cable TV, water bills and buy airtime — all in one place.', bg: 'bg-amber-50 text-amber-700' },
  { icon: <Shield size={24} />, title: 'Secure & Reliable', desc: 'Bank-grade security protects every transaction you make on SmartPay.', bg: 'bg-blue-50 text-blue-700' },
]

const steps = [
  { step: '01', title: 'Download the App', desc: 'Get the SmartPay app on your Android device.' },
  { step: '02', title: 'Create Your Account', desc: 'Sign up in minutes with your basic details and BVN.' },
  { step: '03', title: 'Fund Your Wallet', desc: 'Add money to your SmartPay wallet via bank transfer.' },
  { step: '04', title: 'Start Transacting', desc: 'Send money, pay bills, save and borrow — all from the app.' },
]

export default function PersonalPage(): JSX.Element {
  return (
    <div className="pt-24">
      <PageHero
        badge="Personal Banking"
        title={<>Banking Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Personal</span></>}
        subtitle="Everything you need to manage your money — payments, savings, loans and bills — all in one app."
      />

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">What You Get</span>
            <h2 className="text-4xl font-display font-extrabold text-dark-900">Everything You Need in One App</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-3xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-5`}>{f.icon}</div>
                <h3 className="font-display font-bold text-dark-900 text-lg mb-2">{f.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">How It Works</span>
            <h2 className="text-4xl font-display font-extrabold text-dark-900">Get Started in 4 Simple Steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-3xl p-7 border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white font-display font-extrabold text-lg flex items-center justify-center mx-auto mb-5">{s.step}</div>
                <h3 className="font-display font-bold text-dark-900 text-lg mb-2">{s.title}</h3>
                <p className="text-dark-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
