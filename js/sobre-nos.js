document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');
  
        if (answer.style.display === 'none') {
          answer.style.display = 'block';
          arrow.src = 'img/up.png';
        } else {
          answer.style.display = 'none';
          arrow.src = 'img/down.png';
        }
      });
    });
  });
  