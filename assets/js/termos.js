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

// Restaurar preferências
window.onload = () => {
    document.getElementById("cookies-desempenho").checked = getCookie("cookies_desempenho") === "true";
    document.getElementById("cookies-marketing").checked = getCookie("cookies_marketing") === "true";
    document.getElementById("cookies-estatisticas").checked = getCookie("cookies_estatisticas") === "true";
    document.getElementById("cookies-funcionais").checked = getCookie("cookies_funcionais") === "true";
}

// Salvar preferências
document.getElementById("save-preferences").addEventListener("click", () => {
    setCookie("cookies_desempenho", document.getElementById("cookies-desempenho").checked, 30);
    setCookie("cookies_marketing", document.getElementById("cookies-marketing").checked, 30);
    setCookie("cookies_estatisticas", document.getElementById("cookies-estatisticas").checked, 30);
    setCookie("cookies_funcionais", document.getElementById("cookies-funcionais").checked, 30);

    alert("Preferências de cookies salvas!");
});

function deleteCookie(name) {
    document.cookie = name + "=; path=/; max-age=0";
}

// Botão excluir cookies
document.getElementById("delete-cookies").addEventListener("click", () => {
    deleteCookie("cookies_desempenho");
    deleteCookie("cookies_marketing");
    deleteCookie("cookies_estatisticas");
    deleteCookie("cookies_funcionais");

    // Desmarcar todos os toggles visuais
    document.getElementById("cookies-desempenho").checked = false;
    document.getElementById("cookies-marketing").checked = false;
    document.getElementById("cookies-estatisticas").checked = false;
    document.getElementById("cookies-funcionais").checked = false;

    alert("Todos os cookies foram excluídos!");
});