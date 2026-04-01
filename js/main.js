// Custom cursor
const cur = document.getElementById('cur');
const curF = document.getElementById('curF');
let mx = 0, my = 0, fx = 0, fy = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx - 5 + 'px';
  cur.style.top = my - 5 + 'px';
});
function followCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  curF.style.left = fx - 18 + 'px';
  curF.style.top = fy - 18 + 'px';
  requestAnimationFrame(followCursor);
}
followCursor();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.transform = 'scale(2)'; curF.style.transform = 'scale(1.5)'; });
  el.addEventListener('mouseleave', () => { cur.style.transform = 'scale(1)'; curF.style.transform = 'scale(1)'; });
});

// Scroll progress
const scrollLine = document.getElementById('scrollLine');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  scrollLine.style.width = pct + '%';
});

// Mobile nav
const toggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  toggle.classList.remove('active');
}));

// More projects toggle
const moreProjects = document.getElementById('moreProjects');
const toggleMore = document.getElementById('toggleMore');
const toggleMoreTxt = document.getElementById('toggleMoreTxt');
toggleMore.addEventListener('click', () => {
  const isOpen = moreProjects.classList.toggle('open');
  if (toggleMoreTxt) {
    if (lang === 'pt') {
      toggleMoreTxt.textContent = isOpen ? 'Ver menos' : 'Ver mais projetos';
    } else {
      toggleMoreTxt.textContent = isOpen ? 'Show less' : 'View more projects';
    }
  }
  toggleMore.classList.toggle('open', isOpen);
});

// Intersection observer fade-up
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Language switcher - COMPLETE TRANSLATION
let lang = 'pt';
const langBtn = document.getElementById('langBtn');

// Complete translations dictionary
const translations = {
  en: {
    // Navigation
    'sobre': 'About',
    'projetos': 'Projects',
    'certificados': 'Certificates',
    'formacao': 'Education',
    'contato': 'Contact',
    
    // Hero section
    'hero-label': 'Available for projects',
    'hero-desc': 'Passionate about creating digital experiences that combine clean code, design and performance. Based in Petrópolis, RJ.',
    'btn-primary': 'View Projects →',
    'btn-outline': 'Get in touch',
    'hero-badge-txt': 'Years coding',
    'hero-badge2': 'Open to Work ✦',
    
    // About section
    'about-section-num': '01 — About Me',
    'about-title': 'Who<br>I am',
    'about-p1': 'I am a <strong>Front-End & Mobile</strong> developer passionate about creating functional and visually appealing interfaces. Currently studying <strong>ADS at USF</strong> and always looking for new challenges.',
    'about-p2': 'I develop projects like <strong>Finance Flex</strong> (financial management), <strong>LinguaFlash</strong> (multilingual flashcards), and <strong>Kaisui</strong> (personal development app with RPG gamification). For each project, I handle <strong>UX, UI Design</strong>, and implementation.',
    'about-p3': 'I believe good code and good design go hand in hand — and that\'s what I strive for in every project.',
    'skill-frontend': 'Frontend',
    'skill-mobile': 'Mobile & Design',
    'skill-tools': 'Tools',
    'stat-projetos': 'Projects launched',
    'stat-experiencia': 'Years of experience',
    'stat-horas': 'Hours of courses',
    'stat-idiomas': 'Languages',
    
    // Projects section
    'projetos-section-num': '02 — Projects',
    'projetos-title': 'Recent<br>work',
    'ver-projeto': 'View Project',
    'ver-mais-projetos': 'View more projects',
    'ver-menos': 'Show less',
    
    // Project descriptions
    'proj-desc-1': 'Personal financial management web app with income, expense, credit card control, and payment calendar.',
    'proj-desc-2': 'Personal financial management web app with income, expense, credit card control, and payment calendar.',
    'proj-desc-3': 'Multilingual flashcards supporting 8 languages and 122 phrases in 14 categories. Dark editorial interface focused on immersion.',
    'proj-desc-4': 'Personal development app with Alter-Ego system, RPG gamification, workout tracking, and integrated AI chat.',
    'proj-desc-5': 'Interactive gallery with animations and intuitive navigation. Project from Origamid\'s JavaScript ES6 course.',
    'proj-desc-6': 'Corporate website for a fictional bicycle company with catalog, quotes, and responsive layout.',
    'proj-desc-7': 'Collection of college activities demonstrating practical application of programming knowledge.',
    'proj-desc-8': 'Fictional store promoting tech products and services, developed during a maintenance course.',
    'proj-desc-9': 'Barber shop website with price list, gallery, and team section. Uses Bootstrap and jQuery.',
    'proj-desc-10': 'Online portfolio for a professional model with gallery and elegant minimalist design.',
    'proj-desc-11': 'Web calculator with basic and advanced operations, memory, history, and light/dark mode.',
    'proj-desc-12': 'Streaming platform with catalog, custom player, and categories with API integration.',
    'proj-desc-13': 'Complete expense manager based on Udemy\'s Complete Web Development course.',
    
    // Certificates section
    'certificados-section-num': '03 — Certificates',
    'certificados-title': 'Courses &<br>Certificates',
    'cert-1': 'Computer Programming',
    'cert-2': 'Complete JavaScript ES6+',
    'cert-3': 'HTML and CSS for Beginners',
    'cert-4': 'Mobile and Computer Maintenance',
    'cert-5': 'JavaScript — Programming Logic',
    'cert-6': 'Complete Web Development — 20 Projects',
    'cert-1-hours': '60 hours · In-person',
    'cert-2-hours': '39 hours · Online',
    'cert-3-hours': 'Online',
    'cert-4-hours': '112 hours · In-person',
    'cert-5-hours': '20 hours · Online',
    'cert-6-hours': 'Online',
    'concluido': '✓ Completed',
    
    // Education section
    'formacao-section-num': '04 — Education',
    'formacao-title': 'My<br>education',
    'edu-1': 'Systems Analysis and Development',
    'edu-1-school': 'USF — São Francisco University · 3rd Semester',
    'edu-2': 'Computer Programming',
    'edu-3': 'Complete JavaScript ES6+',
    'edu-4': 'Mobile and Computer Maintenance',
    'cursando': 'In progress',
    
    // Languages section
    'idiomas': 'Languages',
    'lang-pt': 'Portuguese',
    'lang-pt-level': 'Native',
    'lang-en': 'English',
    'lang-en-level': 'Intermediate',
    'lang-es': 'Spanish',
    'lang-es-level': 'Basic',
    
    // Contact section
    'contato-section-num': '05 — Contact',
    'contact-hero': 'Let\'s create something <em>incredible</em> together?',
    'whatsapp-msg': 'Send message',
    
    // Footer
    'footer-rights': '© 2026 Kaique Bazil — Some rights reserved.',
    'footer-location': 'Petrópolis, RJ 🇧🇷'
  }
};

// Function to apply translations
function applyTranslations() {
  if (lang !== 'en') return;
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations.en[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations.en[key];
      } else if (element.tagName === 'IMG') {
        element.alt = translations.en[key];
      } else {
        // Preserve HTML structure for elements that contain HTML
        if (key === 'about-title' || key === 'projetos-title' || key === 'certificados-title' || 
            key === 'formacao-title' || key === 'contact-hero' || key === 'about-p1' || 
            key === 'about-p2' || key === 'about-p3') {
          element.innerHTML = translations.en[key];
        } else {
          element.textContent = translations.en[key];
        }
      }
    }
  });
  
  // Update toggle more button text based on current state
  const isOpen = moreProjects.classList.contains('open');
  const toggleMoreTxtSpan = document.getElementById('toggleMoreTxt');
  if (toggleMoreTxtSpan) {
    toggleMoreTxtSpan.textContent = isOpen ? translations.en['ver-menos'] : translations.en['ver-mais-projetos'];
  }
}

// Language switcher event
langBtn.addEventListener('click', () => {
  lang = lang === 'pt' ? 'en' : 'pt';
  langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
  
  if (lang === 'en') {
    document.title = 'Kaique Bazil — Dev';
    applyTranslations();
  } else {
    location.reload();
  }
});

// Typewriter for hero description (only on initial load in Portuguese)
const heroP = document.querySelector('.hero-desc');
if (heroP && heroP.textContent === '') {
  const origText = 'Apaixonado por criar experiências digitais que combinam código limpo, design e performance. Baseado em Petrópolis, RJ.';
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