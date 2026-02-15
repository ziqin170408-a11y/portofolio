// ===== Navbar berubah warna saat scroll =====
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "#6a5acd";
    nav.style.transition = "0.3s";
  } else {
    nav.style.background = "transparent";
  }
});


// ===== Smooth scroll untuk semua link navbar =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// ===== Efek aktif menu saat discroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
