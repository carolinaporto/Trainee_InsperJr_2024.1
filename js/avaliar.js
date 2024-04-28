document.addEventListener('DOMContentLoaded', function() {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(function(rating) {
    const stars = rating.querySelectorAll('img');

    stars.forEach(function(star) {
      star.addEventListener('mouseover', function() {
        const value = this.getAttribute('data-value');
        highlightStars(rating, value);
      });

      star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        setRating(rating, value);
      });

      star.addEventListener('mouseout', function() {
        const value = rating.getAttribute('data-rating');
        highlightStars(rating, value);
      });
    });
  });

  function highlightStars(rating, value) {
    const stars = rating.querySelectorAll('img');
    stars.forEach(function(star) {
      if (star.getAttribute('data-value') <= value) {
        star.src = 'img/star-filled.png'; // Imagem da estrela preenchida
      } else {
        star.src = 'img/star-empty.png'; // Imagem da estrela vazia
      }
    });
  }

  function setRating(rating, value) {
    rating.setAttribute('data-rating', value);
    highlightStars(rating, value);
    const type = rating.getAttribute('data-type');
    console.log('Avaliação de', type, 'selecionada:', value);
    // Aqui você pode enviar a avaliação selecionada para o servidor ou realizar qualquer outra ação desejada
  }
});
