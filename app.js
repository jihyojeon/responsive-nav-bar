const toggleBtn = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");
const sns = document.querySelector(".navbar__sns");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
