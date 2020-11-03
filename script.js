


var questions = [

  {

    ques: "where is Valentina from?",
    answer: "0",
    answrArray: ["Seattle", "New York", "Denver", "Texas"]
  },

  {

    ques: "What's Valentina's favorite animal?",
    answer: "0",
    answrArray: ["Dog", 'Cat', "Turtle", "Cow"]
  },

  {

    ques: "What's Valentina's favorite color?",
    answer: "1",
    answrArray: ["Red", "Black", "Yellow", "Green"]
  },

  {

    ques: "What's Valentina's favorite food?",
    answer: "3",
    answrArray: ["Cheese", "Milk", "Pizza", "Cookies"]
  }



]



for (var i = 0; i < questions.length; i++) {
  console.log(questions[i]);
}

var countdown;
var seconds;



var questionsContainer = document.getElementById("questionsList")
console.log(questionsContainer);
document.getElementById("questionsList").textContent= questions[0].ques.answrArray;


var answerButtons= document.getElementsByClassName("button.buttons");
document.getElementsByClassName("button.buttons").textContent=questions[0].answrArray;
console.log(answerButtons);




document.getElementById("startButton").addEventListener("click", startGame)




function startGame() {

  seconds = 120;
  document.getElementById("timer").textContent = (seconds); countdown = setInterval(function () {
    startButton.style.display="none";
    questionsList.style.display="block";
    //getQuestion();




    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds < 0) endGame();

  }, 900);
}



function getQuestion() {
  






}













function getAnswer() {







}

//var questionContainer = document.getElementById("container1");






////var questionContainer = document.getElementById("container1");


//document.getElementById("buttons").addEventListener("click", function (event) {

//console.log("click");


//if (event.target.matches("buttons") && answer === "correct");



//document.querySelector("#container1").style.display=("none");


//})














function endGame() {
  clearInterval(countdown);


}
