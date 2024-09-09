document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const hideLinks = document.querySelectorAll("#services, #booking, #logout");
  const loginLink = document.getElementById("login-link");
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
        alert("Login successful");
        localStorage.setItem("isLogin", true);
        window.location.href = "home.html";
      } else {
        alert("Invalid password");
      }
    });
  }
});

const handleLogout = () => {
  localStorage.removeItem("isLogin");
  window.location.href = "logout.html";
};
