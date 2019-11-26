let mobaleMenuIsOpen = false;
let openBtn = document.querySelector('.btn-menu');
const openMenu = document.querySelector('.navbar-toggler');
const closeMenu = document.querySelector('.submenu-btn');
const menu = document.querySelector('.submenu');

openMenu.addEventListener('click', ()=> {
    if (!mobaleMenuIsOpen) {
        mobaleMenuIsOpen = true;
        menu.className = 'submenu open';
        openBtn.classList = 'btn-menu close';
        closeMenu.classList = 'submenu-btn open'
    } else {
        mobaleMenuIsOpen = false;
        menu.className = 'submenu';
        openBtn.classList = 'btn-menu';
        closeMenu.classList = 'submenu-btn';
    }
});

