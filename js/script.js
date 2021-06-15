var htmlBurger = document.querySelector("#burger");

htmlBurger.addEventListener("click", function () {
  var htmlDropdown = document.querySelector("#dropdownMenu");
  htmlDropdown.classList.toggle("drop-down-hidden");
  htmlDropdown.classList.toggle("drop-down-visible");
});