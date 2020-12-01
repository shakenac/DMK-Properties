const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const propertiesActive = document.getElementsByClassName('properties-active')[0];
const propertiesDropdown = document.getElementsByClassName('properties-dropdown')[0];
const propertiesLi = document.getElementsByClassName('properties-li')[0];
const coverImg = document.getElementsByClassName('cover')[0];
const aboutSection = document.getElementsByClassName('about')[0];

function closeNav() {
   navbar.classList.remove('properties-active');
   navbar.classList.remove('active');
   propertiesLi.classList.remove('active');
}
function toggleSubMenu() {
   navbar.classList.toggle('properties-active');
   navbar.classList.toggle('active');
   propertiesLi.classList.toggle('active');
}


// Open & Close mobile navigation menu
toggleButton.addEventListener('click', () => {
   navbar.classList.toggle('active');
   // if properties submenu is active close it and the nav
   if (navbar.classList.contains('properties-active')) {
      closeNav();
   }
})

// Open & Close mobile properties submenu
propertiesDropdown.addEventListener('click', () => {
   toggleSubMenu();
})

// If the users click outside of the navbar while it's open (mobile)
   // Close mobile nav when Cover section is clicked
   coverImg.addEventListener('click', () => {
      // if navbar is active close it
      if (navbar.classList.contains('active')) {
         closeNav();
      }
      // if navbar and properties submenu is active close both:
      if (navbar.classList.contains('properties-active')) {
         closeNav();
      }
   })

   // Close mobile nav when About section is clicked
   aboutSection.addEventListener('click', () => {
      // if navbar is active close it
      if (navbar.classList.contains('active')) {
         closeNav();
      }
      // if navbar and properties submenu is active close both:
      if (navbar.classList.contains('properties-active')) {
         closeNav();
      }
   })
