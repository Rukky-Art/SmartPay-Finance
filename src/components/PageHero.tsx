import { ReactNode } from 'react'

interface PageHeroProps {
  badge: string
  title: string | ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  children?: ReactNode
}

export default function PageHero({ badge, title, subtitle, align = 'center', children }: PageHeroProps): JSX.Element {
  return (
    <section className="relative py-28 bg-dark-900 overflow-hidden">
      {/* Mesh background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(at 40% 20%, #2a37ba 0px, transparent 50%), radial-gradient(at 80% 0%, #2230a0 0px, transparent 50%), radial-gradient(at 0% 50%, #111960 0px, transparent 50%)',
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-600/20 blur-[100px] pointer-events-none" />

      <div className={`relative max-w-7xl mx-auto px-6 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        {/* Badge */}
        <div className={`mb-6 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <span className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-lg text-white/60 leading-relaxed max-w-2xl mb-8 ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}

        {/* Optional CTA buttons or extra content */}
        {children && (
          <div className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
            {children}
          </div>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 15C480 30 240 60 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
