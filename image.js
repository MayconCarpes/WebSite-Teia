function abrirImagem(src) {
    var modal = document.getElementById("imagem-modal");
    var imagemExpandida = document.getElementById("imagem-expandida");
    var barraNavegacao = document.getElementById("barra-navegacao");
    
    imagemExpandida.src = src;
    modal.style.display = "block";
    barraNavegacao.style.position = "absolute"; // Muda a posição para absolute
    barraNavegacao.style.top = "100px"; // Ajuste a posição para baixo da imagem
}

function fecharImagem() {
    var modal = document.getElementById("imagem-modal");
    var barraNavegacao = document.getElementById("barra-navegacao");
    
    modal.style.display = "none";
    barraNavegacao.style.position = "fixed"; // Restaura a posição para fixed
    barraNavegacao.style.top = "0"; // Restaura a posição original
}