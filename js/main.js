/* ============================================
   FLITZGRIP — main.js
   ============================================ */

/* Nav: transparent → solid on scroll */
const nav = document.getElementById('nav');
if (nav && !nav.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  /* Close on nav link click */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}

/* Subtle hero parallax */
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `scale(1.05) translateY(${y * 0.3}px)`;
  }, { passive: true });
}

/* Product section carousel (index.html) */
const prodImgs = [...document.querySelectorAll('.product-carousel-img')];
if (prodImgs.length) {
  const track    = document.getElementById('productTrack');
  const dotsWrap = document.getElementById('prodDots');
  let prodCurrent = 0;

  prodImgs.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Image ' + (i + 1));
    d.addEventListener('click', () => prodGoTo(i));
    dotsWrap.appendChild(d);
  });

  function prodGoTo(i) {
    prodCurrent = (i + prodImgs.length) % prodImgs.length;
    track.style.transform = `translateX(-${prodCurrent * 100}%)`;
    document.querySelectorAll('#prodDots .gallery-dot').forEach((d, j) => d.classList.toggle('active', j === prodCurrent));
  }
  /* Apply contain styling on load too */
  prodImgs.forEach(img => {
    if (img.dataset.fit === 'contain') img.classList.add('product-carousel-img'); /* already has class */
  });

  document.getElementById('prodPrev')?.addEventListener('click', () => prodGoTo(prodCurrent - 1));
  document.getElementById('prodNext')?.addEventListener('click', () => prodGoTo(prodCurrent + 1));

  let prodStartX = 0;
  track.addEventListener('touchstart', e => { prodStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - prodStartX;
    if (Math.abs(dx) > 40) prodGoTo(prodCurrent + (dx < 0 ? 1 : -1));
  });
}

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
