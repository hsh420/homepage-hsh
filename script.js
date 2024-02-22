const menu = document.querySelector("#menu");
const mobileNav = document.querySelector("#mobile-nav");

menu.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    mobileNav.classList.toggle("show");
  }
});
