import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import clsx from 'clsx'

export default function ScrollToTop(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={clsx(
        'fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/40 flex items-center justify-center transition-all duration-300',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowUp size={20} />
    </button>
  )
}
