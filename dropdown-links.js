var dropDownButton = document.querySelector(".dropdown");
var dropDown = document.querySelector('.menu-dropdown-links ');
var hamburgerDropDown = document.querySelector('.hamburger-menu-dropdown-links');

const onMouseOverOutside = ( Button, element, callback) => {
  document.addEventListener('mouseover', e => {
    if (Button.contains(e.target) || element.contains(e.target)) {
      return
    } 
    callback();
  });
};

dropDownButton.addEventListener('mouseover', () => {
  dropDown.classList.add('show');
}) 

onMouseOverOutside(dropDownButton, dropDown, () => dropDown.classList.remove('show'));
// onMouseOverOutside(dropDown, () => dropDown.classList.remove('show'));


function hamburgerMenuDropDown() {
  if (hamburgerDropDown.style.display == "none") {
    hamburgerDropDown.style.display = "block";
    document.querySelector('.hamburger-menu').style.overflowY = 'scroll';
  } else {
    hamburgerDropDown.style.display = "none";
    document.querySelector('.hamburger-menu').style.overflowY = 'hidden';
  }
}
