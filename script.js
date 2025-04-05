// Toggle Navigation Menu for Mobile
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");

if (hamburgerIcon && navLinks) {
  hamburgerIcon.addEventListener("click", () => {
    console.log("Hamburger icon clicked");
    navLinks.classList.toggle("active");
    console.log("Nav links class:", navLinks.classList);
  });
} else {
  console.error("Hamburger icon or nav links not found");
}

// Theme Toggle (Light/Dark Mode)
const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = false;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "🌙"; // Moon icon for dark mode
    } else {
      document.body.classList.remove("dark-mode");
      themeToggle.textContent = "☀️"; // Sun icon for light mode
    }
  });
} else {
  console.error("Theme toggle not found");
}
