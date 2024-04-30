const menu = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
