const newsletter = document.querySelectorAll(".newsletter");
const modal = document.querySelector(".modal");
const close = document.querySelector("form .close");
const accordionTitle = document.querySelectorAll(".accordion .title");
const hamburger = document.querySelector(".hamburger");
const categories = document.querySelector(".categories");

hamburger.addEventListener("click", (event) => {
  event.preventDefault();
  hamburger.classList.toggle("active");
  categories.classList.toggle("active");
});

accordionTitle.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("active");
  });
});

newsletter.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("show");
  });
});

close.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove("show");
});

function updateCarousal() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: window.innerWidth > 960 ? 3 : 1,
    spaceBetween: 30,
    slidesPerGroup: window.innerWidth > 960 ? 3 : 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
}
updateCarousal();

window.onresize = () => {
  updateCarousal();
};
