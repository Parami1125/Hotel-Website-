// JavaScript for the mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// JavaScript for the contact form submission
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // You can add your form submission logic here
  alert('Message sent successfully!');
});
