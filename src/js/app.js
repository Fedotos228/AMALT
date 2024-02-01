import * as flsFunctions from './modules/functions.js'
import Stlightbox from 'stlightbox';

flsFunctions.isWebp();
flsFunctions.sliders();

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
    flsFunctions.burger(burger, menu, header)
}
if (header) {
    flsFunctions.fixedHeader(header)
}

if (document.querySelectorAll('[data-dropdown]')) {
    flsFunctions.dropdown()
}

new Swiper('.slider-gallery__body', {
    observer: true,
    observeParents: true,
    speed: 800,
    lazy: true,
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },
})

const foundersCard = document.querySelectorAll('.founders-card');

if (foundersCard) {
    foundersCard.forEach(item => {
        const dialog = item.querySelector(".founders-dialog");
        const showButton = item.querySelector('.founders-card__button');
        const closeButton = item.querySelector(".founders-dialog .close");

        showButton.addEventListener("click", () => {
            dialog.showModal();
        });

        closeButton.addEventListener("click", () => {
            dialog.close();
        });
    })
}


const lightbox = new Stlightbox({
    pagination: true,
    zoom: true,
});

const scrollBtn = document.querySelector('.scroll-top');

var body = document.body;
var html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

window.addEventListener('scroll', () => {
    if (window.scrollY > height / 4) {
        scrollBtn.classList.add('active')
    } else {
        scrollBtn.classList.remove('active')
    }
})

if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}