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

 const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      dropdownContent.classList.remove("show");
    }
  });