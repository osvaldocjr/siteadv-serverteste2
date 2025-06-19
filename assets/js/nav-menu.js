const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const navUl = document.querySelector('.nav-ul');
    const ativado = navUl.classList.toggle('ativado');
    btnMobile.classList.toggle('esconde-hamburger');

    btnMobile.setAttribute('aria-expanded', ativado);
    btnMobile.setAttribute('aria-label', ativado ? 'Fechar Menu' : 'Abrir Menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const navLinks = document.querySelectorAll('.nav-ul a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navUl = document.querySelector('.nav-ul');
        navUl.classList.remove('ativado');
        btnMobile.classList.remove('esconde-hamburger');
        btnMobile.setAttribute('aria-expanded', 'false');
        btnMobile.setAttribute('aria-label', 'Abrir Menu');
    });
});
