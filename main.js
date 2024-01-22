const dropdown = document.getElementById("dropdown");
const menu = document.getElementById("menu");
let dropdownShown = false;

menu.addEventListener("click", function () {
  if (dropdownShown) {
    dropdown.style.display = "none";
    dropdownShown = false;
  } else {
    dropdown.style.display = "block";
    dropdownShown = true;
  }
});
