export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('carousel', {
    model: {
      defaults: {
          script : function() {
               new Swiper(".mySwiper", {
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",

                  
                },
              });
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
