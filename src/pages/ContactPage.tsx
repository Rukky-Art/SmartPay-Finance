import PageHero from '../components/PageHero.tsx'
import { useState, ChangeEvent } from 'react'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const contactInfo = [
  { icon: <Phone size={22} className="text-primary-400" />, label: 'Call Us', value: '07071429326', href: 'tel:07071429326' },
  { icon: <Mail size={22} className="text-primary-400" />, label: 'Email Us', value: 'info@smartpayfinance.com', href: 'mailto:info@smartpayfinance.com' },
  { icon: <MapPin size={22} className="text-primary-400" />, label: 'Location', value: 'Nigeria — Regional Hubs', href: '#' },
  { icon: <Clock size={22} className="text-primary-400" />, label: 'Working Hours', value: 'Mon – Fri, 8am – 6pm', href: '#' },
]

const subjects = ['General Inquiry', 'POS Distribution', 'Agency Banking', 'Loan Products', 'Savings & Deposits', 'Technical Support', 'Partnership']

export default function ContactPage(): JSX.Element {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (): void => {
    if (form.name && form.email && form.message) setSubmitted(true)
  }

  return (
    <div className="pt-24">
      <PageHero badge="Contact Us" title={<>Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Touch</span></>} subtitle="Have a question or ready to get started? Speak to a SmartPay specialist today." />

      {/* Contact grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <h2 className="text-3xl font-display font-extrabold text-dark-900 mb-3">We'd love to hear from you</h2>
            <p className="text-dark-500 mb-10">Reach out through any of the channels below and our team will respond as quickly as possible.</p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-dark-400 text-xs font-medium mb-0.5">{item.label}</p>
                    <p className="text-dark-900 font-semibold text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl bg-gradient-to-br from-primary-600 to-primary-950 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-white/60 mx-auto mb-2" />
                <p className="text-white/60 text-sm">Nigeria — Regional Hubs</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-5">
                  <Send size={24} className="text-primary-600" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-dark-900 mb-2">Message Sent!</h3>
                <p className="text-dark-500">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-7">Send Us a Message</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-dark-500 text-xs font-semibold block mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
                        className="w-full bg-white border border-gray-200 text-dark-900 placeholder-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                    </div>
                    <div>
                      <label className="text-dark-500 text-xs font-semibold block mb-1.5">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="0700 000 0000"
                        className="w-full bg-white border border-gray-200 text-dark-900 placeholder-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-dark-500 text-xs font-semibold block mb-1.5">Email Address *</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
                      className="w-full bg-white border border-gray-200 text-dark-900 placeholder-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-dark-500 text-xs font-semibold block mb-1.5">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange}
                      className="w-full bg-white border border-gray-200 text-dark-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors">
                      <option value="">Select a subject</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-dark-500 text-xs font-semibold block mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?"
                      className="w-full bg-white border border-gray-200 text-dark-900 placeholder-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none" />
                  </div>
                  <button onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl transition-colors">
                    <Send size={16} /> Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
