const NAV = document.querySelector('.navigation');
const PORTFOLIO = document.querySelector('.layout-4-column');
const PORTFOLIO_TAGS = document.querySelector('.portfolio__tags');

NAV.addEventListener('click', (event) =>{
    NAV.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

PORTFOLIO_TAGS.addEventListener('click', (event) =>{
    PORTFOLIO_TAGS.querySelectorAll('span').forEach(el => el.classList.remove('portfolio__tags_active'));
    event.target.classList.add('portfolio__tags_active');
});
function mixImg() {
    let mixRand=(a,b)=>Math.random()-0.5;
    let arrImg = Array.from(document.querySelectorAll('.layout-4-column-item__img'));
    let arrImgSrcMix = arrImg.map(e=>e.src).sort(mixRand);
    arrImg.map((e, i) => e.src = arrImgSrcMix[i]);
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-item_active'));
}

PORTFOLIO_TAGS.addEventListener('click', mixImg);

PORTFOLIO.addEventListener('click', (event) =>{
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-item_active'));
    event.target.classList.add('portfolio-item_active');
});



//slider
let slides = document.querySelectorAll('.slider-item');
let slider = [];
for (let i=0; i<slides.length; i++) {
    slider[i] = slides[i].innerHTML;
    slides[i].remove();
}

let step = 0;
let offset = 0;

function draw() {
    let slide = document.createElement('li');
    slide.innerHTML = slider[step];
    slide.classList.add('slider-item');
    
    document.querySelector('.slider__list').appendChild(slide);
    if(step + 1 == slider.length){
        step = 0;
    } else {
        step++;
    }
    
    offset = 1;
}
draw();
draw();

const sliderBG = document.querySelector('.slider');


function left() {
    let slides2 = document.querySelectorAll('.slider-item');
    slides2[0].style.left = -offset*1020 + 'px';
    
    setTimeout(function(){
        slides2[0].remove();
        draw();
        changeBg();
        phoneOff();
    },1000);
}

function right() {
    let slides2 = document.querySelectorAll('.slider-item');
    slides2[0].style.left = offset*1020 + 'px';
    
    setTimeout(function(){
        slides2[0].remove();
        draw();
        changeBg();
        phoneOff();
    },1000);
}

function changeBg() {
    if (sliderBG.classList.contains('slider_changed')) {
        sliderBG.classList.remove('slider_changed');
    } else {
        sliderBG.classList.add('slider_changed');
    }
}
const LEFT = document.querySelector('.ico_left-arrow');
const RIGHT = document.querySelector('.ico_right-arrow');


LEFT.addEventListener('click', left);
RIGHT.addEventListener('click', right);

//phone-images
function phoneOff() {
const SLIDER_IMAGE_VERT = document.querySelector('.slider__image-vertical');
const DISPLAY_VERT = document.querySelector('.phone-display-vertical');
const SLIDER_IMAGE_HOR = document.querySelector('.slider__image-horizontal');
const DISPLAY_HOR = document.querySelector('.phone-display-horizontal');


function displayPhoneVert () {
    if (DISPLAY_VERT.style.display == 'none') {
        DISPLAY_VERT.style.display = '';
    } else {
        DISPLAY_VERT.style.display = 'none';
    }
}

function displayPhoneHor () {
    if (DISPLAY_HOR.style.display == 'none') {
        DISPLAY_HOR.style.display = '';
    } else {
        DISPLAY_HOR.style.display = 'none';
    }
}

    SLIDER_IMAGE_VERT.addEventListener('click', (event) =>{
        SLIDER_IMAGE_VERT.querySelectorAll('img').forEach(el => displayPhoneVert());
    });
    
    SLIDER_IMAGE_HOR.addEventListener('click', (event) =>{
        SLIDER_IMAGE_HOR.querySelectorAll('img').forEach(el => displayPhoneHor());
    });
}

phoneOff();



let subject = document.querySelector('#subject');
let description = document.querySelector('#description');

let modalSubject = document.querySelector('.modal__subject');
let modalDescription = document.querySelector('.modal__description');

function pasteForm(){
    if (subject.value == '') {
        modalSubject.innerHTML = 'Without subject';
    } else {
        modalSubject.innerHTML = 'Subject: '+ subject.value;
    }
    
    if (description.value == '') {
        modalDescription.innerHTML = 'Without description';
    } else {
        modalDescription.innerHTML = 'Description: ' + description.value;
    }
}

const EMAIL = document.querySelector('#email');
const NAME = document.querySelector('#name');
function validateEmail() {
    return EMAIL.checkValidity();
}
function validateName() {
    return NAME.checkValidity();
}
const MODAL = document.querySelector('.modal');
const FADE = document.querySelector('.fade');

function modalShow() {
    MODAL.classList.add('modal-show');
    FADE.classList.add('modal-show');

}

const SUBMIT = document.querySelector('#submit');

SUBMIT.addEventListener('click', event => {
    event.preventDefault();
    if (validateEmail() && validateName()) {
        pasteForm();
        modalShow();
    } else {
        alert('Enter the required data');
    }
});
const FORM = document.querySelector('form');
const MODAL_BTN = document.querySelector('.modal__button');
MODAL_BTN.addEventListener('click', event => {
    MODAL.classList.remove('modal-show');
    FADE.classList.remove('modal-show');
    document.querySelectorAll('.form-item').forEach(el => el.value = '');
})


