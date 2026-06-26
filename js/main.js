const heroTitle = document.querySelector("h1");
const navTitle = document.querySelector(".nav-title");

function toggleNavTitle() {
  const titleBottom = heroTitle.getBoundingClientRect().bottom;

  if (titleBottom < 0) {
    navTitle.classList.add("show");
  } else {
    navTitle.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleNavTitle);
toggleNavTitle();
