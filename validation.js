// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-left");

    form.addEventListener("submit", function (e) {
        // Get form fields
        const name = document.querySelector('input[name="Name"]').value.trim();
        const phone = document.querySelector('input[name="Mobile Number"]').value.trim();
        const email = document.querySelector('input[name="Email"]').value.trim();
        const message = document.querySelector('input[name="Message"]').value.trim();

        // Regular Expressions for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        // Validation
        if (name === "") {
            alert("Please enter your name.");
            e.preventDefault();
        } else if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            e.preventDefault();
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            e.preventDefault();
        } else if (message === "") {
            alert("Please enter a message.");
            e.preventDefault();
        }
    });
});