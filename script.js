


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



var questionContainer = document.getElementById("questionsList")
console.log(questionContainer);
document.getElementById("questionsList").textContent = questions[0].ques;


//var answerButtons= document.getElementById("buttons")
//document.getElementById("buttons").textContent=questions[0].answrArray;

var answerButton = document.createElement('button');
console.log(answerButton);
answerButton.id = "a-buttons";
answerButton.textContent = questions[0].answrArray[0];
answerButton.setAttribute = ("style", "background-color:purple; color:white;")


var answerButton2 = document.createElement("button");
console.log(answerButton2);
answerButton2.id = "a-buttons2";
answerButton2.textContent = questions[0].answrArray[1];


var answerButton3 = document.createElement("button");
console.log(answerButton3);
answerButton3.id = "a-buttons3";
answerButton3.textContent = questions[0].answrArray[2];

var answerButton4 = document.createElement("button");
console.log(answerButton4);
answerButton4.id = "a-buttons3";
answerButton4.textContent = questions[0].answrArray[3];


document.getElementById("startButton").addEventListener("click", startGame)





function startGame() {

  seconds = 120;
  document.getElementById("timer").textContent = (seconds); countdown = setInterval(function () {
    startButton.style.display = "none";

    questionsList.style.display = "block";
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
