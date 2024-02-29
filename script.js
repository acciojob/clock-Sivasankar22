//your JS code here. If required.
// Function to update the timer display
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const currentDate = new Date();

    // Format the date and time
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Update the timer text content
    timerElement.textContent = `${formattedDate} ${formattedTime}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);
