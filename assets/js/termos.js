document.querySelector('.botao-cookie').addEventListener('click', function () {
    const sessaoDivCookie= document.querySelector('.caixa-geral-termos');
    if (sessaoDivCookie) sessaoDivCookie.remove();

    // Cria o containerCaixaGeral
    const containerCaixaGeral = document.createElement('div');
    containerCaixaGeral.classList.add('caixa-geral-termos');
    containerCaixaGeral.innerHTML = `
        <div class="container-geral-termos">
            <div class="caixa-btn-fechar">
                <span class="btn-fechar">
                    <span>
                        &times;
                    </span>
                </span>
            </div>
            <ul class="descricao-caixa-cookie">
                <div class="container-texto-caixa-termos">
                    <span class="titulo-caixa-geral">
                        Bem-vindo (a)!
                    </span>
                    <span class="titulo-caixa-geral">
                        Os Termos e Condições de Uso estabelecem as regras para acesso e utilização do nosso site. 
                    </span>
                </div
                <li>
                    <h6 class="titulo-termos">
                        DO ACEITE DOS TERMOS E CONDIÇÕES DE USO.
                    </h6> 
                    <p class="texto-caixa-termos-geral">
                        Os Termos e Condições de Uso trazem para você, Usuário, as regras a serem 
                        observadas quando do acesso e utilização das funcionalidades do nosso site.
                    </p>
                    <p class="texto-caixa-termos-geral">
                        O nosso site tem como objetivo a comercialização dos nossos serviços e a 
                        interação com você, Usuário. Para que seja possível a utilização e acesso 
                        ao site, o Usuário deverá manifestar seu aceite aos presentes Termos. 
                        Caso você não concorde com os Termos e Condições de Uso, o Usuário deverá 
                        se abster de navegar no site.
                    </p>
                    <p class="texto-caixa-termos-geral">
                        O Usuário desde já concorda e reconhece que os “Termos e Condições de Uso” 
                        poderão sofrer alterações ao longo do tempo, seja por questões legais ou 
                        estratégicas a critério exclusivo de MENEGHEL ADVOCACIA.
                    </p>
                </li>
                <li>
                    <h6 class="titulo-termos">
                        CADASTRO DO USUÁRIO.
                    </h6> 
                    <p class="texto-caixa-termos-geral">
                        Certas funcionalidades do nosso site estão disponíveis em conteúdo aberto 
                        ou fechado. Quando o acesso a conteúdo for fechado, será necessário prévio 
                        cadastro do Usuário e o acesso ao ambiente será realizado por meio de login 
                        e senha.
                    </p>
                    <p class="texto-caixa-termos-geral">
                        O Usuário para utilizar os serviços acima descritos, deverá ter capacidade 
                        jurídica para atos civis e deverá, necessariamente, prestar as informações 
                        exigidas no cadastro, assumindo integralmente a responsabilidade 
                        (inclusive cível e criminal) pela exatidão e veracidade das informações 
                        fornecidas no cadastro, que poderá ser verificado, a qualquer momento, 
                        por MENEGHEL ADVOCACIA.
                    </p>
                    <p class="texto-caixa-termos-geral">
                        Caso seja constatada a existência de dados cadastrais incorretos ou 
                        inverídicos por parte do Usuário, ou ainda em caso de negativa em enviar 
                        documentos eventualmente requeridos, MENEGHEL ADVOCACIA, poderá bloquear o 
                        Usuário ou ainda suspender temporariamente ou cancelar definitivamente o 
                        cadastro do Usuário, sem prejuízo da adoção de outras medidas que se façam 
                        necessárias.
                    </p>
                    <p class="texto-caixa-termos-geral">
                        O Usuário será o único responsável pelas operações efetuadas em sua conta, 
                        uma vez que o acesso a ela só será possível mediante utilização da senha que 
                        é de seu exclusivo conhecimento. Caso ocorra qualquer extravio, perda, roubo 
                        ou qualquer uso não autorizado de sua conta ou de acesso não autorizado por 
                        terceiros, o Usuário compromete-se a notificar MENEGHEL ADVOCACIA a respeito
                        para que providencie a medidas cabíveis.
                    </p>
                    <p class="texto-caixa-termos-geral">
                        Em nenhuma hipótese será permitida a cessão, venda, aluguel ou outra forma 
                        de transferência da conta do Usuário. Também não será permitida a manutenção 
                        de mais de um cadastrado por pessoa, ou ainda a criação de novos cadastros por 
                        pessoas cujos cadastros originais tenham sido suspensos temporária ou 
                        definitivamente por infrações às políticas do nosso site.
                    </p>
                </li>
            </ul>
        </div>
    `;
    // Adiciona a classe para travar scroll
    document.body.classList.add('caixa-termos-geral-footer');

    // Adiciona o containerCaixaGeral ao body
    document.body.appendChild(containerCaixaGeral);

     // Fecha no botão de fechar
    containerCaixaGeral.querySelector('.btn-fechar').addEventListener('click', function () {
        containerCaixaGeral.remove();
        document.body.classList.remove('caixa-termos-geral-footer');
    });

    // Fecha ao clicar fora da caixa
    containerCaixaGeral.addEventListener('click', function (event) {
        if (event.target === containerCaixaGeral) {
            containerCaixaGeral.remove();
            document.body.classList.remove('caixa-termos-geral-footer');
        }
    });
});