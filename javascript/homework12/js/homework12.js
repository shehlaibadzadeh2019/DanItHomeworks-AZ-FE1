let images = document.querySelectorAll('.image-to-show'),
    index = 0;

let slide = (elem) => {
    document.querySelector('.active').classList.remove('active');
    elem[index].classList.add('active');
    index++;
    if (index >= elem.length) {index = 0;}
};

let interval = setInterval('slide(images)', 10000);

let btnStop = document.createElement('button'),
    btnContinue = document.createElement('button');

btnStop.innerHTML = "Stop";
btnContinue.innerHTML = "Resume";

document.body.appendChild(btnStop);
document.body.appendChild(btnContinue);

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});
btntinue.addEventListener('click', () => {
    interval = setInterval('slide(images)', 10000);
});
