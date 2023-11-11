document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    // Especificando os caminhos completos para as imagens
    const images = [
      'img/fundo-inicio.jpg',
      'img/fundo2.jpg',
      'img/fundo3.jpg'
    ];
  
    let currentIndex = 0;

    function changeSlide() {
      slider.style.backgroundImage = `url('${images[currentIndex]}')`;
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      changeSlide();
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      changeSlide();
    }
  
    // Iniciar o slider com a primeira imagem
    changeSlide();
  
    // Adicionar eventos de clique para as setas
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  });