// Example user data (this should come from a database in a real-world scenario)
const users = [
  { id: "112", password: "12345", role: "student" },
  { id: "112", password: "12345", role: "teacher" },
  { id: "112", password: "12345", role: "admin" },
];

// Handle login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const user = users.find(
    (u) => u.id === id && u.password === password && u.role === role
  );

  if (user) {
    alert("Login successful!");
    if (role === "student") {
      window.location.href = "student-dashboard.html";
    } else if (role === "teacher") {
      window.location.href = "teacher-dashboard.html";
    } else if (role === "admin") {
      window.location.href = "admin-dashboard.html";
    }
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
