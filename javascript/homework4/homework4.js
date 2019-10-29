function createNewUser() {
    let name = prompt("What is your first name?");
    let surname = prompt("what is your last name?");
    return {
        firstName: name,
        lastName: surname,
        getLogin() {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        }
    };
}

let newUser = createNewUser();

console.log(newUser.getLogin());
