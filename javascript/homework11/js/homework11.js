let allButtons = document.querySelectorAll(".btn");

document.body.addEventListener('keydown', () => {
    allButtons.forEach((element)=> {
        element.style.backgroundColor = "black";
    })
});

document.body.addEventListener('keyup', (event) => {
    allButtons.forEach((element) => {
        if (element.innerText === event.key.toUpperCase()) {
            element.style.backgroundColor = "blue";
        }
    });
});
