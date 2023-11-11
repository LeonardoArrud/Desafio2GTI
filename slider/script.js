document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    const images = [
      'img/fundo-inicio.jpg',
      'img/fundo2.jpg',
      'img/fundo3.jpg'
    ];
  
 let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
  
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
  
    function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
    }
  
    function handleTouchEnd(event) {
      touchEndX = event.changedTouches[0].clientX;
      handleGesture();
    }
  
    function handleGesture() {
      const gestureDistance = touchEndX - touchStartX;
  
      if (gestureDistance > 0) {
        prevSlide();
      } else if (gestureDistance < 0) {
        nextSlide();
      }
    }
  
    changeSlide();
  
    // Toque para setas
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    // Toque na tela do celular
    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchend', handleTouchEnd, false);
  });
