let slides = document.querySelectorAll(".slide");
let current = 0;

document.getElementById("next").addEventListener("click", () => {
  changeSlide(1);
});
document.getElementById("prev").addEventListener("click", () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  slides[current].classList.remove("active");
  current = (current + direction + slides.length) % slides.length;
  slides[current].classList.add("active");
}

// Auto-slide (a cada 6 segundos)
setInterval(() => {
  changeSlide(1);
}, 6000);
