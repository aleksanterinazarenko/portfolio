document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-list a');
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath) {
          link.classList.add('active');
      }
  });
});