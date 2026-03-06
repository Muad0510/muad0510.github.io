// ─── Mobile Menu ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      body.style.overflow = '';
    }
  });
}

// ─── Header Scroll State ─────────────────────────────────────
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 20
      ? 'rgba(12, 11, 10, 0.95)'
      : 'rgba(12, 11, 10, 0.82)';
  }, { passive: true });
}

// ─── PDF / Print Resume ──────────────────────────────────────
const printBtn = document.getElementById('printResume');
if (printBtn) {
  printBtn.addEventListener('click', () => {
    window.print();
  });
}

// ─── Reset all animated elements before printing ─────────────
// This ensures no element is left with opacity:0 from the scroll observer
function resetForPrint() {
  document.querySelectorAll(
    '.preview-card, .project-card, .value-card, .exp-item, .stat, .social-row'
  ).forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
window.addEventListener('beforeprint', resetForPrint);

// ─── Scroll-triggered fade-in ────────────────────────────────
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Only apply scroll animations when not in print context and motion is OK
if (!prefersReducedMotion) {
  document.querySelectorAll(
    '.preview-card, .project-card, .value-card, .exp-item, .stat, .social-row'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ─── Active nav link fallback ────────────────────────────────
const currentPath = window.location.pathname;
document.querySelectorAll('.nav__links a').forEach(link => {
  if (link.getAttribute('href') === currentPath ||
      (currentPath === '/' && link.getAttribute('href') === '/')) {
    link.classList.add('active');
  }
});

