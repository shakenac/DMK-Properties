const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByTagName('nav')[0];
const propertiesDropdown = document.getElementsByClassName('properties-dropdown')[0];
const dropMenu = document.getElementsByClassName('drop-menu')[0];

toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active');
})
propertiesDropdown.addEventListener('click', () => {
   dropMenu.classList.toggle('active');
})


/*
   Properties drop down menu:
   1. display: none; regular dropdown menu to hide it
   2. JS: eventListener;
      2a. user clicks 'Properites' nav (.properties-dropdown)
      2b. drop menu w/ 'Dover' and 'Bronx' will appear underneath properties

      .drop-menu {
         display: flex;
         flex-direction: column;
      }
*/
