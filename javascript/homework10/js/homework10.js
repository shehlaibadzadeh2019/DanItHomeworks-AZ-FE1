document.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon-password')) {
        const input = event.target.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';

        } else {
            input.type = 'password'
        }
    
    }
    if (event.target.classList.contains('btn')) {
        event.preventDefault();
        if (document.querySelectorAll('input')[0].value===document.querySelectorAll('input')[1].value) {
            alert('You are welcome');
        } else {
            document.getElementById('red-text').style.display = 'block'
        }
    }
});
