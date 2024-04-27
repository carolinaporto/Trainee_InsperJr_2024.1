document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
  
    let currentIndex = 0;
  
    prevBtn.addEventListener('click', function() {
      if (currentIndex === 0) {
        return; // Retorna se estiver na primeira imagem
      }
      currentIndex--;
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', function() {
      if (currentIndex === carouselItems.length - 4) {
        currentIndex = 0; // Reinicia o carrossel
        updateCarousel();
        return;
      }
      currentIndex++;
      updateCarousel();
    });
  
    function updateCarousel() {
      const itemWidth = carouselItems[0].offsetWidth + 10; // Largura da imagem + espaçamento
      const containerWidth = carouselInner.offsetWidth;
      const visibleImages = Math.floor(containerWidth / itemWidth); // Número de imagens visíveis na tela
      const offset = -currentIndex * itemWidth;
      carouselInner.style.transform = `translateX(${offset}px)`;
  
      // Verifica se a última imagem está completamente visível e alinhada com a borda direita da tela
      if (currentIndex + visibleImages >= carouselItems.length && offset + containerWidth >= carouselItems.length * itemWidth) {
        currentIndex = 0; // Reinicia o carrossel
        carouselInner.style.transform = `translateX(0px)`; // Volta para a posição inicial
      }
    }
  });
  