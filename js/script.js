const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByTagName('nav')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const propertiesActive = document.getElementsByClassName('properties-active')[0];
const propertiesDropdown = document.getElementsByClassName('properties-dropdown')[0];
const dropMenu = document.getElementsByClassName('drop-menu')[0];

toggleButton.addEventListener('click', () => {
   // navbarLinks.classList.toggle('active');
   navbar.classList.toggle('active');
   // if drop-menu is open when user closes the nav menu:
   // if (dropMenu.classList.contains('active')) {
   //    dropMenu.classList.toggle('active');
   //    navbar.classList.toggle('active');
   //    navbar.classList.toggle('active');
   // }
})

// When the user clicks on the .properties-dropdown submenu,
propertiesDropdown.addEventListener('click', () => {
   // the .drop-down menu will open (add/toggle .active class to drop-menu),
   dropMenu.classList.toggle('active');
   // toggle .active class of navbar
   navbar.classList.toggle('active');
   // toggle .properties-active class to navbar
   navbar.classList.toggle('properties-active');
})
