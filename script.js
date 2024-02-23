const menu = document.querySelector("#menu");
const mobileNav = document.querySelector("#mobile-nav");
const teaserBtn = document.querySelector("#teaser-btn");
const teaserLine = document.querySelector("#teaser-line");
const teaserList = document.querySelector("#teaser-list");
const teaserBanner = document.querySelector("#teaser-banner");
const teaserTextP = document.querySelector("#teaser-text-p");

menu.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    mobileNav.classList.toggle("show");
  }
});

teaserBtn.addEventListener("click", () => {
  teaserTextP.textContent = "";
  teaserBanner.classList.remove("display");
  let count = 59;
  teaserBtn.textContent = count;
  teaserList.classList.add("display");
  let interval = setInterval(() => {
    console.log(count);
    teaserBtn.textContent = count;
    if (count > 0) {
      count--;
    }
    if (count === 0) {
      teaserBtn.textContent = "Start";
      teaserLine.classList.remove("animate");
      teaserBtn.classList.remove("move-down");
      teaserList.classList.remove("display");
      teaserBanner.classList.add("display");
      clearInterval(interval);
    }
  }, 1000);
  teaserLine.classList.add("animate");
  teaserBtn.classList.add("move-down");
});
