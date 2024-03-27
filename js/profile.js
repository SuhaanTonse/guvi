$(document).ready(function () {
  $("#profileForm").submit(function (e) {
    e.preventDefault();
    var age = $("#age").val();
    var dob = $("#dob").val();
    var contact = $("#contact").val();

    $.ajax({
      url: "/guvi/php/profile.php",
      method: "POST",
      data: {
        age: age,
        dob: dob,
        contact: contact,
      },
      success: function (response) {
        if (response.trim() === "success") {
          alert("Profile saved successfully!");
        } else if (response.trim() === "duplicate_username") {
          alert("Profile Details Already Saved");
        } else {
          alert("Error: Profile not saved.");
        }
      },
      error: function (xhr, status, error) {
        console.error("AJAX Error:", error);
        alert("Error: Profile not saved.");
      },
    });
  });
});
