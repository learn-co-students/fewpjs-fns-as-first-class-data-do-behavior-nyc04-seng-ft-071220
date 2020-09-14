/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {

 let time_array = time.split(":")
 let total_mins = parseInt(time_array[0])*60 + parseInt(time_array[1])

if (total_mins < 720) {
  return "Good Morning";
}
else if (total_mins >= 720 && total_mins <= 1020) {
  return "Good Afternoon";
}
else {
  return "Good Evening"; 
}
}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}