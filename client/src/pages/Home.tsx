import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - Portfólio Moderno
 * Minimalismo Contemporâneo com Tipografia Ousada
 * 
 * Design Philosophy:
 * - Tipografia como protagonista (Playfair Display, Poppins, Inter)
 * - Espaço negativo estratégico
 * - Foco em conteúdo
 * - Movimento subtil
 * - Paleta: Branco, cinza escuro, azul elétrico
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
