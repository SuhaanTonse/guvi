$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax({
      url: "/guvi/php/login.php",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      success: function (response) {
        if (response.trim() === "success") {
          alert("Login successful!");
          window.location.href = "profile.html";
        } else {
          alert("Invalid username or password.");
        }
      },
      error: function (xhr, status, error) {
        console.error(error);
        alert("Error: Login failed.");
      },
    });
  });
});
