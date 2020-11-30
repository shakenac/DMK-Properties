const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByTagName('nav')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const propertiesActive = document.getElementsByClassName('properties-active')[0];
const propertiesDropdown = document.getElementsByClassName('properties-dropdown')[0];
const propertiesLi = document.getElementsByClassName('properties-li')[0];
const dropMenu = document.getElementsByClassName('drop-menu')[0];

toggleButton.addEventListener('click', () => {
   navbar.classList.toggle('active');
   if (navbar.classList.contains('properties-active')) {
      // remove or toggle off the:
      //navbar's properties-active
      navbar.classList.remove('properties-active');
      navbar.classList.remove('active');
      //drop-menu's active
      // dropMenu.classList.remove('active');
      propertiesLi.classList.remove('active');
   }
})

// When the user clicks on the .properties-dropdown submenu,
propertiesDropdown.addEventListener('click', () => {
   // the .drop-down menu will open (add/toggle .active class to drop-menu),
   // dropMenu.classList.toggle('active');
   propertiesLi.classList.toggle('active');
   // toggle .active class of navbar
   navbar.classList.toggle('active');
   // toggle .properties-active class to navbar
   navbar.classList.toggle('properties-active');
})

// If the users click outside of the navbar while it's open (mobile)
const coverImg = document.getElementsByClassName('cover')[0];
const aboutSection = document.getElementsByClassName('about')[0];

coverImg.addEventListener('click', () => {
   // if navbar is active and
   if (navbar.classList.contains('properties-active')) {
      // remove or toggle off the:
      //navbar's properties-active
      navbar.classList.remove('properties-active');
      navbar.classList.remove('active');
      //drop-menu's active
      // dropMenu.classList.remove('active');
      propertiesLi.classList.remove('active');
   }
   if (navbar.classList.contains('active')) {
      // remove or toggle off the:
      //navbar's properties-active
      navbar.classList.remove('properties-active');
      navbar.classList.remove('active');
      //drop-menu's active
      // dropMenu.classList.remove('active');
      propertiesLi.classList.remove('active');
   }
})

aboutSection.addEventListener('click', () => {
   // if navbar is active and
   if (navbar.classList.contains('properties-active')) {
      // remove or toggle off the:
      //navbar's properties-active
      navbar.classList.remove('properties-active');
      navbar.classList.remove('active');
      //drop-menu's active
      // dropMenu.classList.remove('active');
      propertiesLi.classList.remove('active');
   }
   if (navbar.classList.contains('active')) {
      // remove or toggle off the:
      //navbar's properties-active
      navbar.classList.remove('properties-active');
      navbar.classList.remove('active');
      //drop-menu's active
      // dropMenu.classList.remove('active');
      propertiesLi.classList.remove('active');
   }
})
