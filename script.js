// SLIDESHOW
let slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// - Interective slideshow
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// - Automatic slideshow
function autoSlide() {
  showSlides((slideIndex += 1));
  setTimeout(autoSlide, 5000);
}

autoSlide();

// CAROUSEL OF ARTISTS
const carrousel = document.querySelector(".carrousel");
const artistCards = document.querySelectorAll(".artist-card");
const prevButton = document.querySelector(".arrow-back-ios-new");
const nextButton = document.querySelector(".arrow-forward-ios");

const cardsPerPage = 6;
let currentPage = 0;

// Carousel of artists
function updateCarousel() {
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  artistCards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function moveCarousel(direction) {
  currentPage += direction;

  if (currentPage < 0) {
    currentPage = 0;
  }

  const maxPage = Math.ceil(artistCards.length / cardsPerPage) - 1;

  if (currentPage > maxPage) {
    currentPage = maxPage;
  }

  updateCarousel();
}

prevButton.addEventListener("click", () => {
  moveCarousel(-1);
});

nextButton.addEventListener("click", () => {
  moveCarousel(1);
});

updateCarousel();