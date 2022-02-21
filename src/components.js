export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('carousel', {
    model: {
      defaults: {
          script : function() {
              var currentSlide = 1;


function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('carouselImgs');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

window.onload = function () {
  showSlide(currentSlide);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}
          }
      },
    },
    isComponent: (el) => {
      if (el.className && el.className.includes("swiper")) {
        return {
          type: 'carousel',
        };
      }
    },
  });

  
};
