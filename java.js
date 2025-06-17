// Toggle mobile navigation
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill all fields.";
    formMsg.style.color = "red";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    formMsg.textContent = "Invalid email format.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Message sent successfully!";
  formMsg.style.color = "lime";
  this.reset();
});
