const dropdownButton = document.querySelector('.main__blog-navigation-sort-wrapper-svg');
const navigationList = document.querySelector('.main__blog-navigation-sort-list');
const navigationSort = document.querySelector('.main__blog-navigation-sort');
const navigationWrapperSort = document.querySelector('.main__blog-navigation-sort-wrapper');

dropdownButton.addEventListener('click', dropdownOpen);
navigationSort.addEventListener('mouseenter', dropdownHoverOn);
navigationSort.addEventListener('mouseleave', dropdownHoverOff);
document.addEventListener('click', dropdownClose);

function dropdownHoverOn() {
    navigationSort.classList.add('main__blog-navigation-sort--active');
}

function dropdownHoverOff() {
    navigationSort.classList.remove('main__blog-navigation-sort--active');
}

function dropdownOpen() {
    navigationList.classList.toggle('main__blog-navigation-sort-list--active');
    navigationSort.classList.remove('main__blog-navigation-sort--active');
    navigationSort.classList.toggle('main__blog-navigation-sort-dropdown--active');
    navigationWrapperSort.classList.toggle('main__blog-navigation-sort-wrapper--active');
}

function dropdownClose(event) {
    if (event.target.className != 'main__blog-navigation-sort') {
        navigationList.classList.remove('main__blog-navigation-sort-list--active');
    };
}