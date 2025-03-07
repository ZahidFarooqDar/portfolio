document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Highlight Active Section in Navbar
    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove("active"));
          document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add("active");
        }
      });
    });
  
    // Contact Form Submission Handler
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
  
        if (name && email && message) {
          alert("Thank you, " + name + "! Your message has been sent.");
          contactForm.reset();
        } else {
          alert("Please fill in all fields before submitting.");
        }
      });
    }
  });
  