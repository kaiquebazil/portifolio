import { ArrowRight } from 'lucide-react';

/**
 * Hero Section - Minimalismo Contemporâneo
 * Layout assimétrico com imagem de fundo e tipografia ousada
 * Cores: Branco, cinza escuro e azul elétrico
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663458844252/JcbhkKjwjPnGivxv6oDHwj/hero-background-VosFA38cPGHnEMoB53Zeod.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            {/* Linha de acento */}
            <div className="accent-line"></div>

            {/* Título */}
            <div>
              <h1 className="display-xl text-foreground mb-4">
                Desenvolvedor Web & Mobile
              </h1>
              <p className="body-lg text-foreground/70 max-w-md">
                Criando experiências digitais modernas e funcionais. Especializado em React, JavaScript e design responsivo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projetos"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Ver Meus Projetos
                <ArrowRight size={20} />
              </a>
              <a
                href="#contato"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Conversar Comigo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <p className="text-sm text-foreground/60">Projetos Concluídos</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3+</div>
                <p className="text-sm text-foreground/60">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <p className="text-sm text-foreground/60">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Imagem/Elemento Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Círculo de acento */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl"></div>
              
              {/* Elemento decorativo */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

              {/* Placeholder para foto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458844252/JcbhkKjwjPnGivxv6oDHwj/accent-element-JykxgA9WseSMmkbnk8Srtr.webp"
                  alt="Elemento decorativo"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
