function updateClock() {
  let now = new Date();

  // Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; 

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").textContent = timeString;

  // Date
  let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  let dateString = now.toLocaleDateString("en-US", options);
  document.getElementById("date").textContent = dateString;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); 
