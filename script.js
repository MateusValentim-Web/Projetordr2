document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões "Saiba Mais"
    var saibaMaisBtns = document.querySelectorAll(".saibaMais");

    // Itera sobre cada botão "Saiba Mais"
    saibaMaisBtns.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();  // Impede o comportamento padrão de navegação
            var infoDiv = this.nextElementSibling;  // Seleciona o div com as informações (imediatamente após o botão)

            // Alterna a visibilidade da div com informações
            if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
                infoDiv.style.display = "block";  // Exibe as informações
            } else {
                infoDiv.style.display = "none";  // Oculta as informações
            }
        });
    });
});
