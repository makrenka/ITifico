document.getElementById("user-btn").onclick = function() {
    document.getElementById("user-input").focus();
    event.preventDefault();
}

document.getElementById("mail-btn").onclick = function() {
    document.getElementById("mail-input").focus();
    event.preventDefault();
}

const userInput = document.getElementById("user-input");
const mailInput = document.getElementById("mail-input");
const borderUser = document.querySelector('.main__subscription-wrapper-user');
const borderMail = document.querySelector('.main__subscription-wrapper-mail');

userInput.addEventListener('focus', borderColorUserOn);
mailInput.addEventListener('focus', borderColorMailOn);

function borderColorUserOn() {
    borderUser.classList.add('main__subscription-wrapper-user--active');
    userInput.classList.add('main__subscription-input--active');    
}

function borderColorMailOn() {    
    borderMail.classList.add('main__subscription-wrapper-mail--active');
    mailInput.classList.add('main__subscription-input--active');
}

userInput.addEventListener('blur', borderColorUserOff);
mailInput.addEventListener('blur', borderColorMailOff);

function borderColorUserOff() {
    borderUser.classList.remove('main__subscription-wrapper-user--active');
    userInput.classList.remove('main__subscription-input--active');    
}

function borderColorMailOff() {    
    borderMail.classList.remove('main__subscription-wrapper-mail--active');
    mailInput.classList.remove('main__subscription-input--active');
}

