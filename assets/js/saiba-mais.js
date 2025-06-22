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
                        Atuamos como parceiros jurídicos do dia a dia da empresa, prontos para esclarecer 
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

    // Botão para fechar
    modal.querySelector('.btn-fechar').addEventListener('click', function () {
        modal.remove();
        document.body.classList.remove('modal-aberto'); // Libera scroll novamente
    });
});
