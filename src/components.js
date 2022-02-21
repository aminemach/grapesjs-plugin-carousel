export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('carousel', {
    model: {
      defaults: {
          script : function() {
              var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
        }
          }
      },
    },
    isComponent: (el) => {
      if (el.className && el.className.includes("carouselContainer")) {
        return {
          type: 'carousel',
        };
      }
    },
  });

  
};
