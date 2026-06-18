/* ============================================================
   BALEREX DIGITAL — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Menu mobile ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Thème clair / sombre (avec persistance) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const stored = (function () { try { return localStorage.getItem('bx-theme'); } catch (e) { return null; } })();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  function applyTheme(mode) {
    root.setAttribute('data-theme', mode);
    if (themeToggle) themeToggle.setAttribute('aria-pressed', String(mode === 'dark'));
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('bx-theme', next); } catch (e) {}
    });
  }

  /* ---------- Révélation au défilement ---------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll(
    '.reveal, .section-head, .card, .pillar, .offer, .sector, .guard, .about-text, .about-card, .figure-stat'
  );
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
    // Les lignes du hero s'animent immédiatement, en cascade.
    document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
      el.style.transitionDelay = (i * 90) + 'ms';
      requestAnimationFrame(function () { el.classList.add('in'); });
    });
  }

  /* ---------- Slider Cas d'usage ---------- */
  const track = document.getElementById('sliderTrack');
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (track && dotsWrap) {
    const slides = Array.from(track.children);
    let index = 0;
    let timer = null;

    slides.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Cas ' + (i + 1));
      dot.addEventListener('click', function () { go(i); restart(); });
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-index * 100) + '%)';
      dots.forEach(function (d, di) { d.setAttribute('aria-selected', String(di === index)); });
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }
    function restart() { if (reduce) return; clearInterval(timer); timer = setInterval(next, 6000); }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });

    go(0);
    restart();

    const slider = document.getElementById('slider');
    if (slider) {
      slider.addEventListener('mouseenter', function () { clearInterval(timer); });
      slider.addEventListener('mouseleave', restart);
    }
  }

  /* ---------- Formulaire de contact (démo) ---------- */
  const form = document.getElementById('ctaForm');
  const feedback = document.getElementById('formFeedback');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (form.querySelector('#name') || {}).value || '';
      if (feedback) {
        feedback.textContent = 'Merci ' + name.trim().split(' ')[0] +
          ' — votre demande est bien notée. Nous revenons vers vous très vite.';
      }
      form.reset();
    });
  }

  /* ---------- Année dynamique (si besoin) ---------- */
  const yearEls = document.querySelectorAll('[data-year]');
  if (yearEls.length) {
    const y = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = y; });
  }
})();
