/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(Strtime))
}

/* End Given Code, don't edit above here...*/
function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}
/* get the document --> get element by its id in this cause is the greeting
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
 function greet(Strtime,Strmin){
   const hour = parseInt(Strtime, 10);
   if (hour < 12) return "Good Morning"
   if (hour > 18) return "Good Evening"
   return "Good Afternoon"
 }