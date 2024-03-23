// Get the contact form element
const contactForm = document.getElementById("contactForm");

// Add submit event listener to the form
contactForm.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get form data using FormData object
  const formData = new FormData(this);

  // You can send form data to a backend server using fetch or XMLHttpRequest
  // For this example, we'll log the form data to the console
  console.log({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // Optionally, you can add code here to send form data to a backend server

  // Clear the form fields after submission
  this.reset();

  // Display a success message (you can replace this with your own UI/UX)
  alert("Message sent successfully!");

  
});
 