const registerForm = document.querySelector('form');
const inputs = document.querySelectorAll('form input');
const error = document.querySelectorAll('p.error');
const iconError = document.querySelectorAll('.alert-icon');


const emailIsValid = email => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!registerForm.firstName.value) {
        error[0].style.display = "block";
        iconError[0].style.display = "block";
        inputs[0].style.borderColor = "hsl(0, 100%, 74%)";
    }
    if (!registerForm.lastName.value) {
        error[1].style.display = "block";
        iconError[1].style.display = "block";
        inputs[1].style.borderColor = "hsl(0, 100%, 74%)";
    }
    if (!registerForm.email.value) {
        error[2].style.display = "block";
        iconError[2].style.display = "block";
        inputs[2].style.borderColor = "hsl(0, 100%, 74%)";

    }
    if (emailIsValid(registerForm.email.value)) {
        error[2].textContent = "Looks like this is not an email";
        iconError[2].style.display = "block";
        inputs[2].style.borderColor = "hsl(0, 100%, 74%)";
    }
    if (!registerForm.password.value) {
        error[3].style.display = "block";
        iconError[3].style.display = "block";
        inputs[3].style.borderColor = "hsl(0, 100%, 74%)";
    }

    //    inputs.forEach(input => {
    //        console.log(e.target.value);
    //        if (!input.value) {
    //            
    //        } else {
    //            if (input.type == 'email') {
    //                if (emailIsValid(input.value)) {
    //                    error.classList.remove('show');
    //                } else {
    //                    error.classList.add('show');
    //                }
    //            }
    //        }
    //
    //    });
});
