let num;
do {
    num = Number(prompt("enter any number", num));
} while (num % 1 !== 0 || isNaN(num));

if (num >= 5) {
    for (let i = 5; i <= num; i = i + 5) {
        console.log(i)
    }
} else {
    console.log("Sorry, no number")
}
