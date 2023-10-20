// TIME , DATE , DAY
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
var timeString = hours + ':' + minutes + ' ' + ampm;
document.getElementById('current-time').textContent = timeString;

// JavaScript code to update the day and date
var dayElement = document.querySelector('.day');
var dateElement = document.querySelector('.date');
var weatherIcon = document.getElementById('weather-icon');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = days[currentTime.getDay()];
var date = currentTime.getDate(); // Get the day of the month (e.g., 20)

dayElement.textContent = day;
dateElement.textContent = date + ', '; // Add a comma after the date

// JavaScript code to change the weather icon dynamically based on time
var weatherIcon = document.getElementById('weather-icon');
if (hours >= 6 && hours < 12) {
    // Morning condition
    weatherIcon.src = "../static/img/icons8-night-94.png";
} else if (hours >= 12 && hours < 18) {
    // Afternoon condition
    weatherIcon.src = "../static/img/istockphoto-1468115559-612x612-removebg-preview.png";
} else if (hours >= 18 && hours < 24) {
    // Evening condition
    weatherIcon.src = "../static/img/cloud-with-sun-3d-realistic-weather-icon-isolated-vector-illustration-realistic-3d-icon-design-mobile-app-website_558965-127-removebg-preview.png";
} else {
    // Night condition
    weatherIcon.src = "../static/img/icons8-sun-48.png";
}

// TOGGLE DEVICES

// Get all the toggle switches
var toggleSwitches = document.querySelectorAll('.toggle-switch');

// Add event listeners to each toggle switch
toggleSwitches.forEach(function (toggleSwitch) {
    toggleSwitch.addEventListener('change', function () {
        // Find the parent card of the clicked toggle switch
        var card = toggleSwitch.closest('.card');

        // Toggle the dark-mode class
        if (toggleSwitch.checked) {
            card.classList.add('dark-mode');
        } else {
            card.classList.remove('dark-mode');
        }
    });
});


// LOGOUT POPUP

function showConfirmDialog() {
    document.getElementById("confirmDialog").style.display = "flex";
  }

  function hideConfirmDialog() {
    document.getElementById("confirmDialog").style.display = "none";
  }

  function logout() {
    window.location.href = "login.html"; // Replace with the actual logout page URL
  }