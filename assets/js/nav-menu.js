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

const btn = document.getElementById("back-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});