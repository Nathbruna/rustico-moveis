const btnMenu =document.querySelector('.btn-menu');
const menu =document.querySelector('.menu');


function menuMobile() {
    menu.classList.toggle('menu-open');
}

function fecharMenu() {
    menu.classList.remove('menu-open');
}

btnMenu.addEventListener('click', menuMobile);
menu.addEventListener('click', fecharMenu);