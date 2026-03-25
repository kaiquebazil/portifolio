/**
 * Footer Component - Minimalismo Contemporâneo
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-primary rounded-full"></div>
              <h3 className="text-lg font-bold">Kaique Bazil</h3>
            </div>
            <p className="text-background/70 text-sm">
              Desenvolvedor Web & Mobile criando experiências digitais modernas e funcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {[
                { label: 'Sobre', href: '#sobre' },
                { label: 'Habilidades', href: '#habilidades' },
                { label: 'Projetos', href: '#projetos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <p className="text-background/70">
                Email:{' '}
                <a
                  href="mailto:kaique@email.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  kaique@email.com
                </a>
              </p>
              <p className="text-background/70">
                GitHub:{' '}
                <a
                  href="https://github.com/kaiquebazil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  @kaiquebazil
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            © {currentYear} Kaique Bazil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
