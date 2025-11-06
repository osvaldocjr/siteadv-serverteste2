function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [key, value] = c.split("=");
        if (key === name) return value;
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; path=/; max-age=0";
}

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos dos checkboxes
    const cookiesDesempenho = document.getElementById("cookies-desempenho");
    const cookiesMarketing = document.getElementById("cookies-marketing");
    const cookiesEstatisticas = document.getElementById("cookies-estatisticas");
    const cookiesFuncionais = document.getElementById("cookies-funcionais");
    
    // Botões
    const btnSavePreferences = document.getElementById("save-preferences");
    const btnDeleteCookies = document.getElementById("delete-cookies");

    // Restaurar preferências ao carregar a página
    if (cookiesDesempenho) {
        cookiesDesempenho.checked = getCookie("cookies_desempenho") === "true";
    }
    if (cookiesMarketing) {
        cookiesMarketing.checked = getCookie("cookies_marketing") === "true";
    }
    if (cookiesEstatisticas) {
        cookiesEstatisticas.checked = getCookie("cookies_estatisticas") === "true";
    }
    if (cookiesFuncionais) {
        cookiesFuncionais.checked = getCookie("cookies_funcionais") === "true";
    }

    // Salvar preferências
    if (btnSavePreferences) {
        btnSavePreferences.addEventListener("click", function() {
            if (cookiesDesempenho) {
                setCookie("cookies_desempenho", cookiesDesempenho.checked, 30);
            }
            if (cookiesMarketing) {
                setCookie("cookies_marketing", cookiesMarketing.checked, 30);
            }
            if (cookiesEstatisticas) {
                setCookie("cookies_estatisticas", cookiesEstatisticas.checked, 30);
            }
            if (cookiesFuncionais) {
                setCookie("cookies_funcionais", cookiesFuncionais.checked, 30);
            }

            alert("Preferências de cookies salvas!");
        });
    }

    // Excluir cookies
    if (btnDeleteCookies) {
        btnDeleteCookies.addEventListener("click", function() {
            // Deletar os cookies
            deleteCookie("cookies_desempenho");
            deleteCookie("cookies_marketing");
            deleteCookie("cookies_estatisticas");
            deleteCookie("cookies_funcionais");

            // Desmarcar todos os toggles visuais
            if (cookiesDesempenho) cookiesDesempenho.checked = false;
            if (cookiesMarketing) cookiesMarketing.checked = false;
            if (cookiesEstatisticas) cookiesEstatisticas.checked = false;
            if (cookiesFuncionais) cookiesFuncionais.checked = false;

            alert("Todos os cookies foram excluídos!");
        });
    }

});