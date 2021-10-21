import {
  UI
} from "./ui.js";
const ui = new UI();

// Setup module
// ------------------------------

const ecommerceBasic = (function () {
  //
  // Setup module components
  //

  // Hover Effect
  const _productSlider = function () {
    $(".slider").slick({
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear'

      // prevArrow: '<button class="icon-chevron_up"><</button>',
      // nextArrow: '<button class="icon-chevron_down">></button>',
    });
    $('.product-thumbnail').on('click', function () {
      let slideIndex = $(this).data('slide');
      $('.slider').slick('slickGoTo', slideIndex, false);
    });
    ui.exampleUI();
  };


  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _productSlider();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  ecommerceBasic.init();
});