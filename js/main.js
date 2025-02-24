const menuMobile = document.querySelector('.mobile')
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', () => {
	menu.classList.toggle('active');
	menuMobile.classList.toggle('active');
});

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

