// Function to display the pop-up
function displayPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }

  // Function to close the pop-up
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  // Function to skip the ad
  function skipAd() {
    closePopup();
  }

  // Display the pop-up after a delay (e.g., 5 seconds)
  setTimeout(displayPopup, 5000);