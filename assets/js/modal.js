var openNewTabButton = document.getElementById("openNewTabButton");

// Add event listener to the button
openNewTabButton.addEventListener("click", function() {
  // Define the URL of the image you want to open in a new tab
  var imageUrl = "assets/img/resume.jpg";

  // Open the image in a new tab
  window.open(imageUrl, "_blank");
});