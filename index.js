/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

//This code works in repl it
// function greet(timeString) {
//   let arr_of_hour = timeString.split(":")
//   let hour =  arr_of_hour.join("")
 
//   if (hour<1200){
//     return console.log("Good Morning")
//   }
//   if(hour>1700){
//     return console.log("Good Evening")
//   }
//   else {
//     return console.log("Good Afternoon")
//   }
// }

function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(the_string) {
  let element = document.getElementById("greeting");
  element.innerText = the_string;
}
