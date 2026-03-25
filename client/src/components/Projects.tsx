import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects Section - Minimalismo Contemporâneo
 * Grid de projetos com cards elegantes e links
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Finance Flex',
      year: '2025',
      description: 'Aplicativo web de gestão financeira pessoal com controle de transações, gerenciamento de cartões e calendário de pagamentos.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      link: 'https://kaiquebazil.github.io/FinanceFlex',
      github: 'https://github.com/kaiquebazil/FinanceFlex',
      featured: true,
    },
    {
      id: 2,
      title: 'Learning Portuguese',
      year: '2025',
      description: 'Plataforma interativa para aprendizado de português com frases práticas, dicas e recursos multimídia.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      link: 'https://kaiquebazil.github.io/LearningPortuguese/',
      github: 'https://github.com/kaiquebazil/LearningPortuguese',
      featured: true,
    },
    {
      id: 3,
      title: 'Animais Fantásticos',
      year: '2025',
      description: 'Galeria interativa de animais com informações dinâmicas, animações e navegação intuitiva.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      link: 'https://kaiqueprog.github.io/animaisfantasticos',
      github: 'https://github.com/kaiqueprog/animaisfantasticos',
      featured: false,
    },
    {
      id: 4,
      title: 'Bikcraft',
      year: '2024',
      description: 'Site institucional para empresa de bicicletas com catálogo de produtos, orçamentos e layout responsivo.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://kaiqueprog.github.io/bikcraft',
      github: 'https://github.com/kaiqueprog/bikcraft',
      featured: false,
    },
    {
      id: 5,
      title: 'Barber Shop',
      year: '2022',
      description: 'Site para barbearia com tabela de preços, galeria, equipe e informações de contato.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
      link: 'https://kaiqueprog.github.io/bs',
      github: 'https://github.com/kaiqueprog/bs',
      featured: false,
    },
    {
      id: 6,
      title: 'Calculadora',
      year: '2021',
      description: 'Calculadora web com operações básicas e avançadas, memória e histórico de cálculos.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      link: 'https://kaiqueprog.github.io/Calculadora',
      github: 'https://github.com/kaiqueprog/Calculadora',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projetos" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="accent-line mb-4"></div>
          <h2 className="heading-xl text-foreground mb-4">Meus Projetos</h2>
          <p className="body-lg text-foreground/70">
            Uma seleção dos meus trabalhos mais recentes, demonstrando expertise em desenvolvimento web e mobile.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="heading-md text-foreground mb-8">Projetos em Destaque</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="card-minimal flex flex-col"
                >
                  {/* Year Badge */}
                  <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {project.year}
                  </span>

                  {/* Title */}
                  <h3 className="heading-md text-foreground mb-2">{project.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-foreground/70 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-border">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent flex items-center gap-2"
                    >
                      Ver Projeto
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent flex items-center gap-2"
                    >
                      GitHub
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="heading-md text-foreground mb-8">Outros Projetos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="card-minimal flex flex-col"
                >
                  {/* Year Badge */}
                  <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                    {project.year}
                  </span>

                  {/* Title */}
                  <h4 className="heading-md text-foreground mb-2">{project.title}</h4>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-secondary text-foreground/70 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-0.5 text-foreground/60 text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold flex items-center gap-1"
                    >
                      Ver
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold flex items-center gap-1"
                    >
                      GitHub
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
