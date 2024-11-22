// Seleciona os elementos necessários
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides a'); // Imagens dentro dos links
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Índice do slide atual
const totalSlides = slideImages.length; // Total de slides

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const slideWidth = slides.offsetWidth; // Largura de cada slide
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Move os slides
}

// Evento para botão "Próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Vai para o próximo slide ou volta ao primeiro
    updateCarousel();
});

// Evento para botão "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Vai para o slide anterior ou volta ao último
    updateCarousel();
});

// Ajusta o carrossel ao redimensionar a janela (responsividade)
window.addEventListener('resize', updateCarousel);

// Atualiza o carrossel no carregamento inicial
updateCarousel();
