document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the form using the correct IDs
  const btn = document.getElementById("button");
  const contactForm = document.getElementById("contact-form"); // Match the form ID

  console.log("Button:", btn);
  console.log("Form:", contactForm);

  if (!btn || !contactForm) {
    console.error("Button or form not found in the DOM.");
    return; // Stop execution if elements are not found
  }

  // Attach event listener to the form submit
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    btn.textContent = "Sending..."; // Update button text

    const serviceID = "service_c6vr8qm";
    const templateID = "template_jolnt7l";

    // Send the form data via EmailJS
    emailjs
      .sendForm(serviceID, templateID, contactForm)
      .then(() => {
        btn.textContent = "Send Email"; // Reset button text on success
        alert("Message sent successfully!");
      })
      .catch((err) => {
        btn.textContent = "Send Email"; // Reset button text on failure
        alert("Failed to send message: " + JSON.stringify(err));
      });
  });
});
