hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
  hamburger.classList.toggle("active");
};

const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");

    const infoBox = button.nextElementSibling;

    if (infoBox.classList.contains("hidden")) {
      infoBox.classList.remove("hidden");
      infoBox.classList.add("visible");
    } else {
      infoBox.classList.add("hidden");
      infoBox.classList.remove("visible");
    }
  });
});

const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

const scrollAmount = 200;
const slideInterval = 2000;

left.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

right.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

let autoSlide = setInterval(() => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  if (carousel.scrollLeft >= maxScroll) {
    carousel.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
}, slideInterval);

left.addEventListener("click", () => clearInterval(autoSlide));
right.addEventListener("click", () => clearInterval(autoSlide));
