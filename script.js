document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id], header.hero');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function updateActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const link = document.querySelector(`nav a[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && link) {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });

    // Home/hero section
    if (scrollY < 200) {
      navLinks.forEach((l) => l.classList.remove('active'));
    }
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
});
