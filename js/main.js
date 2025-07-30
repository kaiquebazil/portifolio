// Menu Mobile
const menuMobile = document.querySelector('.mobile');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuMobile.classList.toggle('active');
});

// Mostrar mais projetos
const verProjetos = document.getElementById('projeto-botao');
const eventList = document.querySelector('.event-list');

verProjetos.addEventListener('click', () => {
  if (!eventList.classList.contains("ativo")) {
    verProjetos.textContent = 'Ver Menos';
  } else {
    verProjetos.textContent = 'Ver Mais';
  }
  eventList.classList.toggle('ativo');
});

// Troca de idioma
const languageSwitcher = document.getElementById('languageSwitcher');
let currentLanguage = 'pt';

// Conteúdo em inglês
const englishContent = {
  title: "Kaique Bazil - Programmer",
  description: "Front End Developer",
  menuItems: ["About Me", "Education", "Contact"],
  introTitle: "Web & Mobile Developer",
  introText: "Passionate about Technology and Programming.",
  aboutTitle: "About Me",
  aboutText: "I develop projects like an <strong>Expense Control</strong> system, <strong>Model Websites</strong>, <strong>Calculator</strong> and much more. For apps like Kaisui I worked on the <strong>UX</strong> and <strong>UI Design</strong> of the project.",
  educationTitle: "Education",
  educationText: "My most recent education was an in-person <strong>Computer Programming</strong> course I took at <strong>Euro Data</strong>. Additionally, I always keep myself updated with online courses.",
  footerText: "I'm currently available for new projects. Get in touch with me and let's schedule a conversation.",
  viewMore: "View More",
  viewLess: "View Less",
  createdWith: "Created With:"
};

languageSwitcher.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  updateLanguage();
});

function updateLanguage() {
  if (currentLanguage === 'en') {
    // Atualizar para inglês
    languageSwitcher.textContent = 'PT';
    document.title = englishContent.title;
    document.querySelector('meta[name="description"]').content = englishContent.description;
    
    // Menu
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach((item, index) => {
      item.textContent = englishContent.menuItems[index];
    });
    
    // Introdução
    document.querySelector('.introducao h1').textContent = englishContent.introTitle;
    document.querySelector('.introducao p').textContent = englishContent.introText;
    
    // Sobre Mim
    document.querySelector('.experiencia .subtitulo').textContent = englishContent.aboutTitle;
    document.querySelector('.experiencia-texto').innerHTML = englishContent.aboutText;
    
    // Formação
    document.querySelector('.formacao .subtitulo').textContent = englishContent.educationTitle;
    document.querySelector('.formacao-texto').innerHTML = englishContent.educationText;
    
    // Rodapé
    document.querySelector('.footer-texto').textContent = englishContent.footerText;
    
    // Botão Ver Mais
    const verProjetos = document.getElementById('projeto-botao');
    if (verProjetos.textContent.includes('Mais')) {
      verProjetos.textContent = englishContent.viewMore;
    } else if (verProjetos.textContent.includes('Menos')) {
      verProjetos.textContent = englishContent.viewLess;
    }
    
    // Texto "Foi Criado Com:"
    document.querySelectorAll('.projeto-titulo').forEach(item => {
      if (item.textContent.includes('Foi Criado Com:')) {
        item.textContent = englishContent.createdWith;
      }
    });
  } else {
    // Recarregar a página para voltar ao português
    location.reload();
  }
}

// Efeito de digitação na introdução
const introText = document.querySelector('.introducao p');
const originalText = introText.textContent;

function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    introText.textContent = text.substring(0, i+1);
    setTimeout(() => typeWriter(text, i + 1, fnCallback), 50);
  } else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}

function startTypingAnimation() {
  introText.textContent = "";
  typeWriter(originalText, 0, () => {
    // Animação concluída
  });
}

// Iniciar animação quando a página carregar
window.addEventListener('load', startTypingAnimation);

// Observador de interseção para animações ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.projeto, .faculdade').forEach(el => {
  observer.observe(el);
});