  /* お客様の声　Swiper */
new Swiper('.swiper-ttm', {
slidesPerView: 1,
spaceBetween: 18,
loop: true,
autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
pagination: { el: '.swiper-pagination', clickable: true },
breakpoints: {
    560: { slidesPerView: 2 },
    860: { slidesPerView: 3 },
},
});

/* Fade-in */
const fadeEls = document.querySelectorAll('.fi');
const io = new IntersectionObserver((entries) => {
entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
});
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
fadeEls.forEach(el => io.observe(el));

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' });
});
});

/* Header shadow on scroll */
const hdr = document.getElementById('site-header');
window.addEventListener('scroll', () => {
hdr.classList.toggle('is-scrolled', scrollY > 20);
}, { passive: true });

/* FAB hide near footer */
const fab = document.querySelector('.fab-line');
const footer = document.querySelector('.g-footer');
new IntersectionObserver(entries => {
fab.style.opacity        = entries[0].isIntersecting ? '0' : '1';
fab.style.pointerEvents  = entries[0].isIntersecting ? 'none' : 'auto';
}, { threshold: 0.1 }).observe(footer);
