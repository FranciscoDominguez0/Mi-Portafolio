import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  )
}