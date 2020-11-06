
var questions = [
  {
    ques: "where is Valentina from?",
    answer: "Seattle",
    answrArray: ["Seattle", "New York", "Denver", "Texas"]
  },

  {
    ques: "What's Valentina's favorite animal?",
    answer: "Dog",
    answrArray: ["Dog", 'Cat', "Turtle", "Cow"]
  },

  {
    ques: "What's Valentina's favorite color?",
    answer: "Black",
    answrArray: ["Red", "Black", "Yellow", "Green"]
  },

  {
    ques: "What's Valentina's favorite food?",
    answer: "Pizza",
    answrArray: ["Cheese", "Milk", "Pizza", "Cookies"]
  }

]



var landingPage = document.getElementById("landingPage");
var scorePage = document.getElementById("scorePage");
var enterInitial = document.getElementById("enter-initial");
var quizPage = document.getElementById("quizPage");


var startButton = document.getElementById("startButton");
var goBack = document.getElementById("go-back");
var clearScore = document.getElementById("clear-score");


var displayScore = document.getElementById("display-score");
var initials = document.getElementById("initials");



var timer = document.getElementById("timer");

var questionDisplay = document.getElementById("questionDisplay");

var buttonList = document.getElementById("buttonList");

var abuttons = document.getElementById("abuttons");

var answersList = document.getElementById("answersList");
var pageArray = [landingPage, quizPage, scorePage, enterInitial];

//startButton.addEventListener("click", presentNextQuestion)

//add eventlistener to answer button
//aButtons.addEventListener("click", //)
//create h2 for questionText

//create and append button for each answer

//question push into h2 and append to screen oop over answers and append button

//present next question

// set question div innerHTML to "" first.

//var button = createELement("button");
//button.textContent= answer

//var clickButtonContent= event.target.textContent to check answers

//var clickButtonContent= event.target("data-choice", questionText);

//The question is correct when clickButtonContent==questions[pointer].answer  compare clikc button value to first clicked question
//event.target.matches("button")
//if answer was correct don


//subtract time or points from current score 


function hide() {
  for (let i = 0; i < pageArray.length; i++) {
    console.log(pageArray[i]);
    if (!pageArray[i].classList.contains('hide')) {
      pageArray[i].classList.add('hide');
    }
  }
}


var seconds = 120;

timer.textContent = "Time: " + seconds;
console.log(seconds);

document.getElementById("startButton").addEventListener("click", startGame)


var timeInterval

function startGame() {
  numberCorrect = 0;
  numberIncorrect = 0;
  secondsLeft = seconds;
  quiz = true;
  questionIndex = 0
score = 0;
  hide();
  quizPage.classList.remove('hide');
nextQuestion();
  timer.textContent = (seconds);

  timeInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft < 0) {
    endGame();  
      secondsLeft = seconds;
    }

  }, 1000);
}





//for (var i = 0; i < questions[currentQuestion].ques; i++) {
  //console.log(questionDisplay);
//}
var questionIndex= 0;




function nextQuestion() {

  if(questionIndex>=questions.length){
    //to do add get initial function
    return;
  }
  
  document.getElementById("questionDisplay");
  questionDisplay.textContent = (questions[questionIndex].ques);
  console.log(questionDisplay);
  

  for (var i=0; i<4; i++){
    let answer=questions[questionIndex].answrArray[i];
    document.getElementById("a" + (i+1)).textContent = answer; 
    
  }
  questionIndex++;
}

var score = 0;

answersList.addEventListener("click", function(event){

event.preventDefault();
if(event.target.matches("button")) {
  let button = event.target;
  let selectedAnswer= button.textContent;
  if(selectedAnswer== questions[questionIndex-1].answer){
  score++;
  }
  else{
    secondsLeft-=10;
  }
  nextQuestion();
}




})




function endGame() {
  clearInterval(timeInterval);

} 
