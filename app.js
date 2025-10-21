// Start: DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu Functionality
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavClose = document.querySelector(".mobile-nav-close");
  const mobileDropdowns = document.querySelectorAll(".mobile-dropdown-toggle");

  // Toggle mobile navigation
  hamburgerMenu.addEventListener("click", function () {
    mobileNav.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close mobile navigation
  mobileNavClose.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Mobile dropdown functionality
  mobileDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle("active");

      // Close other dropdowns
      mobileDropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== this) {
          otherDropdown.parentElement.classList.remove("active");
        }
      });
    });
  });

  // Close mobile nav when clicking on links (except dropdown toggles)
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (!this.classList.contains("mobile-dropdown-toggle")) {
        mobileNav.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Close mobile nav when clicking outside
  mobileNav.addEventListener("click", function (e) {
    if (e.target === mobileNav) {
      mobileNav.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Close dropdowns when clicking outside on mobile
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".mobile-dropdown") &&
      !e.target.closest(".hamburger-menu")
    ) {
      mobileDropdowns.forEach((dropdown) => {
        dropdown.parentElement.classList.remove("active");
      });
    }
  });

  // Back to Top Button Functionality
  const backToTopButton = document.getElementById("backToTop");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
// End: DOM Content Loaded Event
