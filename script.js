const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");

const nav_links = document.querySelectorAll(".nav__link")

const header = document.querySelector(".header");

menu_btn.onclick = function () {
    header.classList.add('header_mobile');
    document.body.classList.add('no-scroll');
}
close_btn.onclick = function () {
    header.classList.remove('header_mobile');
    document.body.classList.remove('no-scroll');
}
nav_links.forEach( (link)=> link.onclick = function () {
    header.classList.remove('header_mobile');
})