/**
 * About Section - Minimalismo Contemporâneo
 * Apresentação profissional com layout assimétrico
 */
export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <div className="accent-line"></div>
            <h2 className="heading-xl text-foreground">Sobre Mim</h2>
            
            <div className="space-y-4 body-lg text-foreground/70">
              <p>
                Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e funcionais. Com mais de 3 anos de experiência em desenvolvimento web e mobile, trabalho com as tecnologias mais modernas do mercado.
              </p>
              <p>
                Minha jornada começou com curiosidade por programação e evoluiu para uma carreira dedicada a criar experiências de usuário excepcionais. Acredito que bom design e código limpo andam de mãos dadas.
              </p>
              <p>
                Quando não estou codificando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open source ou compartilhando conhecimento com a comunidade.
              </p>
            </div>

            {/* Skills Quick List */}
            <div className="pt-6">
              <h3 className="heading-md text-foreground mb-4">Principais Competências</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'React & JavaScript',
                  'UI/UX Design',
                  'Responsive Design',
                  'Web Performance',
                  'Git & GitHub',
                  'Figma & Design Tools',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-foreground/70"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden md:block">
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                {/* Timeline Item */}
                {[
                  {
                    year: '2025',
                    title: 'Desenvolvedor Senior',
                    company: 'Freelancer',
                  },
                  {
                    year: '2024',
                    title: 'Desenvolvedor Full Stack',
                    company: 'Agência Digital',
                  },
                  {
                    year: '2023',
                    title: 'Desenvolvedor Frontend',
                    company: 'Startup Tech',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      {index < 2 && (
                        <div className="w-0.5 h-12 bg-border mt-2"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-primary font-semibold">{item.year}</p>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-foreground/60">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
