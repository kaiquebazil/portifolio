// ============================================================
// CUSTOM CURSOR - Otimizado com throttle
// ============================================================
const cur = document.getElementById('cur');
const curF = document.getElementById('curF');
let mx = 0, my = 0, fx = 0, fy = 0;
let cursorFrameId = null;

// Throttle para mousemove - melhora performance
document.addEventListener('mousemove', e => {
  mx = e.clientX; 
  my = e.clientY;
  cur.style.left = mx - 5 + 'px';
  cur.style.top = my - 5 + 'px';
}, { passive: true });

function followCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  curF.style.left = fx - 18 + 'px';
  curF.style.top = fy - 18 + 'px';
  cursorFrameId = requestAnimationFrame(followCursor);
}
followCursor();

// ============================================================
// CURSOR HOVER EFFECTS - Com event delegation
// ============================================================
document.addEventListener('mouseenter', (e) => {
  const target = e.target.closest('a, button, .proj-card, .cert-card, .edu-item, .contact-link-item');
  if (target) {
    cur.style.transform = 'scale(2)';
    curF.style.transform = 'scale(1.5)';
  }
}, true);

document.addEventListener('mouseleave', (e) => {
  const target = e.target.closest('a, button, .proj-card, .cert-card, .edu-item, .contact-link-item');
  if (target) {
    cur.style.transform = 'scale(1)';
    curF.style.transform = 'scale(1)';
  }
}, true);

// ============================================================
// SCROLL PROGRESS - Otimizado com requestAnimationFrame
// ============================================================
const scrollLine = document.getElementById('scrollLine');
let scrollFrameId = null;

function updateScrollProgress() {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  scrollLine.style.width = pct + '%';
  scrollFrameId = requestAnimationFrame(updateScrollProgress);
}

window.addEventListener('scroll', () => {
  if (scrollFrameId) cancelAnimationFrame(scrollFrameId);
  scrollFrameId = requestAnimationFrame(updateScrollProgress);
}, { passive: true });

// ============================================================
// MOBILE NAV - Com suporte a teclado (acessibilidade)
// ============================================================
const toggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  toggle.classList.toggle('active');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  
  // Acessibilidade: informar estado do menu
  toggle.setAttribute('aria-expanded', isOpen);
  
  // Focar primeiro link quando abrir
  if (isOpen) {
    setTimeout(() => {
      const firstLink = navLinks.querySelector('a');
      if (firstLink) firstLink.focus();
    }, 100);
  }
}

toggle.addEventListener('click', toggleMenu);

// Suporte a teclado (Enter/Space)
toggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ============================================================
// MORE PROJECTS TOGGLE
// ============================================================
const moreProjects = document.getElementById('moreProjects');
const toggleMore = document.getElementById('toggleMore');
const toggleMoreTxt = document.getElementById('toggleMoreTxt');

function toggleMoreProjects() {
  const isOpen = moreProjects.classList.toggle('open');
  toggleMore.classList.toggle('open', isOpen);
  
  if (toggleMoreTxt) {
    const lang = document.documentElement.lang || 'pt';
    if (lang === 'pt') {
      toggleMoreTxt.textContent = isOpen ? 'Ver menos' : 'Ver mais projetos';
    } else {
      toggleMoreTxt.textContent = isOpen ? 'Show less' : 'View more projects';
    }
  }
}

toggleMore.addEventListener('click', toggleMoreProjects);

// ============================================================
// INTERSECTION OBSERVER - FADE UP (com fallback)
// ============================================================
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ============================================================
// LANGUAGE SWITCHER
// ============================================================
let lang = 'pt';
const langBtn = document.getElementById('langBtn');

const translations = {
  en: {
    'sobre': 'About',
    'projetos': 'Projects',
    'certificados': 'Certificates',
    'formacao': 'Education',
    'contato': 'Contact',
    'hero-label': 'Available for opportunities',
    'hero-desc': 'Systems Analysis and Development student, passionate about technology, software development and problem solving. Seeking opportunities in Web Development, Technical Support, Help Desk and IT Infrastructure.',
    'btn-primary': 'View Projects →',
    'btn-outline': 'Get in touch',
    'hero-badge-txt': 'Years coding',
    'hero-badge2': 'Open to Work ✦',
    'about-section-num': '01 — About Me',
    'about-title': 'Who<br>I am',
    'about-p1': 'I am <strong>Kaique de Souza Bazil</strong>, a <strong>Systems Analysis and Development</strong> student at USF. Passionate about technology, software development and problem solving, I constantly seek new challenges to apply and expand my knowledge.',
    'about-p2': 'I work as an <strong>entrepreneur at KBTECHPETROPOLIS</strong>, performing computer, cell phone and electronics maintenance, developing skills in <strong>hardware, software and customer service</strong>. I also have practical experience as a sales clerk and delivery driver, which strengthened my <strong>communication, organization and teamwork</strong>.',
    'about-p3': 'My <strong>professional goal</strong> is to enter the Information Technology field, working in areas such as <strong>Web Development, Technical Support, Help Desk, Infrastructure, Systems Analysis, Databases, QA or Information Security</strong>. I am ready to contribute with dedication, continuous learning and commitment to a company that values innovation and professional development.',
    'skill-frontend': 'Frontend',
    'skill-mobile': 'Mobile & Design',
    'skill-tools': 'Tools',
    'stat-projetos': 'Projects launched',
    'stat-experiencia': 'Years of experience',
    'stat-horas': 'Hours of courses',
    'stat-idiomas': 'Languages',
    'projetos-section-num': '02 — Projects',
    'projetos-title': 'Recent<br>work',
    'ver-projeto': 'View Project',
    'ver-mais-projetos': 'View more projects',
    'ver-menos': 'Show less',
    'proj-desc-1': 'Web and mobile personal finance management application with income, expense, credit card and payment calendar control. <strong>Problem solved:</strong> Centralization and simplification of personal financial control.',
    'proj-desc-2': 'Portfolio for a psychologist focused on online and in-person therapy. <strong>Problem solved:</strong> Professional digital presence for mental health professionals.',
    'proj-desc-3': 'Multilingual flashcards supporting 8 languages and 122 phrases in 14 categories. <strong>Problem solved:</strong> Immersive and interactive language learning.',
    'proj-desc-4': 'Personal development app with Alter-Ego system, gamification and integrated chat. <strong>Problem solved:</strong> Motivation and engagement in healthy habits through gamification.',
    'proj-desc-5': 'Interactive gallery with animations and intuitive navigation. <strong>Problem solved:</strong> Dynamic visual content presentation. <strong>Role:</strong> Front-end Development.',
    'proj-desc-6': 'Corporate website for a fictional bicycle company. <strong>Problem solved:</strong> Professional digital presence for local businesses. <strong>Role:</strong> Front-end Development.',
    'proj-desc-8': 'Fictional store promoting technology products and services. <strong>Problem solved:</strong> Digital storefront for tech stores. <strong>Role:</strong> Front-end Development.',
    'proj-desc-9': 'Barber shop website with price list and gallery. <strong>Problem solved:</strong> Digital presence for small businesses. <strong>Role:</strong> Front-end Development.',
    'proj-desc-10': 'Online portfolio for a professional model. <strong>Problem solved:</strong> Elegant digital portfolio for creative professionals. <strong>Role:</strong> Front-end Development.',
    'proj-desc-11': 'Web calculator with basic and advanced operations. <strong>Problem solved:</strong> Practical tool for quick calculations. <strong>Role:</strong> Front-end Development.',
    'proj-desc-12': 'Streaming platform with catalog and custom player. <strong>Problem solved:</strong> Custom digital content platform. <strong>Role:</strong> Front-end Development.',
    'proj-desc-13': 'Complete expense manager. <strong>Problem solved:</strong> Simple and efficient financial control. <strong>Role:</strong> Front-end Development.',
    'certificados-section-num': '03 — Certificates',
    'certificados-title': 'Courses &<br>Certificates',
    'cert-1': 'Computer Programming',
    'cert-2': 'Complete JavaScript ES6+',
    'cert-3': 'HTML and CSS for Beginners',
    'cert-4': 'Mobile and Computer Maintenance',
    'cert-5': 'JavaScript — Programming Logic',
    'cert-6': 'Complete Web Development — 20 Projects',
    'cert-7': 'Advanced UI Design',
    'cert-8': 'React Native — Zero to Hero',
    'cert-1-hours': '60 hours · In-person',
    'cert-2-hours': '39 hours · Online',
    'cert-3-hours': 'Online',
    'cert-4-hours': '112 hours · In-person',
    'cert-5-hours': '20 hours · Online',
    'cert-6-hours': 'Online',
    'cert-7-hours': '30 hours · Online',
    'cert-8-hours': '45 hours · Online',
    'concluido': '✓ Completed',
    'formacao-section-num': '04 — Education',
    'formacao-title': 'My<br>education',
    'edu-1': 'Systems Analysis and Development',
    'edu-1-school': 'USF — São Francisco University · 3rd Semester',
    'edu-2': 'Computer Programming',
    'edu-3': 'Complete JavaScript ES6+',
    'edu-4': 'Mobile and Computer Maintenance',
    'cursando': 'In progress',
    'idiomas': 'Languages',
    'lang-pt': 'Portuguese',
    'lang-pt-level': 'Native',
    'lang-en': 'English',
    'lang-en-level': 'Intermediate (Conversation)',
    'lang-es': 'Spanish',
    'lang-es-level': 'Basic',
    'contato-section-num': '05 — Contact',
    'contact-hero': 'Let\'s create something <em>incredible</em> together?',
    'whatsapp-msg': 'Send message',
    'footer-rights': '© 2026 Kaique Bazil — Some rights reserved.',
    'footer-location': 'Nova Iguaçu, RJ 🇧🇷'
  }
};

function applyTranslations() {
  if (lang !== 'en') return;
  
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations.en[key]) {
      const htmlKeys = ['about-title', 'projetos-title', 'certificados-title', 'formacao-title', 'contact-hero', 'about-p1', 'about-p2', 'about-p3', 'proj-desc-1', 'proj-desc-2', 'proj-desc-3', 'proj-desc-4', 'proj-desc-5', 'proj-desc-6', 'proj-desc-8', 'proj-desc-9', 'proj-desc-10', 'proj-desc-11', 'proj-desc-12', 'proj-desc-13'];
      if (htmlKeys.includes(key)) {
        element.innerHTML = translations.en[key];
      } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations.en[key];
      } else {
        element.textContent = translations.en[key];
      }
    }
  });
  
  const isOpen = moreProjects.classList.contains('open');
  const toggleMoreTxtSpan = document.getElementById('toggleMoreTxt');
  if (toggleMoreTxtSpan) {
    toggleMoreTxtSpan.textContent = isOpen ? translations.en['ver-menos'] : translations.en['ver-mais-projetos'];
  }
}

langBtn.addEventListener('click', () => {
  lang = lang === 'pt' ? 'en' : 'pt';
  langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
  document.documentElement.lang = lang;
  
  if (lang === 'en') {
    document.title = 'Kaique Bazil — Portfolio | Web Developer & IT Support';
    applyTranslations();
  } else {
    location.reload();
  }
});

// ============================================================
// TYPEWRITER - Apenas no carregamento inicial
// ============================================================
const heroP = document.querySelector('.hero-desc');
if (heroP) {
  const storedText = heroP.textContent.trim();
  if (!storedText || storedText === '') {
    const origText = 'Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia, desenvolvimento de software e resolução de problemas. Buscando oportunidades em Desenvolvimento Web, Suporte Técnico, Help Desk e Infraestrutura de TI.';
    heroP.textContent = '';
    let i = 0;
    function type() {
      if (i < origText.length) {
        heroP.textContent += origText[i++];
        setTimeout(type, 18);
      }
    }
    window.addEventListener('load', type);
  }
}

// ============================================================
// LISTA DE CERTIFICADOS EM PDF
// ============================================================
const certificadosPdf = [
  { titulo: "Learn CSS - For Beginners", emissor: "Udemy", icone: "⚡", linkPdf: "../portifolio/certificados/learningcss.pdf" },
  { titulo: "Inglês Nível Intermediário", emissor: "English Work", icone: "📘", linkPdf: "../portifolio/certificados/c%20(2).pdf" },
  { titulo: "Inglês Nível Avançado", emissor: "English Work", icone: "📘", linkPdf: "../portifolio/certificados/c%20(3).pdf" },
  { titulo: "Inglês 1", emissor: "Plataforma aprenda", icone: "📘", linkPdf: "../portifolio/certificados/PROT_2754720884496551.pdf" },
  { titulo: "Canva: Design Gráfico Descomplicado", emissor: "Udemy", icone: "🎨", linkPdf: "../portifolio/certificados/canva.pdf" },
  { titulo: "Forte Mente - Desenvolvimento Pessoal", emissor: "Udemy", icone: "📱", linkPdf: "../portifolio/certificados/fortemente.pdf" },
  { titulo: "CURSO DE CONVERSAÇÃO - CONVERSATION CLUB", emissor: "Mais Língua", icone: "🔧", linkPdf: "../portifolio/certificados/ingles.pdf" },
  { titulo: "Create Your First Website with HTML, CSS & JavaScript", emissor: "Udemy", icone: "🖥️", linkPdf: "../portifolio/certificados/htmlecss.pdf" },
  { titulo: "HTML, CSS, & JavaScript", emissor: "Udemy", icone: "🖥️", linkPdf: "../portifolio/certificados/htmlcssjs.pdf" },
  { titulo: "ZOOM Masterclass: Grundlagen, Anleitungen und geheime Tricks", emissor: "Udemy", icone: "✨", linkPdf: "../portifolio/certificados/zoom.pdf" }
];

function renderizarListaPDF() {
  const container = document.getElementById("listaPdfs");
  if (!container) return;
  container.innerHTML = "";
  
  certificadosPdf.forEach(cert => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "pdf-item";
    
    const infoDiv = document.createElement("div");
    infoDiv.className = "pdf-info";
    
    const tituloSpan = document.createElement("span");
    tituloSpan.className = "pdf-titulo";
    tituloSpan.innerText = cert.titulo;
    
    const detalheSpan = document.createElement("span");
    detalheSpan.className = "pdf-detalhe";
    detalheSpan.innerHTML = `<span class="pdf-icon-pequeno">${cert.icone}</span> ${cert.emissor}`;
    
    infoDiv.appendChild(tituloSpan);
    infoDiv.appendChild(detalheSpan);
    
    const linkBtn = document.createElement("a");
    linkBtn.href = cert.linkPdf;
    linkBtn.target = "_blank";
    linkBtn.rel = "noopener noreferrer";
    linkBtn.className = "btn-pdf";
    linkBtn.innerHTML = "📄 Visualizar PDF →";
    linkBtn.setAttribute('aria-label', `Visualizar certificado: ${cert.titulo}`);
    
    itemDiv.appendChild(infoDiv);
    itemDiv.appendChild(linkBtn);
    container.appendChild(itemDiv);
  });
}

// ============================================================
// CONTROLE DO MODAL
// ============================================================
const overlay = document.getElementById("modalPdfOverlay");
const abrirBtn = document.getElementById("btnAbrirModal");
const fecharBtn = document.getElementById("btnFecharModal");

function abrirModal() {
  if (overlay) {
    overlay.classList.add("ativo");
    document.body.style.overflow = "hidden";
    overlay.setAttribute('aria-hidden', 'false');
    // Foco no botão de fechar
    setTimeout(() => { if (fecharBtn) fecharBtn.focus(); }, 100);
  }
}

function fecharModal() {
  if (overlay) {
    overlay.classList.remove("ativo");
    document.body.style.overflow = "";
    overlay.setAttribute('aria-hidden', 'true');
    if (abrirBtn) abrirBtn.focus();
  }
}

if (abrirBtn) abrirBtn.addEventListener("click", abrirModal);
if (fecharBtn) fecharBtn.addEventListener("click", fecharModal);

if (overlay) {
  overlay.setAttribute('aria-hidden', 'true');
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay && overlay.classList.contains("ativo")) {
    fecharModal();
  }
});

// ============================================================
// INICIALIZAÇÃO
// ============================================================
renderizarListaPDF();

// ============================================================
// OTIMIZAÇÃO DE PERFORMANCE: Lazy Load de imagens
// ============================================================
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading já está sendo usado via HTML
} else {
  // Fallback para navegadores antigos
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  });
}

// ============================================================
// Acessibilidade: Adicionar roles ARIA onde necessário
// ============================================================
document.querySelectorAll('section').forEach(section => {
  if (!section.hasAttribute('aria-labelledby')) {
    const heading = section.querySelector('h1, h2, h3');
    if (heading && heading.id) {
      section.setAttribute('aria-labelledby', heading.id);
    }
  }
});

// ============================================================
// Relatório de performance (console apenas em desenvolvimento)
// ============================================================
if (process.env.NODE_ENV !== 'production') {
  console.log('Portfólio Kaique Bazil — Otimizado para recrutadores TI');
}