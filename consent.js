// Consentimiento de cookies: carga Google Analytics SOLO si el usuario acepta (RGPD).
(function () {
  var KEY = 'cookie-consent';
  var GA_ID = 'G-M229HT07JK';

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  if (choice === 'accepted') { loadGA(); return; }
  if (choice === 'rejected') { return; }

  // Sin decisión aún -> mostrar banner
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }

  function showBanner() {
    var style = document.createElement('style');
    style.textContent =
      '.cookie-banner{position:fixed;left:0;right:0;bottom:0;z-index:70;background:var(--dark,#1d1b18);color:#e7ded1;' +
      'padding:1rem 1.2rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.7rem 1.4rem;' +
      'font-family:"Jost",system-ui,sans-serif;font-size:.9rem;box-shadow:0 -12px 34px -22px rgba(0,0,0,.7)}' +
      '.cookie-banner p{margin:0;max-width:62ch;color:#e7ded1;line-height:1.5}' +
      '.cookie-banner a{color:#cbb79f;text-decoration:underline}' +
      '.cookie-banner__btns{display:flex;gap:.6rem;flex-shrink:0}' +
      '.cookie-banner button{cursor:pointer;border-radius:999px;padding:.55rem 1.3rem;font-size:.82rem;' +
      'letter-spacing:.08em;text-transform:uppercase;font-family:inherit;border:1px solid #e7ded1;background:transparent;color:#e7ded1}' +
      '.cookie-banner button.accept{background:#e7ded1;color:#1d1b18}' +
      '@media(max-width:560px){.cookie-banner{flex-direction:column;text-align:center}}';
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'cookie-banner';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Aviso de cookies');
    bar.innerHTML =
      '<p>Usamos cookies de análisis (Google Analytics) para medir las visitas y mejorar la web. ' +
      '<a href="politica-cookies.html">Más información</a>.</p>' +
      '<div class="cookie-banner__btns">' +
      '<button type="button" class="reject">Rechazar</button>' +
      '<button type="button" class="accept">Aceptar</button></div>';
    document.body.appendChild(bar);

    function decide(val) {
      try { localStorage.setItem(KEY, val); } catch (e) {}
      if (val === 'accepted') loadGA();
      bar.remove();
    }
    bar.querySelector('.accept').addEventListener('click', function () { decide('accepted'); });
    bar.querySelector('.reject').addEventListener('click', function () { decide('rejected'); });
  }
})();
