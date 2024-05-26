//the functionality of the slide bar
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

//the functionality of the slidebar

const initSlider = () => {
    const sliderButtons = document.querySelectorAll(".gallary__btn");
    const imageList = document.querySelector(".slider__image-list");
    const maxScroll = imageList.scrollWidth - imageList.clientWidth;

    sliderButtons.forEach( (btn) => {
        btn.addEventListener("click", () => {
            const direction = btn.classList.contains("prev-btn") ? -1:1;
            const scrollAmount = direction * imageList.clientWidth;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        } )
    })

    const handleSliderButtons = () => {
        if (imageList.scrollLeft <= 0) sliderButtons[0].classList.add('gallary__btn_inactive');
        else sliderButtons[0].classList.remove('gallary__btn_inactive')
        
        if (imageList.scrollLeft >= maxScroll) sliderButtons[1].classList.add('gallary__btn_inactive');
        else sliderButtons[1].classList.remove('gallary__btn_inactive')
    }

    imageList.addEventListener("scroll", handleSliderButtons)
}

window.addEventListener("load", initSlider);