/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MOSTRAR MENU =====*/
/* Valida se a constante existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== ESCONDER MENU =====*/
/* Valida se a constante existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVER MENU MOBILE AO CLICAR EM UM LINK ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== DEIXAR O HEADER COM SOMBRA AO ROLAR A PÁGINA ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 50 viewport height, adiciona a classe shadow-header na tag header
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== LÓGICA DO MODAL DE IMAGEM DOS PROJETOS ===============*/
const projectImages = document.querySelectorAll('.projects__img');
const modal = document.getElementById('project-image-modal');
const modalImg = document.getElementById('modal-img');
const closeModalBtn = document.getElementById('modal-close-btn');

// Função para abrir o modal
const openModal = (e) => {
    const imgSrc = e.target.src;
    modalImg.src = imgSrc;
    modal.classList.add('show-modal');
};

// Função para fechar o modal
const closeModal = () => {
    modal.classList.remove('show-modal');
};

// Adiciona o evento de clique a cada imagem de projeto
projectImages.forEach(img => {
    img.addEventListener('click', openModal);
});

// Adiciona o evento de clique ao botão de fechar
closeModalBtn.addEventListener('click', closeModal);

// Adiciona o evento de clique ao fundo do modal para fechar também
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});