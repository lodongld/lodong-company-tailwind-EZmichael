const menuBtn = document.querySelector("#menuBtn");
const menuNav = document.querySelector("#menuNav");
const menuClose = document.querySelector("#menuClose");

menuBtn.addEventListener('click', function () {
    menuNav.classList.toggle('open');
    document.querySelector('body').classList.add('overflow-y-hidden');
});

menuClose.addEventListener('click', function () {
    menuNav.classList.toggle('open');
    document.querySelector('body').classList.remove('overflow-y-hidden');
});