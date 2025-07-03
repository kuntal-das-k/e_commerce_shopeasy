// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('dark-mode-icon');
  if (document.body.classList.contains('dark-mode')) {
    icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
    localStorage.setItem('darkMode', 'true');
  } else {
    icon.innerHTML = '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
    localStorage.setItem('darkMode', 'false');
  }
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Load saved dark mode preference
window.onload = function() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-icon').innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
  }
  // Initialize carousel
  slides[currentSlide].classList.add('active');
};