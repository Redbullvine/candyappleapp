// Smooth nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Scroll-in animation
const cards = document.querySelectorAll('.tool-card, .truck-card, .review-card');
const fadeIn = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = e.target.style.transform.replace('translateY(20px)', 'translateY(0)');
      fadeIn.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(c => {
  c.style.opacity = '0';
  c.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  c.style.transform += ' translateY(20px)';
  fadeIn.observe(c);
});
