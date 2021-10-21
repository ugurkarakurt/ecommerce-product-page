import { UI } from "./ui.js";
const ui = new UI();

// Setup module
// ------------------------------

const ecommerceBasic = (function () {
  //
  // Setup module components
  //

  // Hover Effect
  const _example = function () {
    ui.exampleUI();
  };


  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _example();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  ecommerceBasic.init();
});
