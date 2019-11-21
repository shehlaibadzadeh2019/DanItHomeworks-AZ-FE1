let password = document.querySelector('.password');
let confirmPass = document.querySelector('.confirmPassword');
let visible = document.querySelector('.fa-eye');
let hidden = document.querySelector('.fa-eye-slash');
let submit = document.querySelector('.btn')
let error = document.querySelector('span')

visible.addEventListener('click', () => {
    if (password.type == "text") {
        password.type = "password";
        visible.classList.add("fa-eye-slash");
        visible.classList.remove("fa-eye");
    } else {
        password.type = "text";
        visible.classList.remove("fa-eye-slash");
        visible.classList.add("fa-eye");
    }
})
hidden.addEventListener('click', () => {
    if (confirmPass.type == "text") {
        confirmPass.type = "password"
        hidden.classList.add("fa-eye-slash");
        hidden.classList.remove("fa-eye");
    } else {
        confirmPass.type = "text";
        hidden.classList.remove("fa-eye-slash");
        hidden.classList.add("fa-eye");
    }
})
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (password.value != confirmPass.value) {
        error.innerText = 'You need to enter the identical values';
    } else {
        error.innerText = '';
        alert('You are welcome');
    
    }
})
