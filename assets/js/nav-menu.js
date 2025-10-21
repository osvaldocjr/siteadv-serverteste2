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



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetID = this.getAttribute("href");
        const target = document.querySelector(targetID);

        if (!target) return;

        e.preventDefault();
        const offset = 0;

        const bodyRect = document.body.getBoundingClientRect().top;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - bodyRect - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});






const floatingButtons = document.querySelector('.whatsapp-contato');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        // Se o rodapé estiver visível, sobe os botões
        const overlap = windowHeight - footerTop;
        floatingButtons.style.bottom = `${overlap + 20}px`;
    } else {
        // Posição padrão
        floatingButtons.style.bottom = '20px';
    }
});