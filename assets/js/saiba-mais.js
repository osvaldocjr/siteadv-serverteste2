document.querySelector('.btn-consultoria-juridica').addEventListener('click', function () {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    // Cria o modal
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="caixa-btn-fechar">
                <span class="btn-fechar">
                    <span>
                        &times;
                    </span>
                </span>
            </div>
            <ul class="descricao-caixa-areaAtuacao">
                <li>
                    <h6 class="titulo-modal">
                        Análise e Elaboração de Contratos:
                    </h6> 
                    <p class="texto-modal">
                        Preparamos e revisamos contratos comerciais, societários, de prestação de serviços e outros, 
                        garantindo clareza, equilíbrio e segurança jurídica.
                    </p>
                </li>
                <li>
                    <h6 class="titulo-modal">
                        Apoio na Tomada de Decisões:
                    </h6> 
                    <p class="texto-modal">
                        Orientamos sócios, gestores e departamentos sobre os riscos e impactos legais de cada decisão estratégica.
                    </p>
                </li>
                <li>
                    <h6 class="titulo-modal">
                        Planejamento Societário e Empresarial:
                    </h6> 
                    <p class="texto-modal">
                        Auxiliamos na estruturação ou reorganização da empresa, pensando no crescimento sustentável 
                    e na proteção do patrimônio.
                    </p>
                </li>
                <li>
                    <h6 class="titulo-modal">
                        Prevenção de Conflitos:
                    </h6> 
                    <p class="texto-modal">
                        Trabalhamos para antecipar problemas e sugerir soluções que evitem disputas judiciais e prejuízos à 
                    imagem da empresa.
                    </p>
                </li>
                <li>
                    <h6 class="titulo-modal">
                        Adequação à Legislação e às Boas Práticas:
                    </h6> 
                    <p class="texto-modal">
                        Mantemos sua empresa atualizada com as exigências legais, regulatórias e setoriais.
                        </p>
                </li>
                <li>
                    <h6 class="titulo-modal">
                        Suporte Contínuo ao Negócio:
                    </h6> 
                    <p class="texto-modal">
                        Atuamos como parceiros jurídicos no dia a dia da empresa, prontos para esclarecer 
                    dúvidas e apoiar nas mais diversas questões legais.
                    </p>
                </li>
            </ul>
        </div>
    `;

    // Adiciona a classe para travar scroll
    document.body.classList.add('modal-aberto');

    // Adiciona o modal ao body
    document.body.appendChild(modal);

     // Fecha no botão de fechar
    modal.querySelector('.btn-fechar').addEventListener('click', function () {
        modal.remove();
        document.body.classList.remove('modal-aberto');
    });

    // Fecha ao clicar fora da caixa
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.remove();
            document.body.classList.remove('modal-aberto');
        }
    });
});

document.querySelector('.btn-direito-societario').addEventListener('click', function () {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="caixa-btn-fechar">
                <span class="btn-fechar">
                    <span>&times;</span>
                </span>
            </div>
            <div class="descricao-caixa-areaAtuacao">
                <h6 class="titulo-modal">Direito Societário</h6>
                <p class="texto-modal">
                    Oferecemos suporte jurídico completo para a estruturação e crescimento de empresas, com foco na organização societária, entrada de investidores e proteção do patrimônio dos sócios. Atuamos nas seguintes frentes:
                </p>

                <h6 class="titulo-modal">Criação e Reorganização de Empresas</h6>
                <p class="texto-modal">
                    Auxiliamos na constituição de sociedades, alterações contratuais e reorganizações empresariais, sempre com foco na segurança jurídica e eficiência operacional.
                </p>

                <h6 class="titulo-modal">Fusões e Aquisições (M&A)</h6>
                <p class="texto-modal">
                    Apoiamos empresas em processos de compra, venda ou união de negócios, garantindo uma estrutura legal sólida e alinhada aos interesses das partes envolvidas.
                </p>

                <h6 class="titulo-modal">Planejamento Patrimonial e Sucessório</h6>
                <p class="texto-modal">
                    Desenvolvemos estratégias para proteger o patrimônio dos sócios e organizar a sucessão empresarial de forma segura e eficaz.
                </p>

                <h6 class="titulo-modal">Acordos de Investimento</h6>
                <p class="texto-modal">
                    Elaboramos documentos que formalizam a entrada de investidores, com regras claras sobre participação, governança e retorno financeiro.
                </p>

                <h6 class="titulo-modal">Acordos entre Sócios ou Quotistas</h6>
                <p class="texto-modal">
                    Criamos acordos que definem direitos, deveres e regras de convivência entre sócios, prevenindo conflitos e fortalecendo a gestão da empresa.
                </p>

                <h6 class="titulo-modal">Atração e Prospecção de Investimentos</h6>
                <p class="texto-modal">
                    Orientamos empresas na preparação jurídica para captação de recursos e relacionamento com investidores.
                </p>

                <h6 class="titulo-modal">Elaboração e Negociação de Contratos</h6>
                <p class="texto-modal">
                    Apoiamos sua empresa em todas as etapas da negociação, elaboração e gestão de contratos, com foco na segurança jurídica, clareza e alinhamento com os objetivos do negócio. Nosso trabalho inclui:
                </p>

                <h6 class="titulo-modal">Orientação Estratégica nas Negociações</h6>
                <p class="texto-modal">
                    Aconselhamos sua equipe durante negociações contratuais, ajudando a defender interesses e construir acordos equilibrados.
                </p>

                <h6 class="titulo-modal">Elaboração e Revisão de Contratos</h6>
                <p class="texto-modal">
                    Criamos e revisamos contratos comerciais, operacionais e estratégicos com linguagem clara, cláusulas sólidas e foco na prevenção de litígios.
                </p>

                <h6 class="titulo-modal">Governança e Gestão Contratual</h6>
                <p class="texto-modal">
                    Ajudamos sua empresa a organizar e acompanhar contratos em vigor, com foco em prazos, obrigações e compliance.
                </p>

                <h6 class="titulo-modal">Validação Jurídica de Contratos</h6>
                <p class="texto-modal">
                    Analisamos contratos recebidos por sua empresa, verificando riscos, lacunas e pontos de atenção antes da assinatura.
                </p>

                <h6 class="titulo-modal">Franquias e Expansão de Negócios</h6>
                <p class="texto-modal">
                    Estruturamos contratos de franquia e modelos de expansão com base legal robusta e alinhados às práticas de mercado.
                </p>

                <h6 class="titulo-modal">Transferência de Tecnologia</h6>
                <p class="texto-modal">
                    Elaboramos acordos de licenciamento, uso de marca, know-how e outros ativos intangíveis com proteção jurídica adequada.
                </p>

                <h6 class="titulo-modal">Procedimentos e Manuais Operacionais</h6>
                <p class="texto-modal">
                    Criamos ou revisamos documentos que formalizam processos de fornecimento, compras, parcerias e distribuição.
                </p>

                <h6 class="titulo-modal">Estruturação de Canais de Vendas</h6>
                <p class="texto-modal">
                    Oferecemos suporte jurídico na organização de canais de vendas e distribuição, com contratos ajustados à realidade de cada operação.
                </p>
            </div>
        </div>
    `;

    document.body.classList.add('modal-aberto');
    document.body.appendChild(modal);

     // Fecha no botão de fechar
    modal.querySelector('.btn-fechar').addEventListener('click', function () {
        modal.remove();
        document.body.classList.remove('modal-aberto');
    });

    // Fecha ao clicar fora da caixa
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.remove();
            document.body.classList.remove('modal-aberto');
        }
    });
});

document.querySelector('.btn-direito-trabalhista-empresa').addEventListener('click', function () {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="caixa-btn-fechar">
                <span class="btn-fechar">
                    <span>&times;</span>
                </span>
            </div>
            <div class="descricao-caixa-areaAtuacao">
                <h6 class="titulo-modal">Direito Trabalhista para Empresas</h6>
                <p class="texto-modal">
                    Oferecemos suporte completo para que sua empresa atue em conformidade com a legislação trabalhista, reduza riscos e fortaleça a relação com seus colaboradores. Nosso trabalho inclui:
                </p>

                <h6 class="titulo-modal">Consultoria Preventiva</h6>
                <p class="texto-modal">
                    Orientamos sua empresa para evitar conflitos trabalhistas antes que eles aconteçam.
                </p>

                <h6 class="titulo-modal">Soluções para Conflitos Trabalhistas</h6>
                <p class="texto-modal">
                    Atuamos na resolução de disputas com empregados, de forma judicial ou extrajudicial, tanto em casos individuais quanto coletivos.
                </p>

                <h6 class="titulo-modal">Auditorias e Análise de Riscos</h6>
                <p class="texto-modal">
                    Realizamos diagnósticos completos para identificar falhas e prevenir passivos trabalhistas.
                </p>

                <h6 class="titulo-modal">Contratos de Trabalho</h6>
                <p class="texto-modal">
                    Cuidamos da elaboração, revisão e atualização de contratos e outros documentos relacionados à relação de trabalho.
                </p>

                <h6 class="titulo-modal">Gestão de Terceirizados</h6>
                <p class="texto-modal">
                    Ajudamos sua empresa a contratar e gerenciar prestadores de serviços com segurança jurídica.
                </p>

                <h6 class="titulo-modal">Atração e Retenção de Talentos</h6>
                <p class="texto-modal">
                    Desenvolvemos estratégias jurídicas para manter sua equipe engajada e reduzir a rotatividade.
                </p>

                <h6 class="titulo-modal">Benefícios e Participação nos Resultados</h6>
                <p class="texto-modal">
                    Estruturamos planos de benefícios e de participação nos lucros alinhados à legislação e aos objetivos da empresa.
                </p>

                <h6 class="titulo-modal">Programas de Conformidade Trabalhista</h6>
                <p class="texto-modal">
                    Criamos programas de integridade e compliance voltados à prevenção de irregularidades no ambiente de trabalho.
                </p>

                <h6 class="titulo-modal">Resolução de Conflitos</h6>
                <p class="texto-modal">
                    Atuamos para resolver conflitos de forma eficiente, buscando sempre a solução mais vantajosa para o cliente — seja por meio de acordos ou pela via judicial. Nosso foco é proteger os interesses da empresa, reduzir riscos e preservar relacionamentos estratégicos.
                </p>

                <h6 class="titulo-modal">Análise de Riscos e Prevenção de Conflitos</h6>
                <p class="texto-modal">
                    Identificamos possíveis problemas antes que se tornem disputas, propondo soluções jurídicas para minimizar impactos.
                </p>

                <h6 class="titulo-modal">Negociações e Acordos Extrajudiciais</h6>
                <p class="texto-modal">
                    Conduzimos negociações diretas com outras partes, sempre com foco na resolução rápida, segura e econômica dos conflitos.
                </p>

                <h6 class="titulo-modal">Notificações Extrajudiciais</h6>
                <p class="texto-modal">
                    Elaboramos e acompanhamos notificações para formalizar cobranças, comunicações ou exigências legais de forma estratégica.
                </p>

                <h6 class="titulo-modal">Definição de Estratégias Processuais</h6>
                <p class="texto-modal">
                    Planejamos cada etapa do processo com base nas particularidades do caso e nos objetivos da empresa.
                </p>

                <h6 class="titulo-modal">Atuação em Processos Judiciais e Administrativos</h6>
                <p class="texto-modal">
                    Representamos empresas em litígios relacionados a contratos, relações societárias, direito digital, imobiliário, propriedade intelectual, recuperação de créditos, relações de consumo e outras áreas.
                </p>
            </div>
        </div>
    `;

    document.body.classList.add('modal-aberto');
    document.body.appendChild(modal);

     // Fecha no botão de fechar
    modal.querySelector('.btn-fechar').addEventListener('click', function () {
        modal.remove();
        document.body.classList.remove('modal-aberto');
    });

    // Fecha ao clicar fora da caixa
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.remove();
            document.body.classList.remove('modal-aberto');
        }
    });
});