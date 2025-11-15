import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
        <footer className="py-10 text-center text-white/50 bg-black border-t border-white/10">
          <p>© {new Date().getFullYear()} BlueShield Security — Built with a security-first mindset.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
