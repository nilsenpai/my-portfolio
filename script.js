document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.85;
      if (sectionTop < trigger) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  });
  