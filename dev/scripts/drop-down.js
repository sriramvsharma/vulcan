// JavaScript Document

// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');

// Below code for preventing nav from animating on 
// browser re-size modified from code found at
// this stackoverflow question and answer:
//
// https://goo.gl/6s3pAZ


btnMenu.addEventListener('click', openMenu);

btnMenu.addEventListener('mousedown', function (e) {
    e.preventDefault();
});

function openMenu() {
    console.log('open')
    body.classList.toggle('show');
    nav.classList.add('activated');
}

// const mql = window.matchMedia('(min-width: 560px)');


// mql.addEventListener(removeTransition);


// function removeTransition(e) {

//     if (e.matches) {
//         body.classList.remove('show');
//         nav.classList.remove('activated');
//     }
// }



