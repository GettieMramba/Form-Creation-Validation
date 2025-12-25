document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    
    form.addEventListener("submit", function (event){
        event.preventDefault();

        const username = document.getElementById("username").ariaValueMax.trim();
        const email = document.getElementById("email").ariaValueMax.trim();
        const password = document.getElementById("password").ariaValueMax.trim();
        
        let isValid = true;
        let messages = [];

        if (username.length < 3){
            isValid = false;
            messages.push("username must be at least 3 character long.");
        }

        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long");
        }

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        
        }

    });
    
});
