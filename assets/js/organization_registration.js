// Function to validate the organization registration form
function validateOrganizationForm() {
    let orgName = document.getElementById('orgName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let address = document.getElementById('address').value;
    let cause = document.getElementById('cause').value;
    let instagram = document.getElementById('instagram').value;
    let facebook = document.getElementById('facebook').value;
    let twitter = document.getElementById('twitter').value;

    // Simple validation example (you can enhance this further)
    if (orgName === '' || phone === '' || email === '' || password === '' || address === '' || cause === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // You can add more complex validation logic for each field here

    return true;
}

// Attach form validation on submit
document.getElementById('organizationRegistrationForm').onsubmit = function() {
    return validateOrganizationForm();
};
