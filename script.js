// Toggle Dark/Light Mode from Settings
function toggleDarkModeFromSettings() {
  const toggle = document.getElementById("darkModeToggle");
  if (toggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// Load Dark Mode Preference on both pages
function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    const toggle = document.getElementById("darkModeToggle");
    if (toggle) {
      toggle.checked = savedTheme === "dark";
    }
  } else {
    // Set default theme if none is saved
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

document.addEventListener("DOMContentLoaded", loadThemePreference);