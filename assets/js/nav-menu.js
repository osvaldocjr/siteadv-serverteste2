const btnMobile = document.getElementsByClassName("btn-mobile")[0];

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const navUl = document.querySelector(".nav-ul");
    const btn = document.querySelector(".btn-mobile");
    
    navUl.classList.toggle("ativado");
    const ativado = navUl.classList.contains('ativado');
    btn.classList.toggle("esconde-hamburger");

    event.currentTarget.setAttribute("aria-expanded", ativado);
    if(ativado) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);