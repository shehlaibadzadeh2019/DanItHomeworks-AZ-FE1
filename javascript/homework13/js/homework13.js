let bColor = document.querySelector('.main');
let header = document.querySelector('.header');
let changeThemeBtn = document.querySelector('.btn');
let theme = window.localStorage.getItem('theme');

function first() {
    header.style.backgroundColor = "lightgray"
    bColor.style.backgroundColor = "lightblue"
    changeThemeBtn.className = "firstt"
}

function second() {
  header.style.backgroundColor = "gray"
    bColor.style.backgroundColor = "grey"
    changeThemeBtn.className = ""
}

changeThemeBtn.addEventListener('click',changeTheme);

function changeTheme(){
    if (!changeThemeBtn.className) {
        localStorage.setItem('theme', 'firstt') 
        first();
    } else {
        second();
        localStorage.setItem('theme', 'light')
        
    }
}


if (localStorage.getItem('theme') === 'dark') {
    dark()
}
