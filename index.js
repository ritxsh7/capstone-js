document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const hideLinks = document.querySelectorAll("#services, #booking, #logout");
  const loginLink = document.getElementById("login-link");
  const bookingForm = document.getElementById("booking-form");
  console.log(hideLinks);

  const check = localStorage.getItem("isLogin");
  if (check) {
    loginLink.style.display = "none";
    hideLinks.forEach((link) => (link.style.display = "inline"));
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      console.log(username, password);

      if (username === "admin" && password === "password") {
        localStorage.setItem("isLogin", true);
        window.location.href = "home.html";
        alert("Login successful");
      } else {
        alert("Invalid password");
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e.target);
      window.location.href = "success.html";
    });
  }
});

const handleLogout = () => {
  localStorage.removeItem("isLogin");
  window.location.href = "logout.html";
};
