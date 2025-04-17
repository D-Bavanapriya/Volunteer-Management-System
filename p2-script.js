document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way

        let isValid = true;

        // Validate phone number (10 digits)
        const phoneValue = phoneInput.value.trim();
        if (phoneValue.length !== 10 || isNaN(phoneValue)) {
            phoneError.textContent = 'Phone number must be exactly 10 digits';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        // Validate email (must contain @)
        const emailValue = emailInput.value.trim();
        if (!emailValue.includes('@')) {
            emailError.textContent = 'Email must contain @ symbol';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // If everything is valid, show the success alert
        if (isValid) {
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset(); // Reset form fields
        }
    });
});
