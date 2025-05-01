// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop default form submission

  // Get Formspree endpoint (replace with your URL)
  const formspreeURL = 'https://formspree.io/f/mpwdqrwr';

  // Create FormData object from the form
  const formData = new FormData(this);

  // Send POST request to Formspree
  fetch(formspreeURL, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully! 🎉');
      this.reset(); // Clear the form
    } else {
      alert('Oops! Something went wrong.');
    }
  })
  .catch(error => {
    alert('Error: ' + error.message);
  });
});

// Update copyright year dynamically
document.getElementById('currentYear').textContent = new Date().getFullYear();