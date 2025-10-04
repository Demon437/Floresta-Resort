(function () {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    document.getElementById('request').addEventListener('submit', function (event) {
        event.preventDefault();

        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;

        // Get form data
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            to_email: 'officialfloresta@gmail.com'
        };

        // Send the email using EmailJS
        emailjs.send('default_service', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function () {
                // Show success message
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';

                // Reset form
                document.getElementById('request').reset();
            }, function (error) {
                // Show error message
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('success-message').style.display = 'none';
                console.error('Error:', error);
            })
            .finally(function () {
                // Reset button state
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
    });
})();