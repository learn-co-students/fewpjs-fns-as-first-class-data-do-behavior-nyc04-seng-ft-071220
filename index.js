/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let new_time = time.split(":")
  new_time = parseInt(new_time)
  if (new_time < 12){
    return "Good Morning"
  }
  if (new_time > 12 && new_time < 17){
    return "Good Afternoon"
  }
  if (new_time > 17){
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let content = document.getElementById("greeting")

  content.innerText = string

}