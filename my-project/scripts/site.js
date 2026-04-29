$(document).ready(function() {
$("#hamburger-btn").on("click", function() { // ← click event

  // ↓ action snippets ↓
  if ($("#nav-menu").hasClass("hidden")) { // ← element has css class

    // ↓ action snippets (class on element) ↓
    $("#nav-menu").removeClass("hidden"); // ← action: remove css class
    $("#nav-menu").addClass("open"); // ← action: add css class
    // ↑ action snippets (class on element) ↑

  } else { // ← element has css class

    // ↓ action snippets (class not on element) ↓
    $("#nav-menu").addClass("hidden"); // ← action: add css class
    $("#nav-menu").removeClass("open"); // ← action: remove css class
    // ↑ action snippets (class not on element) ↑

  } // ← element has css class

  // ↑ action snippets ↑

}); // ← click event
$("#open-modal").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modal-overlay").removeClass("hidden"); // ← action: remove css class
  // ↑ action snippets ↑

}); // ← click event
$("#close-modal").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modal-overlay").addClass("hidden"); // ← action: add css class
  // ↑ action snippets ↑

}); // ← click event
$(window).on("resize", function() { // ← resize browser window event

  // ↓ action snippets ↓
  if (window.matchMedia("(max-width: 700px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("#nav-menu").addClass("hidden"); // ← action: add css class
    $("#nav-menu").removeClass("open"); // ← action: remove css class
    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("#nav-menu").removeClass("hidden"); // ← action: remove css class
    // ↑ action snippets (> width) ↑

  } // ← get browser width
  // ↑ action snippets ↑

}); // ← resize browser window event

if (window.matchMedia("(max-width: 700px)").matches) { // ← get browser width

  // ↓ action snippets (< width) ↓
  $("#nav-menu").addClass("hidden"); // ← action: add css class
  $("#nav-menu").removeClass("open"); // ← action: remove css class
  // ↑ action snippets (< width) ↑

} else { // ← get browser width

  // ↓ action snippets (> width) ↓
  $("#nav-menu").removeClass("hidden"); // ← action: remove css class
  // ↑ action snippets (> width) ↑

} // ← get browser width

});
