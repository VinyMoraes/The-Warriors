var menubar = document.getElementById("menubar");

function abrir() {
    menubar.classList.add("open");
    document.body.classList.add("menu-open");
}

function fechar() {
    menubar.classList.remove("open");
    document.body.classList.remove("menu-open");
}

// Adiciona um evento de clique para fechar o menu quando o usuário clicar fora dele (opcional)
document.addEventListener('click', function(event) {
    var isClickInsideMenu = menubar.contains(event.target);
    var isClickOnMenuButton = event.target.matches('.fa-bars');
    
    if (!isClickInsideMenu && !isClickOnMenuButton) {
        fechar();
    }
});
