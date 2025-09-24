let slideIndex = 1;
showSlides(slideIndex);

// Flèches
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Points
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Fonction principale
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Masquer toutes les slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Réinitialiser tous les points
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Afficher la bonne slide
  slides[slideIndex - 1].style.display = "block";

  // Activer le bon point
  dots[slideIndex - 1].classList.add("active");
}