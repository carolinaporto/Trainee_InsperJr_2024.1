document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel_banner');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const banners = document.querySelectorAll('.banner');
    const bannerCount = banners.length;
    let currentIndex = 0;
  
    function goToSlide(index) {
      currentIndex = (index + bannerCount) % bannerCount;
      const translateValue = -currentIndex * 100;
      carousel.style.transform = `translateX(${translateValue}%)`;
    }
  
    prevArrow.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
    });
  
    nextArrow.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
    });
  });
  