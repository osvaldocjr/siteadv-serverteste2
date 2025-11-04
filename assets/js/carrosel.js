const textos = {
    consultoria: `
        <h3>Consultoria Jurídica para Empresas</h3>
        <p>A consultoria jurídica para empresas oferece suporte especializado na prevenção de riscos legais e na tomada de decisões estratégicas.</p>
        <p>Entre os serviços estão:</p>
        <ul>
            <li>Orientação em conformidade legal;</li>
            <li>Avaliação de riscos contratuais;</li>
            <li>Prevenção de litígios;</li>
            <li>Planejamento jurídico empresarial.</li>
        </ul>
    `,
    societario: `
        <h3>Direito Societário</h3>
        <p>Atuamos na regularização e estruturação de empresas, elaboração de contratos sociais e acordos de sócios.</p>
        <p>Também realizamos reorganizações societárias e mediação de conflitos entre sócios.</p>
    `,
    trabalhista: `
        <h3>Direito Trabalhista Empresarial</h3>
        <p>Atuação estratégica na prevenção e defesa de ações trabalhistas, elaboração de políticas internas e auditoria jurídica.</p>
    `,
    negociacao: `
        <h3>Elaboração e Negociação de Contratos</h3>
        <p>Oferecemos serviços especializados na elaboração e negociação de contratos comerciais e empresariais.</p>
    `,
    conflito: `
        <h3>Resolução de Conflitos</h3>
        <p>Atuamos na mediação e resolução de conflitos empresariais e societários.</p>
    `,
    familia: `
        <h3>Direito das Famílias</h3>
        <p>Assessoria completa em questões familiares, incluindo divórcio, guarda e partilha de bens.</p>
    `,
    autismo: `
        <h3>Direitos da Pessoa com Autismo</h3>
        <p>Defesa dos direitos e garantias legais das pessoas com Transtorno do Espectro Autista (TEA).</p>
    `,
    kariny: `
        <div class="texto-equipe">
            <p class="texto-equipe-paragrafo">
                Advogada com mais de 10 anos de experiência na
                área corporativa, especialista em
                Direito Societário e Contratual.
            </p>

            <p class="texto-equipe-paragrafo">
                À frente do escritório Meneghel Advocacia | Para Negócios, apoia empresas na
                prevenção de riscos, na tomada de decisões e no planejamento estratégico para o
                crescimento sustentável dos negócios.
            </p>

            <p class="texto-equipe-paragrafo">
                Sua trajetória profissional tomou um novo rumo quando se tornou mãe atípica de
                meninos gêmeos e passou a vivenciar os desafios profundos no âmbito do autismo.
            </p>

            <p class="texto-equipe-paragrafo">
                Essa vivência pessoal despertou um olhar ainda mais sensível e comprometido com a
                escuta atenta, o acolhimento e a orientação jurídica de famílias atípicas.
            </p>

            <p class="texto-equipe-paragrafo">
                Assim nasceu o nosso núcleo especializado em Direitos da Pessoa com Autismo, voltado
                a promoção da justiça, da dignidade e da inclusão.
            </p>

            <p class="texto-equipe-paragrafo">
                ⚖️ Soluções jurídicas para garantir e fortalecer os Direitos das Pessoas com Autismo
                - com técnica, estratégia, sensibilidade e compromisso.
            </p>
        </div>
    `,
    kamila: `
    <div class="texto-equipe">
        <p class="texto-equipe-paragrafo">
            Advogada com mais de 10 anos de experiência em Resolução de Disputas,
            especialista em Negociações e Contratos.
        </p>

        <p class="texto-equipe-paragrafo">
            À frente do escritório Meneghel Advocacia | Para Negócios, atua de forma
            estratégica na prevenção de conflitos e na condução de litígios extrajudiciais.
        </p>

        <p class="texto-equipe-paragrafo">
            Sua trajetória profissional tomou um novo rumo quando vivenciou,
            em sua própria vida, desafios profundos no âmbito familiar.
        </p>

        <p class="texto-equipe-paragrafo">
            Essa vivência pessoal despertou um olhar ainda mais sensível e comprometido com
            a escuta atenta, o acolhimento e a orientação jurídica de mulheres em situação de vulnerabilidade,
            em especial aquelas que enfrentam ou superaram a violência doméstica.
        </p>

        <p class="texto-equipe-paragrafo">
            Assim nasceu o nosso núcleo especializado em Direito das Famílias, voltado a promoção da justiça,
            da dignidade e da reconstrução de caminhos com segurança e autonomia.
        </p>

        <p class="texto-equipe-paragrafo">
            ⚖️ Soluções jurídicas para mulheres que dizem basta - com respeito, força e justiça.
        </p>
    </div>
    `
};

// Array com todas as combinações de imagem e chave de texto
const slides = [
    { imagem: 'assets/img/setor-juridico-empresa.png', chave: 'consultoria' },
    { imagem: 'assets/img/banner-direito-societario.png', chave: 'societario' },
    { imagem: 'assets/img/banner-direito-trabalhista-empresas.png', chave: 'trabalhista' },
    { imagem: 'assets/img/banner-elaboração-negociação-contratos.jpg', chave: 'negociacao' },
    { imagem: 'assets/img/banner-resolucao-conflito.png', chave: 'conflito' },
    { imagem: 'assets/img/banner-direito-familia.jpg', chave: 'familia' },
    { imagem: 'assets/img/banner-direitos-pessoa-autismo.png', chave: 'autismo' }
];

let textoAtual = "";
let timeoutReset;
let imagemAtual = "";
let indiceAtual = 0;
let intervaloSlideshow;
let usuarioInteragindo = false;

// Inicia o slideshow automático quando a página carregar
window.addEventListener('DOMContentLoaded', function () {
    // Só inicia o slideshow no desktop
    if (window.innerWidth > 500) {
        iniciarSlideshow();
    }

    // Adiciona eventos de mouse para detectar interação
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.addEventListener('mouseenter', function () {
            usuarioInteragindo = true;
            pararSlideshow();
        });

        menu.addEventListener('mouseleave', function () {
            usuarioInteragindo = false;
            // Aguarda 2 segundos antes de retomar o slideshow
            setTimeout(function () {
                if (!usuarioInteragindo && window.innerWidth > 500) {
                    iniciarSlideshow();
                }
            }, 2000);
        });
    }
});

// Função para iniciar o slideshow automático
function iniciarSlideshow() {
    // Para qualquer slideshow em execução
    pararSlideshow();

    // Mostra o primeiro slide imediatamente
    if (slides.length > 0) {
        mostrarSlide(indiceAtual);
    }

    // Configura o intervalo para trocar a cada 3 segundos
    intervaloSlideshow = setInterval(function () {
        if (!usuarioInteragindo) {
            proximoSlide();
        }
    }, 3000);
}

// Função para parar o slideshow
function pararSlideshow() {
    if (intervaloSlideshow) {
        clearInterval(intervaloSlideshow);
        intervaloSlideshow = null;
    }
}

// Função para mostrar um slide específico
function mostrarSlide(indice) {
    const slide = slides[indice];
    mostrarConteudoInterno(slide.imagem, slide.chave, false);
    destacarItemMenu(indice);
}

// Função para destacar o item do menu ativo
function destacarItemMenu(indice) {
    // Remove a classe ativa de todos os itens
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.classList.remove('item-ativo');
    });

    // Adiciona a classe ativa ao item correspondente
    if (menuItems[indice]) {
        menuItems[indice].classList.add('item-ativo');
    }
}

// Adiciona evento de mouseleave para remover o destaque quando o mouse sair do item
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu li');

    menuItems.forEach((item, index) => {
        item.addEventListener('mouseleave', function () {
            // Remove o destaque ao tirar o mouse
            this.classList.remove('item-ativo');
        });
    });
});

// Função para avançar para o próximo slide
function proximoSlide() {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide(indiceAtual);
}

function mostrarConteudo(imagem, chaveTexto) {
    // Não executa no mobile (abaixo de 500px)
    if (window.innerWidth <= 500) {
        return;
    }

    // Marca que o usuário está interagindo
    usuarioInteragindo = true;

    // Para o slideshow automático
    pararSlideshow();

    // Atualiza o índice atual baseado na imagem clicada
    const indiceEncontrado = slides.findIndex(s => s.imagem === imagem);
    if (indiceEncontrado !== -1) {
        indiceAtual = indiceEncontrado;
        destacarItemMenu(indiceEncontrado);
    }

    mostrarConteudoInterno(imagem, chaveTexto, true);
}

function mostrarConteudoInterno(imagem, chaveTexto, resetarTimer) {
    if (imagemAtual === imagem && !resetarTimer) {
        return;
    }

    imagemAtual = imagem;

    const img = document.getElementById("imagemPreview");
    const overlay = document.querySelector(".overlay-sombra");
    const btn = document.getElementById("btnLer");

    // Reseta a animação
    img.style.animation = "none";
    overlay.style.animation = "none";
    btn.style.animation = "none";
    void img.offsetWidth;

    // Atualiza imagem e mostra com animação de entrada
    img.src = imagem;
    img.style.display = "block";
    overlay.style.display = "block";
    img.style.animation = "slideIn 0.6s ease forwards";
    overlay.style.animation = "slideIn 0.6s ease forwards";

    if (textos[chaveTexto]) {
        textoAtual = textos[chaveTexto];
        btn.style.display = "block";
        btn.style.animation = "slideIn 0.6s ease forwards";
    } else {
        btn.style.display = "none";
    }

    if (resetarTimer) {
        resetarInatividade();
    }
}

function esconderImagem() {
    const img = document.getElementById("imagemPreview");
    const overlay = document.querySelector(".overlay-sombra");
    const btn = document.getElementById("btnLer");

    // Aplica animação de saída em todos os elementos
    img.style.animation = "slideOut 0.6s ease forwards";
    overlay.style.animation = "slideOut 0.6s ease forwards";
    btn.style.animation = "slideOut 0.6s ease forwards";

    // Esconde após a animação terminar
    setTimeout(() => {
        img.style.display = "none";
        overlay.style.display = "none";
        btn.style.display = "none";
        imagemAtual = "";

        // Retoma o slideshow após esconder
        usuarioInteragindo = false;
        if (window.innerWidth > 500) {
            iniciarSlideshow();
        }
    }, 600);
}

function resetarInatividade() {
    clearTimeout(timeoutReset);

    timeoutReset = setTimeout(() => {
        esconderImagem();
    }, 10000);
}

function abrirTexto() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("textoDescricao").innerHTML = textoAtual;
    clearTimeout(timeoutReset);
    pararSlideshow();
    usuarioInteragindo = true;
}

// Nova função para abrir texto no mobile
function abrirTextoMobile(chaveTexto) {
    if (textos[chaveTexto]) {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("textoDescricao").innerHTML = textos[chaveTexto];
    }
}

function fecharTexto() {
    document.getElementById("modal").style.display = "none";
    if (window.innerWidth > 500) {
        usuarioInteragindo = false;
        resetarInatividade();
        // Reinicia o slideshow após 2 segundos
        setTimeout(function () {
            if (!usuarioInteragindo) {
                iniciarSlideshow();
            }
        }, 2000);
    }
}