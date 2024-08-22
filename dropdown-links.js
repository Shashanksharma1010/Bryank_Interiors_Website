var dropDownButton = document.querySelector(".dropdown");
var dropDown = document.querySelector('.menu-dropdown-links ');
var hamburgerDropDown = document.querySelector('.hamburger-menu-dropdown-links');

dropDownButton.addEventListener('mouseover', () => {
    dropDown.classList.toggle('show');
}) 

function hamburgerMenuDropDown() {
  if (hamburgerDropDown.style.display == "none") {
    hamburgerDropDown.style.display = "block";
    document.querySelector('.hamburger-menu').style.overflowY = 'scroll';
  } else {
    hamburgerDropDown.style.display = "none";
    document.querySelector('.hamburger-menu').style.overflowY = 'hidden';
  }
}





  
  // Will log 'Hello' whenever the user clicks outside of #my-element