// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Active Navigation Link Highlight on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Dark / Light Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', nextTheme);
  themeToggle.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
});

// Education Details Modals
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-modal');

modalTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-modal');
    document.getElementById(targetId).classList.add('open');
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('open');
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
});