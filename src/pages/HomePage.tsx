import Hero from '../components/Hero.tsx'
import About from '../components/About.tsx'
import Services from '../components/Services.tsx'
import Operations from '../components/Operations.tsx'
import Contact from '../components/Contact.tsx'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Operations />
      <Contact />
    </>
  )
}
