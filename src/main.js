import './style.css';

// Codex Download — Main JS
// Smooth scroll and interactive behaviors

// FAQ accordion: close others on open
document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item').forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});

// Sticky nav background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 56) {
    nav.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.85)';
  }
  lastScroll = currentScroll;
});
