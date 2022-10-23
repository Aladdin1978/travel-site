//Messy way of doing 1)Selecting DOM element, 2) Event handling listener, 3) defining an execution function

// class MobileMenu {
//   constructor() {
//     document
//       .querySelector(".site-header__menu-icon")
//       .addEventListener("click", function () {
//         console.log("The top right dummy menu icon was clicked");
//       });
//   }
// }

class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon");
    this.menuContent = document.querySelector(".site-header__menu-content");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expanded");
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;
