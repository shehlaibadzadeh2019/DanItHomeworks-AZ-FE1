const body = document.querySelector('body');
const label = document.createElement('label');
const span = document.createElement('span');
const paragraph = document.createElement('p');
const paragraph2 = document.createElement('p');
const button = document.createElement('button');

paragraph.classList.add('price');
span.classList.add('span');
paragraph.innerText = 'Price: ';
label.appendChild(paragraph);
paragraph.appendChild(span);
button.innerText = '(X)';
paragraph.appendChild(button);
button.style.opacity = '0';
button.onclick = function () {
    span.innerText = '';
    input.value = '';
    button.style.opacity = '0';
};


const input = document.createElement('input');
body.appendChild(label);
body.appendChild(input);
paragraph2.innerText = 'Please enter correct price!';
body.appendChild(paragraph2);
paragraph2.style.opacity = '0';

input.addEventListener("focus", function () {
    input.style.border = '3px solid green';
    input.style.outlineStyle = 'none';
});

input.addEventListener("blur", function () {
    input.style.border = '1px solid gray';
    if (input.value && input.value > 0 && !isNaN(+input.value)) {
        span.innerHTML = '$' + input.value;
        input.style.color = 'green';
        paragraph2.style.opacity = '0';
        button.style.opacity = '1';

    } else {
        input.style.border = '3px solid red';
        paragraph2.style.opacity = '1';
    }

});