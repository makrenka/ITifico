let sliderList = document.querySelector('.main__articles-slider-list'),
    sliderWrapperTrack = document.querySelector('.main__articles-slider-wrapper-track'),
    sliderTrack = document.querySelector('.main__articles-slider-track'),
    slides = document.querySelectorAll('.main__articles-slide'),
    arrows = document.querySelector('main__slider-arrow'),
    prev = arrows.children[0],
    next = arrows.children[1],
    slideWidth = slides[0].offsetWidth,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posFinal = 0,
    posThreshold = slideWidth * .35,
    trfRegExp = /[-0-9.]+(?=px)/,

    slide = function () {
        sliderTrack.style.transition = 'transform .5s';
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
        prev.classList.toggle('disabled', slideIndex === 0);
        next.classList.toggle('disabled', slideIndex === --slides.length);
    };

getEvent = function () {
    return Event.type.search('touch') !== -1 ? Event.touches[0] : Event;
}

swipeStart = function () {
    let evt = getEvent();
    posInit = posX1 = evt.clientX;
    sliderTrack.style.transition = '';
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
}

swipeAction = function () {
    let evt = getEvent(),
        style = sliderTrack.style.transform,
        transform = +style.math(trfRegExp)[0];
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`
}