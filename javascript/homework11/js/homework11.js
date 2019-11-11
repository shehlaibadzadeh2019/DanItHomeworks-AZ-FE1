document.addEventListener('keydown', function(e) {
    const btn = document.getElementsByClassName("btn");
    switch (e.code){
        case "Enter":
            btn[0].style.backgroundColor = "blue";
            break;
        case "KeyS":
            btn[1].style.backgroundColor = "blue";
            break;
        case "KeyE":
            btn[2].style.backgroundColor = "blue";
            break;
        case "KeyO":
            btn[3].style.backgroundColor = "blue";
            break;
        case "KeyN":
            btn[4].style.backgroundColor = "blue";
            break;
        case "KeyL":
            btn[5].style.backgroundColor = "blue";
            break;
        case "KeyZ":
            btn[6].style.backgroundColor = "blue";
            break;
    }
})

document.addEventListener('keyup', function(e) {
    const btn = document.getElementsByClassName("btn");
    switch (e.code){
        case "Enter":
            btn[0].style.backgroundColor = "#33333a";
            break;
        case "KeyS":
            btn[1].style.backgroundColor = "#33333a";
            break;
        case "KeyE":
            btn[2].style.backgroundColor = "#33333a";
            break;
        case "KeyO":
            btn[3].style.backgroundColor = "#33333a";
            break;
        case "KeyN":
            btn[4].style.backgroundColor = "#33333a";
            break;
        case "KeyL":
            btn[5].style.backgroundColor = "#33333a";
            break;
        case "KeyZ":
            btn[6].style.backgroundColor = "#33333a";
            break;
    }
})
