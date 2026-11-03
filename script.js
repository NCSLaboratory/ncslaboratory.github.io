const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name');
  status.textContent = name ? `Thanks, ${name}. Your inquiry has been received.` : 'Thanks. Your inquiry has been received.';
  form.reset();
});
