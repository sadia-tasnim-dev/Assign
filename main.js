// for hamburger menu
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
// for hamburger menu

// for carousel
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
let imagePosition = 1;

function showImg() {
  if (imagePosition === 1) {
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
  }
  if (imagePosition === 2) {
    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
  }
  if (imagePosition === 3) {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
  }
}

prev.addEventListener("click", function () {
  imagePosition--;
  if (imagePosition === 0) imagePosition = 3;
  showImg();
});

next.addEventListener("click", function () {
  imagePosition++;
  if (imagePosition === 4) imagePosition = 1;
  showImg();
});
// for carousel
