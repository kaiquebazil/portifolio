
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
    toggleMoreTxt.textContent = isOpen ? 'Ver menos' : 'Ver mais projetos';
    toggleMore.classList.toggle('open', isOpen);
  });

  // Intersection observer fade-up
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Language switcher
  let lang = 'pt';
  const langBtn = document.getElementById('langBtn');
  const translations = {
    en: {
      'Disponível para projetos': 'Available for projects',
      'Ver Projetos →': 'View Projects →',
      'Entrar em Contato': 'Get in touch',
      'Sobre': 'About',
      'Projetos': 'Projects',
      'Certificados': 'Certificates',
      'Formação': 'Education',
      'Contato': 'Contact',
    }
  };
  langBtn.addEventListener('click', () => {
    lang = lang === 'pt' ? 'en' : 'pt';
    langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
    if (lang === 'en') {
      document.title = 'Kaique Bazil — Dev';
      document.querySelector('.hero-label').textContent = 'Available for projects';
      document.querySelector('.btn-primary').textContent = 'View Projects →';
      document.querySelector('.btn-outline').textContent = 'Get in touch';
      document.querySelector('.hero-desc').textContent = 'Passionate about creating digital experiences that combine clean code, design and performance. Based in Petrópolis, RJ.';
      document.querySelector('.hero-badge2').textContent = 'Open to Work ✦';
      document.querySelector('.contact-hero-txt').innerHTML = "Let's create something <em>incredible</em> together?";
      document.querySelector('footer p:last-child').textContent = 'Petrópolis, RJ 🇧🇷';
    } else {
      location.reload();
    }
  });

  // Typewriter for hero title
  const heroP = document.querySelector('.hero-desc');
  const origText = heroP.textContent;
  heroP.textContent = '';
  let i = 0;
  function type() {
    if (i < origText.length) {
      heroP.textContent += origText[i++];
      setTimeout(type, 18);
    }
  }
  window.addEventListener('load', type);
