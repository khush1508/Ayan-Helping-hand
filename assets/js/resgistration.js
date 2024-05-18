// Function to validate the registration form
function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let occupation = document.getElementById('occupation').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Simple validation example (you can enhance this further)
    if (firstName === '' || lastName === '' || email === '' || phone === '' || occupation === '' || username === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // You can add more complex validation logic for each field here

    return true;
}

// Attach form validation on submit
document.getElementById('registrationForm').onsubmit = function() {
    return validateForm();
};
