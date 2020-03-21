//navigation
const NAV = document.querySelector('.navigation');

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const SECTIONS = document.querySelectorAll('body>section');
    const LINKS = document.querySelectorAll('.navigation a');

    SECTIONS.forEach((el) => {
        console.log(el.getAttribute('id'));
        el.getAttribute('id');

        if (el.offsetTop <= curPos+89 && (el.offsetTop + el.offsetHeight) > curPos+89) {
            LINKS.forEach((a) => {
                a.classList.remove('active-nav');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active-nav');
                }
            });
        }
    });
}


NAV.addEventListener('click', (event) =>{
    NAV.querySelectorAll('a').forEach(el => el.classList.remove('active-nav'));
    event.target.classList.add('active-nav');
});

//portfolio
const PORTFOLIO = document.querySelector('.layout-4-column');
const PORTFOLIO_TAGS = document.querySelector('.portfolio__tags');

PORTFOLIO_TAGS.addEventListener('click', (event) =>{
    PORTFOLIO_TAGS.querySelectorAll('span').forEach(el => el.classList.remove('tag_active'));
    if (event.target.classList.contains('tag')) {
        event.target.classList.add('tag_active');
    }
    
});

function changeOrder() {
    let imgs = document.querySelectorAll('.layout-4-column-item ');
    imgs[imgs.length-1].after(imgs[0]);
}

PORTFOLIO_TAGS.addEventListener('click', changeOrder);

PORTFOLIO.addEventListener('click', (event) =>{
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-item_active'));
    if (event.target.classList.contains('layout-4-column-item__img')) {
        event.target.classList.add('portfolio-item_active');
    } 
});



//slider
let items = document.querySelectorAll('.slider-item');
let currentItem = 0;
let isEnabled = true;
const sliderBG = document.querySelector('.slider');
const arrows = document.querySelectorAll('.arrow');

function changeArrows() {
    arrows.forEach((ar) => {
        if (ar.classList.contains('change-arrow')) {
            ar.classList.remove('change-arrow');
        } else {
            ar.classList.add('change-arrow');
        }
    });
}

function changeBg() {
    if (sliderBG.classList.contains('slider_changed')) {
        sliderBG.classList.remove('slider_changed');
    } else {
        sliderBG.classList.add('slider_changed');
    }
}

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active-slider', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active-slider');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.ico_right-arrow').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
        changeBg();
        changeArrows();
    }
});

document.querySelector('.ico_left-arrow').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
        changeBg();
        changeArrows();
    }
});


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


//modal//
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


