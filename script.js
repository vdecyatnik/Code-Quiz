


var countdown;
var seconds;





document.getElementById("startButton").addEventListener("click", startGame)
function startGame() {

  seconds = 120;
  document.getElementById("timer").textContent = (seconds); countdown = setInterval(function () {
 startButton.classList.add("hidden")




    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds < 0) endGame();

  }, 900);
}




var questionContainer= document.getElementById("container3");





var questionContainer= document.getElementById('container3');


document.getElementById("buttons").addEventListener("click", function(){


  if(event.target.matches("button") && textContent.matches==="true");

    container3.setAttribute("class", "hidden");
  });





  function endGame() {
    clearInterval(countdown);
  
  
  }




















//document.getElementByID("buttons").addEventListener("click", buttons)

//function getQuestion(event) {
//if user clicks on the textContent that matches correct answer in array then add a point and move to next question.
//if (event.target.matches("button")) {
//var button = event.target.index
//if (index==="true") {
//questionIndex++;
//}
//else{
//seconds--;
