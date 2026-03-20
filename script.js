// Slideshow
const slides = document.querySelectorAll('.slideshow img');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNextSlide, 3000);

// Music toggle
const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicToggle');
let isPlaying = false;

btn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    btn.textContent = 'Pause Music';
  } else {
    music.pause();
    isPlaying = false;
    btn.textContent = 'Play Music';
  }
});
