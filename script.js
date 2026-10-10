
/* =====================================
   DR. AMIT KUMAR SAXENA
   PORTFOLIO WEBSITE JAVASCRIPT
   ===================================== */

// 1. Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after clicking a navigation link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// 2. Automatically Update Copyright Year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 3. WhatsApp Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form details
    const name = document
      .getElementById("visitorName")
      .value.trim();

    const email = document
      .getElementById("visitorEmail")
      .value.trim();

    const message = document
      .getElementById("visitorMessage")
      .value.trim();

    // Dr. Amit Saxena's WhatsApp number
    // Country code 91 + mobile number
    const whatsappNumber = "919210745836";

    // Prepare WhatsApp message
    const whatsappMessage =
      "Hello Dr. Amit Kumar Saxena!\n\n" +
      "New enquiry from your portfolio website.\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Message:\n" + message;

    // Create WhatsApp URL
    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    // Open WhatsApp with the prepared message
    window.location.href = whatsappURL;
  });
}
