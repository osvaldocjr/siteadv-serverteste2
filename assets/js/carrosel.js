const textos = {
    consultoria: `
    <ul class="descricao-caixa-areaAtuacao">
      <li>
        <h6 class="titulo-modal">Consultoria Jurídica para Empresas</h6>
        <p class="texto-modal">Ajudamos sua empresa a tomar decisões seguras e estratégicas com base na lei, evitando problemas futuros e garantindo tranquilidade nas operações do dia a dia.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Análise e Elaboração de Contratos</h6>
        <p class="texto-modal">Preparamos e revisamos contratos comerciais, societários, de prestação de serviços e outros, garantindo clareza, equilíbrio e segurança jurídica.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Apoio na Tomada de Decisões</h6>
        <p class="texto-modal">Orientamos sócios, gestores e departamentos sobre os riscos e impactos legais de cada decisão estratégica.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Planejamento Societário e Empresarial</h6>
        <p class="texto-modal">Auxiliamos na estruturação ou reorganização da empresa, pensando no crescimento sustentável e na proteção do patrimônio.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Prevenção de Conflitos</h6>
        <p class="texto-modal">Trabalhamos para antecipar problemas e sugerir soluções que evitem disputas judiciais e prejuízos à imagem da empresa.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Adequação à Legislação e às Boas Práticas</h6>
        <p class="texto-modal">Mantemos sua empresa atualizada com as exigências legais, regulatórias e setoriais.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Suporte Contínuo ao Negócio</h6>
        <p class="texto-modal">Atuamos como parceiros jurídicos do dia a dia da empresa, prontos para esclarecer dúvidas e apoiar nas mais diversas questões legais.</p>
      </li>
    </ul>
`,
    societario: `
    <ul class="descricao-caixa-areaAtuacao">
      <li>
        <h6 class="titulo-modal">Direito Societário</h6>
        <p class="texto-modal">Oferecemos suporte jurídico completo para a estruturação e crescimento de empresas, com foco na organização societária, entrada de investidores e proteção do patrimônio dos sócios.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Criação e Reorganização de Empresas</h6>
        <p class="texto-modal">Auxiliamos na constituição de sociedades, alterações contratuais e reorganizações empresariais, sempre com foco na segurança jurídica e eficiência operacional.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Fusões e Aquisições (M&A)</h6>
        <p class="texto-modal">Apoiamos empresas em processos de compra, venda ou união de negócios, garantindo uma estrutura legal sólida e alinhada aos interesses das partes envolvidas.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Planejamento Patrimonial e Sucessório</h6>
        <p class="texto-modal">Desenvolvemos estratégias para proteger o patrimônio dos sócios e organizar a sucessão empresarial de forma segura e eficaz.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Acordos de Investimento</h6>
        <p class="texto-modal">Elaboramos documentos que formalizam a entrada de investidores, com regras claras sobre participação, governança e retorno financeiro.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Acordos entre Sócios ou Quotistas</h6>
        <p class="texto-modal">Criamos acordos que definem direitos, deveres e regras de convivência entre sócios, prevenindo conflitos e fortalecendo a gestão da empresa.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Atração e Prospecção de Investimentos</h6>
        <p class="texto-modal">Orientamos empresas na preparação jurídica para captação de recursos e relacionamento com investidores.</p>
      </li>
    </ul>
`,
    trabalhista: `
    <ul class="descricao-caixa-areaAtuacao">
      <li>
        <h6 class="titulo-modal">Direito Trabalhista para Empresas</h6>
        <p class="texto-modal">Oferecemos suporte completo para que sua empresa atue em conformidade com a legislação trabalhista, reduza riscos e fortaleça a relação com seus colaboradores.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Consultoria Preventiva</h6>
        <p class="texto-modal">Orientamos sua empresa para evitar conflitos trabalhistas antes que eles aconteçam.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Soluções para Conflitos Trabalhistas</h6>
        <p class="texto-modal">Atuamos na resolução de disputas com empregados, de forma judicial ou extrajudicial, tanto em casos individuais quanto coletivos.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Auditorias e Análise de Riscos</h6>
        <p class="texto-modal">Realizamos diagnósticos completos para identificar falhas e prevenir passivos trabalhistas.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Contratos de Trabalho</h6>
        <p class="texto-modal">Cuidamos da elaboração, revisão e atualização de contratos e outros documentos relacionados à relação de trabalho.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Gestão de Terceirizados</h6>
        <p class="texto-modal">Ajudamos sua empresa a contratar e gerenciar prestadores de serviços com segurança jurídica.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Atração e Retenção de Talentos</h6>
        <p class="texto-modal">Desenvolvemos estratégias jurídicas para manter sua equipe engajada e reduzir a rotatividade.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Benefícios e Participação nos Resultados</h6>
        <p class="texto-modal">Estruturamos planos de benefícios e de participação nos lucros alinhados à legislação e aos objetivos da empresa.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Programas de Conformidade Trabalhista</h6>
        <p class="texto-modal">Criamos programas de integridade e compliance voltados à prevenção de irregularidades no ambiente de trabalho.</p>
      </li>
    </ul>
`,
    negociacao: `
    <ul class="descricao-caixa-areaAtuacao">
      <li>
        <h6 class="titulo-modal">Elaboração e Negociação de Contratos</h6>
        <p class="texto-modal">Apoiamos sua empresa em todas as etapas da negociação, elaboração e gestão de contratos, com foco na segurança jurídica, clareza e alinhamento com os objetivos do negócio.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Orientação Estratégica nas Negociações</h6>
        <p class="texto-modal">Aconselhamos sua equipe durante negociações contratuais, ajudando a defender interesses e construir acordos equilibrados.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Elaboração e Revisão de Contratos</h6>
        <p class="texto-modal">Criamos e revisamos contratos comerciais, operacionais e estratégicos com linguagem clara, cláusulas sólidas e foco na prevenção de litígios.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Governança e Gestão Contratual</h6>
        <p class="texto-modal">Ajudamos sua empresa a organizar e acompanhar contratos em vigor, com foco em prazos, obrigações e compliance.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Validação Jurídica de Contratos</h6>
        <p class="texto-modal">Analisamos contratos recebidos por sua empresa, verificando riscos, lacunas e pontos de atenção antes da assinatura.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Franquias e Expansão de Negócios</h6>
        <p class="texto-modal">Estruturamos contratos de franquia e modelos de expansão com base legal robusta e alinhados às práticas de mercado.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Transferência de Tecnologia</h6>
        <p class="texto-modal">Elaboramos acordos de licenciamento, uso de marca, know-how e outros ativos intangíveis com proteção jurídica adequada.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Procedimentos e Manuais Operacionais</h6>
        <p class="texto-modal">Criamos ou revisamos documentos que formalizam processos de fornecimento, compras, parcerias e distribuição.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Estruturação de Canais de Vendas</h6>
        <p class="texto-modal">Oferecemos suporte jurídico na organização de canais de vendas e distribuição, com contratos ajustados à realidade de cada operação.</p>
      </li>
    </ul>
`,
    conflito: `
    <ul class="descricao-caixa-areaAtuacao">
      <li>
        <h6 class="titulo-modal">Resolução de Conflitos</h6>
        <p class="texto-modal">Atuamos para resolver conflitos de forma eficiente, buscando sempre a solução mais vantajosa para o cliente — seja por meio de acordos ou pela via judicial. Nosso foco é proteger os interesses da empresa, reduzir riscos e preservar relacionamentos estratégicos.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Análise de Riscos e Prevenção de Conflitos</h6>
        <p class="texto-modal">Identificamos possíveis problemas antes que se tornem disputas, propondo soluções jurídicas para minimizar impactos.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Negociações e Acordos Extrajudiciais</h6>
        <p class="texto-modal">Conduzimos negociações diretas com outras partes, sempre com foco na resolução rápida, segura e econômica dos conflitos.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Notificações Extrajudiciais</h6>
        <p class="texto-modal">Elaboramos e acompanhamos notificações para formalizar cobranças, comunicações ou exigências legais de forma estratégica.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Definição de Estratégias Processuais</h6>
        <p class="texto-modal">Planejamos cada etapa do processo com base nas particularidades do caso e nos objetivos da empresa.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Atuação em Processos Judiciais e Administrativos</h6>
        <p class="texto-modal">Representamos empresas em litígios relacionados a contratos, relações societárias, direito digital, imobiliário, propriedade intelectual, recuperação de créditos, relações de consumo e outras áreas.</p>
      </li>
    </ul>
`,
    familia: `
    <ul class="descricao-caixa-areaAtuacao">
      <li>
        <h6 class="titulo-modal">Direito das Famílias</h6>
        <p class="texto-modal">Transformamos separações difíceis em recomeços seguros para mães e filhos. Trabalhamos para que a separação — muitas vezes conflituosa — não comprometa os valores, a coesão e a harmonia familiar.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Planejamento e Organização Patrimonial</h6>
        <p class="texto-modal">Elaboração, orientação e implementação de planejamentos patrimoniais e sucessórios. Estruturas voltadas à proteção patrimonial. Constituição de sociedades holdings e demais estruturas societárias para ativos familiares. Elaboração de testamentos. Elaboração e negociação de doações e partilhas em vida, com ou sem usufruto.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Governança Familiar e Empresarial</h6>
        <p class="texto-modal">Elaboração e negociação de acordos de acionistas de empresas familiares. Estruturação de modelos de governança para preservação patrimonial e prevenção de conflitos.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Relações Familiares e Regimes de Bens</h6>
        <p class="texto-modal">Consultoria e assessoria em casamentos: escolha de regime de bens, elaboração de pacto antenupcial e ações de alteração de regime. Elaboração e negociação de escrituras de união estável. Representação em divórcios, dissoluções de união estável e partilhas de bens.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Obrigações Alimentares</h6>
        <p class="texto-modal">Representação em pedidos, ofertas, revisões, exonerações e execuções de alimentos.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Direitos de Crianças, Adolescentes e Pessoas com Deficiência</h6>
        <p class="texto-modal">Ações de guarda e regulamentação de visitas. Interdição, tutela e tomada de decisão apoiada. Ações de filiação (adoção e investigação de paternidade).</p>
      </li>
      <li>
        <h6 class="titulo-modal">Medidas Urgentes e Proteção Patrimonial</h6>
        <p class="texto-modal">Medidas cautelares de separação de corpos. Medidas cautelares de arrolamento de bens.</p>
      </li>
    </ul>
`,
    autismo: `
    <ul class="descricao-caixa-areaAtuacao">
      <li>
        <h6 class="titulo-modal">Direitos da Pessoa com Autismo (TEA)</h6>
        <p class="texto-modal">Garantimos proteção jurídica integral às pessoas com TEA e às famílias que enfrentam desafios diários para assegurar direitos, acesso a benefícios e inclusão real. Nosso compromisso é oferecer suporte especializado, acolhimento e atuação eficiente, sempre alinhados à legislação vigente e às melhores práticas de defesa dos direitos da pessoa com deficiência.</p>
      </li>
      <li>
        <h6 class="titulo-modal">BPC/LOAS – Benefício de Prestação Continuada</h6>
        <p class="texto-modal">Acompanhamento completo para obtenção do BPC, destinado a pessoas com deficiência em situação de vulnerabilidade socioeconômica. Preparação e organização de provas, laudos, requisitos e recursos administrativos ou judiciais.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Benefícios Previdenciários e Assistenciais</h6>
        <p class="texto-modal">Assessoria em aposentadorias especiais, isenções fiscais (IPI, ICMS, IPVA) e demais benefícios sociais. Atuação para garantir direitos como Passe Livre e outros programas de assistência.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Redução de Jornada Sem Prejuízo Salarial</h6>
        <p class="texto-modal">Atuação para servidores públicos que possuem dependente com deficiência e necessitam redução da carga horária. Preparação de requerimentos administrativos e ações judiciais em caso de negativa indevida.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Proteção no Ambiente de Trabalho</h6>
        <p class="texto-modal">Defesa em casos de discriminação no ambiente laboral. Acesso a programas de inclusão no mercado de trabalho.</p>
      </li>
      <li>
        <h6 class="titulo-modal">FGTS – Saque para Tratamentos e Necessidades Relacionadas ao TEA</h6>
        <p class="texto-modal">Atuação para liberação do FGTS para trabalhadores com TEA ou pais/responsáveis de crianças autistas. Assessoria em pedidos administrativos e ações judiciais quando há recusa indevida. Uso autorizado para tratamentos, terapias, equipamentos e demais necessidades do núcleo familiar.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Cobertura Obrigatória</h6>
        <p class="texto-modal">Garantia de cobertura integral das terapias essenciais, como ABA, fonoaudiologia, terapia ocupacional e psicologia. Combate a negativas de atendimento, limitação de sessões e condutas ilegais dos planos.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Acesso ao SUS</h6>
        <p class="texto-modal">Demandas judiciais para fornecimento de terapias e tratamentos não disponibilizados administrativamente.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Direitos Educacionais e Inclusão Escolar</h6>
        <p class="texto-modal">Garantia de matrícula em escolas públicas ou privadas. Direito a mediador, tutor ou acompanhante especializado, conforme a necessidade individual. Ações contra discriminação, negativa de inclusão ou violação do direito à educação. Adequações pedagógicas e acessibilidade.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Planejamento Financeiro e Tributário das Famílias</h6>
        <p class="texto-modal">Ações garantindo o direito de deduzir mensalidades escolares e terapias no Imposto de Renda. Orientação sobre benefícios fiscais e deduções aplicáveis a pessoas com TEA.</p>
      </li>
      <li>
        <h6 class="titulo-modal">Inclusão Social e Defesa Contra Discriminação</h6>
        <p class="texto-modal">Ações judiciais contra práticas discriminatórias em qualquer ambiente. Suporte em casos de bullying, preconceito e violações de direitos em escolas, clubes, condomínios, ambientes públicos e privados.</p>
      </li>
    </ul>
`,
    kariny: `
        <div class="texto-equipe">
            <p class="texto-equipe-paragrafo">
                Advogada com mais de 10 anos de experiência na área corporativa, especialista em Direito Societário e Contratual.
            </p>

            <p class="texto-equipe-paragrafo">
                À frente do escritório Meneghel Advocacia, apoia empresas na prevenção de riscos, na tomada de decisões e no 
                planejamento estratégico para o crescimento sustentável dos negócios.
            </p>

            <p class="texto-equipe-paragrafo">
                Sua trajetória profissional tomou um novo rumo quando se tornou mãe atípica de meninos gêmeos e passou a 
                vivenciar os desafios profundos no âmbito do autismo.
            </p>

            <p class="texto-equipe-paragrafo">
                Essa vivência pessoal despertou um olhar ainda mais sensível e comprometido com a escuta atenta, o 
                acolhimento e a orientação jurídica de famílias atípicas.
            </p>

            <p class="texto-equipe-paragrafo">
                Assim nasceu o nosso núcleo especializado em Direitos da Pessoa com Autismo, voltado a promoção 
                da justiça, da dignidade e da inclusão.
            </p>

            <p class="texto-equipe-paragrafo">
                ⚖️ Soluções jurídicas para garantir e fortalecer os Direitos das Pessoas com Autismo - 
                com técnica, estratégia, sensibilidade e compromisso.
            </p>
        </div>
    `,
    kamila: `
    <div class="texto-equipe">
        <p class="texto-equipe-paragrafo">
            Advogada com mais de 10 anos de experiência em Resolução de Disputas, especialista em Negociações e Contratos.
        </p>

        <p class="texto-equipe-paragrafo">
            À frente do escritório Meneghel Advocacia, atua de forma estratégica na prevenção de conflitos e na 
            condução de litígios extrajudiciais.
        </p>

        <p class="texto-equipe-paragrafo">
            Sua trajetória profissional tomou um novo rumo quando vivenciou, em sua própria vida, desafios profundos no âmbito familiar.
        </p>

        <p class="texto-equipe-paragrafo">
            Essa vivência pessoal despertou um olhar ainda mais sensível e comprometido com a escuta atenta, o acolhimento e a 
            orientação jurídica de mulheres que enfrentam separações difíceis e se encontram em situação de vulnerabilidade, 
            em especial aquelas que vivenciam ou já superaram a violência doméstica.
        </p>

        <p class="texto-equipe-paragrafo">
            Assim nasceu o nosso núcleo especializado em Direito das Famílias, voltado a promoção da justiça, da dignidade e 
            da reconstrução de caminhos com segurança e autonomia.
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