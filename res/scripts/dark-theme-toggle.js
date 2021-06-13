 
const btn = document.querySelector(".theme-toggle");
const theme = document.querySelector("#theme-link");
const icon = document.querySelector(".theme-toggle-icon");
const githubLogo = document.querySelector("#github-logo");
var storedTheme = localStorage.getItem("theme");

if (storedTheme == "dark") {
  theme.href = "res/scss/dark-theme.css";
  btn.classList = "theme-toggle btn btn-dark right m-2";
}

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "res/scss/light-theme.css") {
    theme.href = "res/scss/dark-theme.css";
    btn.classList = "theme-toggle btn btn-dark right m-2";
    icon.src = "res/assets/white-sun.png";
    githubLogo.src = "res/assets/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
    storedTheme = "dark";
  } else {
    theme.href = "res/scss/light-theme.css";
    btn.classList = "theme-toggle btn btn-light right m-2";
    icon.src = "res/assets/sun.png";
    githubLogo.src = "res/assets/GitHub-Mark/PNG/GitHub-Mark-32px.png";
    storedTheme = "light";
  }
  
  localStorage.setItem("theme", storedTheme);
});