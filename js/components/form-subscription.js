document.getElementById("user-btn").onclick = function() {
    document.getElementById("user-input").focus();
    event.preventDefault();
}

document.getElementById("mail-btn").onclick = function() {
    document.getElementById("mail-input").focus();
    event.preventDefault();
}

const userBtn = document.getElementById("user-btn");
const userInput = document.getElementById("user-input");
const borderUser = document.querySelector('.main__subscription-wrapper-user');

userInput.addEventListener('focus', borderColorOn);
userInput.addEventListener('mouseenter', borderColorOn);

function borderColorOn() {
    borderUser.classList.add('main__subscription-wrapper-user--active');
    userInput.classList.add('main__subscription-input--active');
}

userInput.addEventListener('mouseleave', borderColorOut);
// userInput.addEventListener('unfocus', borderColorOut);

function borderColorOut() {
    borderUser.classList.add('main__subscription-wrapper-user');
    userInput.classList.add('main__subscription-input');
}

