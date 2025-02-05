function abrirImagem(src) {
    var modal = document.getElementById("imagem-modal");
    var imagemExpandida = document.getElementById("imagem-expandida");
    var barraNavegacao = document.querySelector(".navbar"); // Pegando a navbar do Bootstrap

    imagemExpandida.src = src;
    modal.style.display = "block";

    // Esconder a barra de navegação ao abrir a imagem
    barraNavegacao.style.display = "none"; 
}

function fecharImagem() {
    var modal = document.getElementById("imagem-modal");
    var barraNavegacao = document.querySelector(".navbar");

    modal.style.display = "none";

    // Mostrar a barra de navegação novamente
    barraNavegacao.style.display = "flex"; // Restaurar a exibição da navbar
}
