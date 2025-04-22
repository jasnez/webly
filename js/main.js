
// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scroll = window.scrollY;
  const progress = (scroll / docHeight) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
});

// Rotating Hero Testimonial
(function(){
  const quotes = [
    '“Webly made everything simple and fast!” — Amina, Café Owner',
    '“Online sales doubled after launch.” — Marko, Retailer',
    '“Exceptional service and quality design.” — Lejla, Boutique Owner'
  ];
  let idx = 0;
  const el = document.getElementById('heroTestimonial');
  setInterval(() => {
    idx = (idx + 1) % quotes.length;
    el.textContent = quotes[idx];
  }, 5000);
})();

// Modal Two-Step Form
const modal = document.getElementById('modalForm');
const form = document.getElementById('stepForm');
const steps = form.querySelectorAll('.form-step');
let currentStep = 0;

document.getElementById('openModalForm').addEventListener('click', () => {
  modal.hidden = false;
  steps[0].hidden = false;
});
modal.querySelector('.modal-close').addEventListener('click', () => {
  modal.hidden = true;
  steps.forEach(s => s.hidden = true);
  currentStep = 0;
});

// Next to Step 2
document.getElementById('toStep2').addEventListener('click', () => {
  if (form.name.checkValidity() && form.email.checkValidity()) {
    steps[0].hidden = true;
    steps[1].hidden = false;
    currentStep = 1;
  } else {
    form.reportValidity();
  }
});

// On Submit
form.addEventListener('submit', e => {
  e.preventDefault();
  form.submit();
});

// IntersectionObserver for Sticky Sub‑Nav Highlight
const navLinks = document.querySelectorAll('header nav a');
const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute('href')));
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const idx = sections.indexOf(entry.target);
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', false));
      navLinks[idx].classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => io.observe(sec));
