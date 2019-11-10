let button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'change thema';
button.style.cssText =
  `position: absolute;
top: 0px;
left: 0;
font-size: 15px;
border-radius: 5px;
color: green;
background: #defdde;`;

let body = document.getElementsByTagName('body')[0];

let navigation = document.getElementsByClassName('main')[0];
let headers = document.getElementsByClassName('header')[0];
let cont = document.getElementsByClassName('content')[0];
let btn = document.getElementsByClassName('btn')[0];
let footer = document.getElementsByClassName('footer')[0];
console.log('navigation', navigation)

function newColors() {
  body.style.backgroundColor = 'black';
  navigation.style.backgroundColor = '#ba7a6c';
  headers.style.backgroundColor = 'lightgray';
  cont.style.backgroundColor = 'gray';
  btn.style.backgroundColor = 'gray';
  footer.style.backgroundColor = 'lightgray'
  button.className = 'yes'
}

function oldColors() {
  body.style.backgroundColor = '';
  navigation.style.backgroundColor = '';
  headers.style.backgroundColor = '';
  cont.style.backgroundColor = '';
  btn.style.backgroundColor = '';
  footer.style.backgroundColor = ''
  button.className = ''
}

button.onclick = (() => {
  if (!button.className) {
    localStorage.setItem('newThema', 'yes')
    newColors()
  } else {
    oldColors()
    localStorage.setItem('newThema', 'no')
  }
})

if(localStorage.getItem('newThema') === 'yes'){
  newColors()
}
