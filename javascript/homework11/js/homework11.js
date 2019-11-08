document.addEventListener('keydown', function(e) {
    const btn = document.getElementsByClassName("btn");
    if (e.code == "Enter") {
        btn[0].style.backgroundColor = "blue"
    }
    if (e.code == "KeyS") {
        btn[1].style.backgroundColor = "blue"
    }
    if (e.code == "KeyE") {
        btn[2].style.backgroundColor = "blue"
    }
    if (e.code == "KeyO") {
        btn[3].style.backgroundColor = "blue"
    }
    if (e.code == "KeyN") {
        btn[4].style.backgroundColor = "blue"
    }
    if (e.code == "KeyL") {
        btn[5].style.backgroundColor = "blue"
    }
    if (e.code == "KeyZ") {
        btn[6].style.backgroundColor = "blue"
    }
})

document.addEventListener('keyup', function(e) {
    const btn = document.getElementsByClassName("btn");
    if (e.code == "Enter") {
        btn[0].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyS") {
        btn[1].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyE") {
        btn[2].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyO") {
        btn[3].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyN") {
        btn[4].style.backgroundColor = "#33333a"
    }
    if (e.code == "KeyL") {
        btn[5].style.backgroundColor = "#33333a"
    }

    if (e.code == "KeyZ") {
        btn[6].style.backgroundColor = "#33333a"
    }
})
