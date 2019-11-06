let a = ['hello', 'world', 'Baku', 'IBA Tech Academy', '2019'],
    b = ['1', '2', '3', 'sea', 'user', 23];

function createList(array) {
    const newAraay = array.map((elem) =>`<li>${elem}</li>`),
        ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.innerHTML = newAraay.join('');

}

createList(a);
createList(b);