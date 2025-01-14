document.addEventListener("DOMContentLoaded", () => {
    const joinForm = document.getElementById("joinForm");
    const formSuccess = document.getElementById("formSuccess");
    const formContainer = document.getElementById("formContainer");
    const headerSection = document.getElementById("headerSection");

    joinForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page refresh

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const interest = document.getElementById("interest").value.trim();

        // Validate input fields
        if (!name || !email || !phone || !interest) {
            alert("Please fill out all fields.");
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate phone number (must be 10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (10 digits).");
            return;
        }

        // Hide form and header section, show success message
        formContainer.classList.add("hide");
        headerSection.classList.add("hide");

        // Show success message and hide form
        joinForm.classList.add("hide");
        formSuccess.innerHTML = `
            <p>Thank you for joining Shutter Squad! We will contact you soon.</p>
            <a href="index.html" class="primary-button">Go to Home</a>
        `;
        formSuccess.classList.remove("hide");
    });
});
