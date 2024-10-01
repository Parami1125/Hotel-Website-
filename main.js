const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
  // Show the popup after a few seconds
  window.onload = function () {
    setTimeout(function () {
      document.getElementById('newsletter-popup').style.display = 'flex';
    }, 3000); // Change this value to adjust the delay in milliseconds
  };

  // Close the popup when the close button is clicked
  document.getElementById('popup-close').onclick = function () {
    document.getElementById('newsletter-popup').style.display = 'none';
  };

  // Close the popup when the user clicks outside of the popup content
  window.onclick = function (event) {
    const popup = document.getElementById('newsletter-popup');
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  };

  // Handle form submission
  document.getElementById('newsletter-form').onsubmit = function (e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    document.getElementById('newsletter-popup').style.display = 'none';
    // You can add code here to send the email to your server or handle it as needed
  };
