


var countdown;
var seconds;





document.getElementById("startButton").addEventListener("click", startGame)
function startGame() {

  seconds = 120;
  document.getElementById("timer").textContent = (seconds); countdown = setInterval(function () {
    startButton.classList.add("hide")




    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds < 0) endGame();

  }, 900);
}




var questionContainer = document.getElementById("container3");






var questionContainer = document.getElementById('container3');


document.getElementById("buttons").addEventListener("click", function () {

  console.log("click");

  if (event.target.matches("buttons") && textContent === "Red");

  document.getElementById("#container3").classList.add("hide")



})



  function endGame() {
    clearInterval(countdown);


  }
