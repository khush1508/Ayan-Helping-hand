// Function to validate the registration form
function validForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // You can add more complex validation logic for each field here

    return true;
}

// Attach form validation on submit
document.getElementById('SigninForm').onsubmit = function() {
    return validaForm();
};
