// 1) Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// 3) Theme handling
const root = document.documentElement; // <html>
const themeBtn = document.querySelector(".theme-toggle");

function applyUserTheme(theme) {
  if (!theme) {
    root.removeAttribute("data-user-theme"); // fallback to system
    return;
  }
  root.setAttribute("data-user-theme", theme);
}

function initTheme() {
  // user setting? (light/dark), else auto
  const saved = localStorage.getItem("theme"); // "light" | "dark" | null
  applyUserTheme(saved);
}
initTheme();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-user-theme"); // "light" | "dark" | null
    const next = current === "dark" ? "light" : (current === "light" ? null : "dark");
    // Cycle: auto → dark → light → auto
    if (next === null) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
    applyUserTheme(next);
  });
}

// 4) Fill contact links if present
const email = "your@email.com";   // TODO: replace
const phone = "+2547...";         // TODO: replace
const gh = "https://github.com/yourhandle";
const li = "https://www.linkedin.com/in/yourhandle";
const tw = "https://twitter.com/yourhandle";
const ig = "https://instagram.com/yourhandle";

const emailLink = document.getElementById("emailLink");
const phoneLink = document.getElementById("phoneLink");
const ghLink = document.getElementById("ghLink");
const liLink = document.getElementById("liLink");
const twLink = document.getElementById("twLink");
const igLink = document.getElementById("igLink");

if (emailLink) { emailLink.textContent = email; emailLink.href = `mailto:${email}`; }
if (phoneLink) { phoneLink.textContent = phone; phoneLink.href = `tel:${phone.replace(/\s+/g,'')}`; }
if (ghLink) ghLink.href = gh;
if (liLink) liLink.href = li;
if (twLink) twLink.href = tw;
if (igLink) igLink.href = ig;

const toggle = document.getElementById('dark-mode-toggle');
toggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
};
// 5) Add fade-in effect to elements with class "fade-in"
