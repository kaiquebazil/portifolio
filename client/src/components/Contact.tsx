import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

/**
 * Contact Section - Minimalismo Contemporâneo
 * CTA com links de contato e redes sociais
 */
export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kaique@email.com',
      href: 'mailto:kaique@email.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kaiquebazil',
      href: 'https://linkedin.com/in/kaiquebazil',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kaiquebazil',
      href: 'https://github.com/kaiquebazil',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 (XX) XXXXX-XXXX',
      href: 'https://wa.me/5511999999999',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Main CTA */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="accent-line"></div>
          </div>
          <h2 className="display-lg text-foreground mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="body-lg text-foreground/70 mb-8">
            Estou sempre aberto a novos projetos, colaborações e oportunidades. Sinta-se livre para entrar em contato comigo através de qualquer um dos canais abaixo.
          </p>
          <a
            href="mailto:kaique@email.com"
            className="btn-primary inline-block"
          >
            Enviar Email
          </a>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="card-minimal text-center hover:border-primary group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="heading-md text-foreground mb-2">{method.label}</h3>
                <p className="text-sm text-foreground/60 break-all">{method.value}</p>
              </a>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <p className="text-foreground/70 mb-6">Ou me encontre nas redes sociais</p>
          <div className="flex justify-center gap-6">
            {[
              {
                icon: Github,
                href: 'https://github.com/kaiquebazil',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://linkedin.com/in/kaiquebazil',
                label: 'LinkedIn',
              },
              {
                icon: MessageCircle,
                href: 'https://wa.me/5511999999999',
                label: 'WhatsApp',
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
