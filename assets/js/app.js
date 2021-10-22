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

  // Variables
  const closeBTN = document.querySelector(".close-btn");
  const checkInp = document.getElementById("check");
  const shopMinus = document.querySelector(".shop-minus");
  const shopPlus = document.querySelector(".shop-plus");
  const quantity = document.querySelector(".quantity");
  const miniBasket = document.querySelector(".mini-basket");
  const basket = document.querySelector(".basket");

  // Quantity add-delete

  const _quantity = function () {
    shopMinus.addEventListener("click", function () {
      const value = Number(quantity.innerHTML);
      value > 0 && (quantity.innerHTML = value - 1)
    });
    shopPlus.addEventListener("click", function () {
      const value = Number(quantity.innerHTML);
      quantity.innerHTML = value + 1
    })
  }

  // Slider Settings
  const _productSlider = function () {
    $(".slider").slick({
      speed: 300,
      fade: true,
      cssEase: 'linear',
      prevArrow: '<button class="icon-chevron_up"><img loading="lazy" src="./assets/images/icon-previous.svg" alt="p-1"></button>',
      nextArrow: '<button class="icon-chevron_down"><img loading="lazy" src="./assets/images/icon-next.svg" alt="p-1"></button>',
    });
    $('.product-thumbnail').on('click', function () {
      let slideIndex = $(this).data('slide');
      $('.slider').slick('slickGoTo', slideIndex, false);
    });
    ui.exampleUI();
  };


  // Sidebar close Event
  const _closeSidebar = function () {
    closeBTN.addEventListener("click", function () {
      checkInp.checked = false;
    })
  }

  // Add to cart event
  const _addToCart = function () {}

  // Toggle Basket 
  const _toggleBasket = function () {
    miniBasket.addEventListener("click", function () {
      basket.classList.contains("active") ? basket.classList.remove("active") : basket.classList.add("active");
    })
  }

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _productSlider();
      _closeSidebar();
      _quantity();
      _addToCart();
      _toggleBasket();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  ecommerceBasic.init();
});