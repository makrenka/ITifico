const dropdownBtn = document.querySelector('.main__blog-navigation-sort-arrow');
const navigationList = document.querySelector('.main__blog-navigation-sort-list');
const navigationSort = document.querySelector('.main__blog-navigation-sort');
const navigationWrapperSort = document.querySelector('.main__blog-navigation-sort-wrapper');

navigationSort.addEventListener('mouseenter', dropdownHoverOn);
navigationSort.addEventListener('mouseleave', dropdownHoverOff);

function dropdownHoverOn() {
    navigationSort.classList.add('main__blog-navigation-sort--active');
}

function dropdownHoverOff() {
    navigationSort.classList.remove('main__blog-navigation-sort--active');
}

navigationSort.addEventListener('click', dropdownOpen);
document.addEventListener('click', dropdownClose);

function dropdownOpen(e) {
    navigationList.classList.toggle('main__blog-navigation-sort-list--active');
    dropdownBtn.classList.toggle('main__blog-navigation-sort-arrow--active');
    navigationSort.classList.remove('main__blog-navigation-sort--active');
    navigationSort.classList.toggle('main__blog-navigation-sort-dropdown--active');
    navigationWrapperSort.classList.toggle('main__blog-navigation-sort-wrapper--active');
    e.stopPropagation();
}

function dropdownClose(event) {
    const target = event.target;
    const its_navigationList = target == navigationList || navigationList.contains(target);    
    const navigationList_is_active = navigationList.classList.contains("main__blog-navigation-sort-list--active");

    if (!its_navigationList && navigationList_is_active) {
        dropdownOpen();
    };
}