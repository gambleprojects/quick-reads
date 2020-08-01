function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function appsFunction() {
  document.getElementById("apps-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
function appsFunction(event) {
  document.getElementById("apps-dropdown").classList.toggle("apps-show");
  event.stopPropagation();
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.querySelectorAll(".dropdown-content.apps-show");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.classList.remove('apps-show');
    }
  }
}

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


showSlides(slideIndex);
var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}
x[myIndex-1].style.display = "block";
setTimeout(carousel, 10000); // Change image every 10 seconds
}






function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search-overlay-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("mySearch");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function openSearch() {
  document.getElementById("mySearch").style.display = "block";
}

function closeSearch() {
  document.getElementById("mySearch").style.display = "none";
}

function openSearchList() {
  document.getElementById("filter-list").style.display = "block";
}

function closeSearchList() {
  document.getElementById("filter-list").style.display = "none";
}

function openBook() {
  document.getElementById("myBook").style.display = "block";
}

function closeBook() {
  document.getElementById("myBook").style.display = "none";
}




var slideIndex = 1;

function plusChapter(n) {
  showChapter(slideIndex += n);
}

function currentChapter(n) {
  showChapter(slideIndex = n);
}

function showChapter(n) {
  var i;
  var slides = document.getElementsByClassName("myChapter");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}




var doc = document;
var bookOverlay = doc.getElementsByClassName("book-overlay");
var darkModeToggle = doc.getElementsByClassName("dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {
  bookOverlay.classList="book-overlay-dark";
});
