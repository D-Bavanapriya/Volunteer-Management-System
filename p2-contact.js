document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Reset error messages
        emailError.textContent = '';
        phoneError.textContent = '';

        // Email validation
        const emailValue = emailField.value;
        if (!emailValue.includes('@')) {
            emailError.textContent = 'Please enter a valid email address containing "@" symbol.';
            valid = false;
        }

        // Phone number validation
        const phoneValue = phoneField.value;
        if (phoneValue.length !== 10 || isNaN(phoneValue)) {
            phoneError.textContent = 'Phone number must be exactly 10 digits.';
            valid = false;
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        }
    });
});
