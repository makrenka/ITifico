const dropdownBtn = document.querySelector('.main__blog-navigation-sort-arrow');
const dropdownBtnAdaptive = document.querySelector('.main__blog-navigation-sort-arrow-adaptive');
const navigationList = document.querySelector('.main__blog-navigation-sort-list');
const navigationListAdaptive = document.querySelector('.main__blog-navigation-sort-list-adaptive');
const navigationSort = document.querySelector('.main__blog-navigation-sort');
const navigationSortAdaptive = document.querySelector('.main__blog-navigation-sort-adaptive');
const navigationWrapperSort = document.querySelector('.main__blog-navigation-sort-wrapper');
const navigationWrapperSortAdaptive = document.querySelector('.main__blog-navigation-sort-wrapper-adaptive');

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

function dropdownOpen(evt) {
    navigationList.classList.toggle('main__blog-navigation-sort-list--active');    
    dropdownBtn.classList.toggle('main__blog-navigation-sort-arrow--active');
    navigationSort.classList.remove('main__blog-navigation-sort--active');
    navigationSort.classList.toggle('main__blog-navigation-sort-dropdown--active');          
    navigationWrapperSort.classList.toggle('main__blog-navigation-sort-wrapper--active');
    evt.stopPropagation();
}

navigationSortAdaptive.addEventListener('click', dropdownAdaptiveOpen);

function dropdownAdaptiveOpen(evt) {
    navigationListAdaptive.classList.toggle('main__blog-navigation-sort-list-adaptive--active');
    dropdownBtnAdaptive.classList.toggle('main__blog-navigation-sort-arrow-adaptive--active');
    navigationSortAdaptive.classList.toggle('main__blog-navigation-sort-dropdown-adaptive--active'); 
    navigationWrapperSortAdaptive.classList.toggle('main__blog-navigation-sort-wrapper-adaptive--active');
    evt.stopPropagation();
}

function dropdownClose(evt) {
    const target = evt.target;
    const its_navigationList = target == navigationList || navigationList.contains(target);    
    const navigationList_is_active = navigationList.classList.contains("main__blog-navigation-sort-list--active");

    if (!its_navigationList && navigationList_is_active) {
        dropdownOpen();
    };
}

document.addEventListener('click', dropdownAdaptiveClose);

function dropdownAdaptiveClose(evt) {
    const target = evt.target;
    const its_navigationListAdaptive = target == navigationListAdaptive || navigationListAdaptive.contains(target);    
    const navigationListAdaptive_is_active = navigationListAdaptive.classList.contains("main__blog-navigation-sort-list-adaptive--active");

    if (!its_navigationListAdaptive && navigationListAdaptive_is_active) {
        dropdownAdaptiveOpen();
    };
}