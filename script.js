const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");

const nav_links = document.querySelectorAll(".nav__link")

const header = document.querySelector(".header");

function menuOpen(){
    header.classList.add('header_mobile');
    document.body.classList.add('no-scroll');
}
function menuClose(){
    header.classList.remove('header_mobile');
    document.body.classList.remove('no-scroll');
}

menu_btn.onclick = menuOpen;
close_btn.onclick = menuClose;
nav_links.forEach( (link)=> link.onclick = menuClose);