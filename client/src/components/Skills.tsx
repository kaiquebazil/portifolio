import { Code2, Palette, Smartphone, Zap } from 'lucide-react';

/**
 * Skills Section - Minimalismo Contemporâneo
 * Grid de habilidades com ícones e descrições
 */
export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS',
      skills: ['React 19', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design de interfaces modernas e acessíveis',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Accessibility'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Desenvolvimento de aplicações mobile responsivas',
      skills: ['React Native', 'Mobile-First', 'Cross-platform', 'Performance', 'PWA'],
    },
    {
      icon: Zap,
      title: 'Performance & Tools',
      description: 'Otimização e ferramentas de desenvolvimento',
      skills: ['Git & GitHub', 'Webpack', 'Vite', 'Testing', 'CI/CD'],
    },
  ];

  return (
    <section id="habilidades" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="accent-line mb-4"></div>
          <h2 className="heading-xl text-foreground mb-4">Habilidades & Expertise</h2>
          <p className="body-lg text-foreground/70">
            Uma combinação de habilidades técnicas e criativas que me permite criar soluções digitais de alta qualidade.
          </p>
        </div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663458844252/JcbhkKjwjPnGivxv6oDHwj/skills-pattern-2MrPRD9YwuiXxBRfjE7MvX.webp)',
            backgroundSize: '400px 400px',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-minimal group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="heading-md text-foreground mb-2">{category.title}</h3>
                <p className="text-foreground/60 mb-6">{category.description}</p>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="heading-md text-foreground mb-8">Tecnologias & Ferramentas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Git',
              'Figma',
              'Vite',
              'Bootstrap',
              'jQuery',
              'APIs REST',
            ].map((tech) => (
              <div
                key={tech}
                className="p-4 bg-background border border-border rounded-lg text-center hover:border-primary transition-colors"
              >
                <span className="font-semibold text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
