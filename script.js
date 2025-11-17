// ===== MENU RESPONSIVO =====
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ===== ADICIONAR COMUNICADOS =====
document.getElementById("novoComunicado").addEventListener("click", function() {
  const texto = prompt("Digite o novo comunicado:");
  if (texto) {
    const lista = document.getElementById("lista-comunicados");
    const novo = document.createElement("p");
    novo.textContent = "📢 " + texto;
    novo.classList.add("fade");
    lista.appendChild(novo);
  }
});

// ===== ANIMAÇÕES COM SCROLLREVEAL =====
ScrollReveal().reveal('.container h2', { delay: 100, origin: 'bottom', distance: '40px', duration: 800 });
ScrollReveal().reveal('.card', { interval: 150, origin: 'bottom', distance: '30px', duration: 800 });
ScrollReveal().reveal('.event', { interval: 150, origin: 'left', distance: '40px', duration: 800 });
ScrollReveal().reveal('.hero-content', { origin: 'top', distance: '60px', duration: 1000 });
