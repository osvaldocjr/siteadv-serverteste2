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
    `
};

let textoAtual = "";
let timeoutReset;
let imagemAtual = "";

function mostrarConteudo(imagem, chaveTexto) {
    // Não executa no mobile (abaixo de 500px)
    if (window.innerWidth <= 500) {
        return;
    }
    
    if (imagemAtual === imagem) {
        resetarInatividade();
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
    
    resetarInatividade();
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
        resetarInatividade();
    }
}