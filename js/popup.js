document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var overlay = document.getElementById('overlay');
      overlay.style.display = 'block';
    }, 5000); // 5000 milissegundos = 5 segundos
  });
  
  function closePopup() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  
  function redirectToRegister() {
    window.location.href = 'registro.html'; // Substitua 'registro.html' pela URL da sua página de registro
  }
  