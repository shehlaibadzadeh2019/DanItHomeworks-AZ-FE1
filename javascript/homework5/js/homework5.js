function createNewUser() {
    let name = prompt("What is your first name?");
    let surname = prompt("what is your last name?");
    let birthday = prompt("please input your b-day in the following format: dd.mm.yyyy");
    let splitDate = birthday.split(".");
    let birthdayDate = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);

    return {
        firstName: name,
        lastName: surname,
        birthday: birthdayDate,
        getLogin: function () {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        },
        getAge: function () {
            let today = new Date();
            let age = today.getFullYear() - this.birthday.getFullYear();
            let m = today.getMonth() - this.birthday.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < this.birthday.getDate())) {
                age--;
            }
            return age;
        },
        getPassword() {
            return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.toLocaleString("uk", {
                year: "numeric"
            });
        }
    };
}

let newUser = createNewUser();

console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());
