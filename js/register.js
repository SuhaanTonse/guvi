$(document).ready(function () {
  $("#signupForm").submit(function (e) {
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax({
      url: "/guvi/php/register.php",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      success: function (response) {
        if (response.trim() === "success") {
          alert("Signup successful! Please login.");
          window.location.href = "login.html";
        } else if (response.trim() === "" || response.trim() === "exists") {
          alert("Username already exists. Please choose a different username.");
        } else {
          alert("Error"); // Display the actual response for debugging
        }
      },
      error: function (xhr, status, error) {
        console.error(error);
        alert("Error: Signup failed.");
      },
    });
  });
});
