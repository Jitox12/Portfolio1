const navLinks = document.querySelectorAll(".nav-links li a");


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        const visibleSection = entry.target.id;

        const activeLink = document.querySelector(
          `.nav-links li a[href="#${visibleSection}"]`
        );

        activeLink.classList.add("active");
      } else {

        const visibleSection = entry.target.id;

        const activeLink = document.querySelector(
          `.nav-links li a[href="#${visibleSection}"]`
        );

        activeLink.classList.remove("active");
      }
    });
  },
  { threshold: 0.5 }
)

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
})

