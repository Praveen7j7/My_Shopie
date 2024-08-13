
function decrementTime() {
  const timeElement = document.getElementById('time');
  let currentTime = parseInt(timeElement.textContent.split(' ')[0]);

  if (currentTime > 0) {
    currentTime--;
    timeElement.textContent = `${currentTime} mins`;
  } else {
    clearInterval(timer);
  }
}
function redirectToPage() {
  window.location.href = "men1.html"  // Redirects to men1.html
}

function redirectToPage1() {
  window.location.href = "women1.html";  // Redirects to women1.html
}

// Update the time every 60 seconds (60000 milliseconds)

const timer = setInterval(decrementTime, 60000);
