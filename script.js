
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


//HTML Elements
var landingPage = document.getElementById("landingPage");
var scorePage = document.getElementById("scorePage");
var enterInitial = document.getElementById("enterinitial");
var quizPage = document.getElementById("quizPage");


var startButton = document.getElementById("startButton");
var goBack = document.getElementById("go-back");
var clearScore = document.getElementById("clearscore");


var displayScore = document.getElementById("displayscore");
var initials = document.getElementById("initials");


// Variables
var timer = document.getElementById("timer");
var score = document.getElementById("score");

var questionDisplay = document.getElementById("questionDisplay");

var buttonList = document.getElementById("buttonList");

var abuttons = document.getElementById("abuttons");

//var saveInitials = localStorage.getItem("initials");

//var saveScore = localStorage.getItem("displayscore");

var answersList = document.getElementById("answersList");



var pageArray = [landingPage, quizPage, enterInitial, scorePage];



//Function to hide pages
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




//Add event listener to start button
document.getElementById("startButton").addEventListener("click", startGame)


var timeInterval

function startGame() {
  numberCorrect = 0;
  numberIncorrect = 0;
  secondsLeft = seconds;
  quiz = true;
  questionIndex = 0
  score = 0;
  //hide();
  quizPage.classList.remove('hide');
  nextQuestion();
  timer.textContent = (seconds);

  timeInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft = 0) {
      endGame();
      secondsLeft = seconds;
      
    }

  }, 1000);
}





var questionIndex = 0;




function nextQuestion() {

  if (questionIndex >= questions.length) {
    //renderLastInitials();//to do add get initial function save

    return;
  }

  document.getElementById("questionDisplay");
  questionDisplay.textContent = (questions[questionIndex].ques);
  console.log(questionDisplay);


  for (var i = 0; i < 4; i++) {
    let answer = questions[questionIndex].answrArray[i];
    document.getElementById("a" + (i + 1)).textContent = answer;

  }
  questionIndex++;
}


var score = 0;
document.getElementById("score").textContent = "Score:" + score;
console.log(score);

answersList.addEventListener("click", function (event) {

  event.preventDefault();
  if (event.target.matches("button")) {
    let button = event.target;
    let selectedAnswer = button.textContent;
    if (selectedAnswer == questions[questionIndex - 1].answer) {
      score++;
    }
    else {
      secondsLeft -= 10;
    }
    nextQuestion();
  }




})



//function renderLastInitials() {


  //var lastInitials = localStorage.getItem("initialSaver");

  //var lastScore = localStorage.getItem("score");


//}



//submit initials button
//var saveInitials = document.getElementById("initialSaver");

//var lastInitials = localStorage.getItem("initialSaver");

//var saveScore = document.getElementById("save");

//var lastScore = localStorage.getItem("score");

//initialSaver.addEventListener("click", function (event) {

  //save Initials and score to Local Storage
  //localStorage.setItem("initialSaver", initialSaver);

  //localStorage.setItem("score", score);




  //renderLastInitials();


//});




function endGame() {
  clearInterval(timeInterval);

  //add code to display initals page

} 
