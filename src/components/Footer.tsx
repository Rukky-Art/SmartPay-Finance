import { Link } from 'react-router-dom'

const footerLinks = {
  Products: [
    { label: 'POS Distribution', href: '/services' },
    { label: 'Savings & Deposit', href: '/services' },
    { label: 'Loan Products', href: '/services' },
    { label: 'Merchant Onboarding', href: '/services' },
    { label: 'Utility Payments', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Banking: [
    { label: 'Personal Banking', href: '/personal' },
    { label: 'Business Banking', href: '/business' },
    { label: 'Agency Banking', href: '/services' },
    { label: 'Fund Transfers', href: '/services' },
  ],
}

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/images/logo.png" alt="SmartPay Logo" className="h-9 w-auto" />
              <span className="text-white font-display font-bold text-xl">SmartPay</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              An innovative and comprehensive financial solution. A subsidiary of BICTECH GROUP INCORPORATION.
            </p>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Subscribe</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500" />
              <button className="bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-white/30 text-xs mt-2">Get the latest updates. Unsubscribe any time.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-display font-bold text-sm mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/40 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2025 SmartPay Finance & Holdings Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Sitemap', 'Help'].map((item) => (
              <a key={item} href="#" className="text-white/30 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
