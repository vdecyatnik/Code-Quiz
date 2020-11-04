


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


//Questions List
var questionContainer = document.getElementById("questionsList")
console.log(questionContainer);
document.getElementById("questionsList").textContent = questions[0].ques;




//buttonContainer
var buttonContainer = document.getElementById("questionsList")
console.log(buttonContainer);


// Answer Buttons
var answerButton = document.createElement('button');
console.log(answerButton);
answerButton.id = "a-buttons";
answerButton.textContent = questions[0].answrArray[0];
buttonContainer.append(answerButton);


var answerButton2 = document.createElement("button");
console.log(answerButton2);
answerButton2.id = "a-buttons";
answerButton2.textContent = questions[0].answrArray[1];
buttonContainer.append(answerButton2);


var answerButton3 = document.createElement("button");
console.log(answerButton3);
answerButton3.id = "a-buttons";
answerButton3.textContent = questions[0].answrArray[2];
buttonContainer.append(answerButton3);

var answerButton4 = document.createElement("button");
console.log(answerButton4);
answerButton4.id = "a-buttons";
answerButton4.textContent = questions[0].answrArray[3];
buttonContainer.append(answerButton4);




//Add eventlistener to Start Button
document.getElementById("startButton").addEventListener("click", startGame)

function startGame() {

  seconds = 120;
  document.getElementById("timer").textContent = (seconds); countdown = setInterval(function () {
    startButton.style.display = "none";
    questionsList.style.display = "block";







    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds < 0) endGame();

  }, 900);
}


function displayQuestion(event) {
  //add event listener to buttons
  questionContainer.addEventListener("click", displayQuestion)



  var questionIndex = 0;

  //loop through questions and display them



}






function endGame() {
  clearInterval(countdown);

}
