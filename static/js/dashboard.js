// TIME , DATE , DAY
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM';
  function updateBackgroundColor() {
    const card = document.getElementById('color-changing-card');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      // Morning: Change the background color to a morning theme
      card.style.backgroundColor = '#FFECC8';
    } else if (currentHour >= 12 && currentHour < 18) {
      // Afternoon: Change the background color to an afternoon theme
      card.style.backgroundColor = '#A6C2EB';
    } else {
      // Evening/Night: Change the background color to an evening/night theme
      card.style.backgroundColor = '#2C3E50';
    }
  }

  // Call the function to set the initial background color
  updateBackgroundColor();

  // Update the background color every minute
  setInterval(updateBackgroundColor, 60000);

  function updateDateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours() % 12 || 12;
    const minutes = currentTime.getMinutes();
    const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';

    var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    document.getElementById('current-time').textContent = timeString;

    var dayElement = document.querySelector('.day');
    var dateElement = document.querySelector('.date');

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[currentTime.getDay()];
    var date = currentTime.getDate(); // Get the day of the month (e.g., 20)

    dayElement.textContent = day;
    dateElement.textContent = date + ', '; // Add a comma after the date
  }

  // Call the function to set the initial date and time
  updateDateTime();

  // Update the date and time every minute
  setInterval(updateDateTime, 60000);

  // JavaScript code to change the weather icon dynamically based on time
  var weatherIcon = document.getElementById('weather-icon');
  var hours = new Date().getHours();

  if (hours >= 6 && hours < 12) {
    // Morning condition
    weatherIcon.src = "../static/img/icons8-sun-48.png";
  } else if (hours >= 12 && hours < 18) {
    // Afternoon condition
    weatherIcon.src = "../static/img/istockphoto-1468115559-612x612-removebg-preview.png";
  } else {
    // Night condition
    weatherIcon.src = "../static/img/icons8-night-94.png";
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