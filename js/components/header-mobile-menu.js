const header = document.querySelector('.header');
const hamburgerButton = document.querySelector('.header__mobile-menu-hamburger-img');
const dropdownMenu = document.querySelector('.header__mobile-menu-dropdown');
const drawerButton = document.querySelector('.header__mobile-menu-drawer-img');
const overlay = document.querySelector('.overlay');

hamburgerButton.addEventListener('click', openMenu);
drawerButton.addEventListener('click', openMenu);
overlay.addEventListener('click', openMenu);

function openMenu () {
    dropdownMenu.classList.toggle('header__mobile-menu-dropdown--active');
    header.classList.toggle('header--active');
    hamburgerButton.classList.toggle('header__mobile-menu-hamburger-img--active');
    drawerButton.classList.toggle('header__mobile-menu-drawer-img--active');
    overlay.classList.toggle('overlay--active');
}