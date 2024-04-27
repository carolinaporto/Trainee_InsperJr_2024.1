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


    // Carrossel 2 -> reviews 
    const volt = document.querySelector('.voltar');
    const avanc = document.querySelector('.avancar');
    const carrosselInner = document.querySelector('.carrossel-inner');
    const carrosselItems = document.querySelectorAll('.carrossel-item');
  
    let IndexAtual = 0;
  
    volt.addEventListener('click', function() {
      if (IndexAtual === 0) {
        return; // Retorna se estiver na primeira imagem
      }
      IndexAtual--;
      updateCarrossel();
    });
  
    avanc.addEventListener('click', function() {
      if (IndexAtual === carrosselItems.length - 3) {
        IndexAtual = 0; // Reinicia o carrossel
        updateCarrossel();
        return;
      }
      IndexAtual++;
      updateCarrossel();
    });
  
    function updateCarrossel() {
      const largura_item = carrosselItems[0].offsetWidth + 10; // Largura da imagem + espaçamento
      const largura_container = carrosselInner.offsetWidth;
      const Imagens_visiveis = Math.floor(largura_container / largura_item); // Número de imagens visíveis na tela
      const off_set = -IndexAtual * largura_item;
      carrosselInner.style.transform = `translateX(${off_set}px)`;
  
      // Verifica se a última imagem está completamente visível e alinhada com a borda direita da tela
      if (IndexAtual + Imagens_visiveis >= carrosselItems.length && off_set + largura_container >= carrosselItems.length * largura_item) {
        IndexAtual = 0; // Reinicia o carrossel
        carrosselInner.style.transform = `translateX(0px)`; // Volta para a posição inicial
      }
    }
  });
  