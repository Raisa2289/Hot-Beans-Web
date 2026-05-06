document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let valid = true;
  
    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let consent = document.getElementById("consent").checked;
  
    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
  
    // Validation
    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Enter a valid name";
      valid = false;
    }
  
    if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      valid = false;
    }
  
    if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message too short";
      valid = false;
    }
  
    if (!consent) {
      document.getElementById("consentError").textContent = "You must give consent";
      valid = false;
    }
  
    // Success
    if (valid) {
      document.getElementById("response").textContent =
        "✅ Message sent successfully! We will respond soon.";
  
      this.reset();
    }
  });