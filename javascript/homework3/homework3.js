let m, n;
do {
    m = Number(prompt("enter 1st number", m));
    n = Number(prompt("enter 2d number", n));
} while (isNaN(m) && isNaN(n));

let oper;
do {
    oper = prompt("please input valid operator: +, -, /, *");
} while (oper !== "+" && oper !== "-" && oper !== "/" && oper !== "*");

function math(m, n, oper) {
    switch (oper) {
        case "+":
            return m + n;
        case "-":
            return m - n;
        case "/":
            return m / n;
        case "*":
            return m * n;
    }
}

console.log(math(m, n, oper));
