const cards = document.querySelectorAll('.slide');
let current = 0;

function updateSlides() {
  cards.forEach((card, i) => {
    card.classList.remove('active');
  });
  cards[current].classList.add('active');
}

function moveSlide(direction) {
  current = (current + direction + cards.length) % cards.length;
  updateSlides();
}

// Event listeners for arrows (optional)
document.querySelector('.arrow.left')?.addEventListener('click', () => moveSlide(-1));
document.querySelector('.arrow.right')?.addEventListener('click', () => moveSlide(1));

// Optional autoplay
setInterval(() => moveSlide(1), 5000);

// Initialize first slide
updateSlides();