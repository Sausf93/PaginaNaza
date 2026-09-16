// ===== Menú móvil =====
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  document.body.style.overflow = open ? 'hidden' : '';
});

// Cerrar el menú al pulsar un enlace
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ===== Año dinámico en el footer =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Animación de aparición al hacer scroll =====
const revealEls = document.querySelectorAll('.section, .quote, .cta');
revealEls.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// ===== Mapa: cargar Google Maps solo al pulsar (privacidad) =====
const mapFacade = document.getElementById('mapFacade');
if (mapFacade) {
  const loadMap = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://maps.google.com/maps?q=Centro%20Comercial%20Nuestra%20Se%C3%B1ora%20de%20%C3%81frica%2C%20Santa%20Cruz%20de%20Tenerife&z=16&output=embed';
    iframe.title = 'Ubicación de la consulta en Google Maps';
    iframe.loading = 'lazy';
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.allowFullscreen = true;
    mapFacade.parentElement.classList.add('map--loaded');
    mapFacade.replaceWith(iframe);
  };
  mapFacade.addEventListener('click', loadMap);
  mapFacade.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadMap(); }
  });
}
