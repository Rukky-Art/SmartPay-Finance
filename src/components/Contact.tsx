import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState, ChangeEvent } from 'react'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact(): JSX.Element {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(at 70% 50%, #2a37ba 0px, transparent 60%)' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-600/20 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">Ready to Get Started?</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">Speak to a SmartPay specialist today and discover how we can transform your financial experience.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              { icon: <Phone size={20} className="text-primary-400" />, label: 'Call Us', value: '07071429326', href: 'tel:07071429326' },
              { icon: <Mail size={20} className="text-primary-400" />, label: 'Email Us', value: 'info@smartpayfinance.com', href: 'mailto:info@smartpayfinance.com' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">{item.label}</p>
                  <a href={item.href} className="text-white font-semibold hover:text-primary-400 transition-colors">{item.value}</a>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary-400" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Our Location</p>
                <p className="text-white font-semibold">Nigeria — Regional Hubs</p>
              </div>
            </div>
            <div className="mt-8 rounded-3xl bg-primary-600/10 border border-primary-500/20 p-7">
              <h4 className="text-white font-display font-bold text-lg mb-2">Download the App</h4>
              <p className="text-white/50 text-sm mb-5">Get started with SmartPay Finance & Holdings on your mobile device.</p>
              <a href="https://drive.google.com/file/d/1lXWjpnEX2uUzQFCKdD7xACxckFC7mV37/view" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Get Started
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-white font-display font-bold text-xl mb-6">Request a Callback</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs font-medium block mb-1.5">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div>
                  <label className="text-white/50 text-xs font-medium block mb-1.5">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="0700 000 0000"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-white/50 text-xs font-medium block mb-1.5">Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div>
                <label className="text-white/50 text-xs font-medium block mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none" />
              </div>
              <button onClick={() => alert('Thank you! We will be in touch shortly.')}
                className="w-full flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-4 rounded-xl transition-colors">
                <Send size={16} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
