// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Dark mode toggle
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('seracoure-theme', theme);
  toggle.textContent = theme === 'dark' ? '☀︎' : '☾';
}

setTheme(localStorage.getItem('seracoure-theme') || 'light');

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});
