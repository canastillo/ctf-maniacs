var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

function automaticMode(){
  slideIndex++;
  if(slideIndex > 2) slideIndex = 0;
  showSlide(slideIndex);
}

showSlide(slideIndex); // Apenas inicia, muestra el primero
var timer = setInterval(automaticMode, 4000);

function showSlide(slideIndex){
  var dots = document.getElementsByClassName("dot");
  
  resetDots(dots);
  animateSlide(slideIndex, slides);
  activateDot(slideIndex, dots);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
  restartTimer();
}

function nextSlide(){
  slideIndex = (slideIndex+1)%slides.length;
  showSlide(slideIndex);
  restartTimer();
}

function prevSlide() {
  slideIndex = (slides.length-1+slideIndex)%slides.length;
  showSlide(slideIndex);
  restartTimer();
}

function restartTimer(){
  clearInterval(timer);
  timer = setInterval(automaticMode, 4000);
}

function resetDots(dots){ // "Desactiva" todos los puntos
  for (let i=0; i<dots.length; i++) { 
    dots[i].className = dots[i].className.replace(" active", "");
  }
}

function animateSlide(slideIndex, slides){
  switch(slideIndex){
    case 0:
      $(slides[0]).animate({marginLeft: '0%'});
    break;

    case 1:
      $(slides[0]).animate({marginLeft: '-33.5%'});
    break;
      
    case 2:
      $(slides[0]).animate({marginLeft: '-67%'});
    break;
  }
}

function activateDot(slideIndex, dots){ 
  dots[slideIndex].className += " active";
}