/* ----- DOWNLOAD RESUME FUNCTION ----- */
function downloadResume() {
  window.open("./assets/Resume.pdf", "_blank");
}

/* ----- INITIATE EMAILJS ----- */
(function () {
  emailjs.init({
    publicKey: "JjOPcZ8PZw48ZM6gQ",
  });
})();

/* ----- PREVENTING DEFAULT FORM SUBMISSION ----- */
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendEmail();
  });

/* ----- SEND EMAIL FUNCTION ----- */
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("service_jyi9pta", "template_f7ixi0j", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      function () {
        alert("Your message has been sent successfully!");
      },
      function () {
        alert("Oops! Something went wrong. Please try again.");
      },
    );
}

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Software Engineer Student", "Web Developer", "Freelancer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- EDUCATION BOX -- */
sr.reveal(".education-item", { interval: 200 });

/* -- PROFESSIONAL EXPERIENCES BOX -- */
sr.reveal(".experience-item", { interval: 200 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

function removeActiveClasses() {
  navLinks.forEach((link) => link.classList.remove("active-link"));
}

// Throttle function to limit how often scrollActive is called
function throttle(fn, wait = 20) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 60;
    const sectionId = current.getAttribute("id");

    if (
      (sectionId === "about" ||
        sectionId === "education" ||
        sectionId === "experiences") &&
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      removeActiveClasses();
      document
        .querySelector('.nav-menu a[href="#about"]')
        .classList.add("active-link");
    } else if (
      sectionId === "projects" &&
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      removeActiveClasses();
      document
        .querySelector('.nav-menu a[href="#projects"]')
        .classList.add("active-link");
    } else if (
      sectionId === "contact" &&
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      removeActiveClasses();
      document
        .querySelector('.nav-menu a[href="#contact"]')
        .classList.add("active-link");
    } else if (sectionId === "home" && scrollY < sectionTop + sectionHeight) {
      removeActiveClasses();
      document
        .querySelector('.nav-menu a[href="#home"]')
        .classList.add("active-link");
    }
  });
}

function handleClick(location) {
  window.location.href = `#${location}`;
}

window.addEventListener("scroll", throttle(scrollActive, 100));
document.addEventListener("DOMContentLoaded", scrollActive);
