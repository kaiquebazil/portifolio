import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Minimalismo Contemporâneo
 * Navegação limpa com logo e menu responsivo
 * Tipografia: Poppins para logo, Inter para nav
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <h1 className="text-xl font-bold" style={{ fontFamily: 'Poppins' }}>
            Kaique Bazil
          </h1>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium"
              style={{ fontFamily: 'Inter' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="btn-primary"
          >
            Entrar em Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar em Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
