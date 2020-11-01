var questions = [
  question1 = {
    ques: "Where is Valentina from? ",
    answer: "0",
    answrArray: ["Seattle", "Chicago", "Denver", "New York"]

  },
  question2 = {
    ques: "What's Valentina's favorite animal?",
    answer: "1",
    answrArray: ["Cat", "Dog", "Turtle", "Fish"],
  },
  question3 = {
    ques: "What is Valentina's favorite color?",
    answer: "2",
    answrArray: ["Purple", "Red", "Black", "Yellow"]
  },
  question4 = {
    ques: "What is Valentina's favorite food?",
    answer: "3",
    answrArray: ["Carrots", "Cheese", "Steak", "Pizza"]
  }

]





//timer
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






var index;

for (var i = 0; i< questions.length; i++) {
  console.log(questions[i]);


  if (questions.answer === "true") {
    score++;
  }
}




var questionList= document.getElementById("questionL");
console.log(questionList);
document.getElementById("questionL").innerHTML= questions;
//questionList.textContent="";
//document.body.appendChild(questionList);












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
//}




//}




//}








function endGame() {
  clearInterval(countdown);


}














//Quiz Page 1 Content

// var answerButtons = document.createElement("BUTTON");
// buttonA.textContent = ("A");
// buttonB.textContent = ("B");
// buttonC.textContent = ("C");
// buttonD.textContent = ("D");


// buttonA.setAttribute("style", "background-color: purple;, color:white");
// buttonB.setAttribute("style", "background-color: purple;, color:white");
// buttonC.setAttribute("style", "background-color: purple;, color:white");
// buttonD.setAttribute("style", "background-color: purple;, color:white");






















//WHEN user clicks the start button 

//function startGame(){


    //starButton'.addEventListener("click", function);


//THEN a timer starts and questions begin
//setInterval set starting score
//start interval to begin the score count down

//WHEN I answer a question 
//THEN I am presented with another question
//WHEN I answer incorrectly 
//THEN time is subtracted from the clock
//WHEN all questions are answered or timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN i can save my initals and score.


//VAR pointer/index- Current position in the question array
//set interval
//clear interval
//currentScore/timeLeft
//VAR question -Array
// var question = [
  //render one question to the page at once
    //Question text
    //list of question answers-subarray
    //Correct Answer /index exact value etc,.



    //WHEN I answer a question
    //when user clicks an answer button
    //THEN i am presented with anotehr question
    //how to move from question to question--> var pointer/index of questions
    //need to increase pointer by one. clear out previous question 

    //div
    //nav bar
    //new div id question
    //present the question = create new HTML elements for my question content 
    //set the question divs innerhtml to =""; (clear out div)
    //append a h2 for the question title
    //append a new button for each choice -- var button = document.createElement('button'); button text.content = (questionText)
    //push or add questions in html and then hide and append with javascript .question display:none
    //.question.acive {display:block}
    //WHEN i answer  a question incorrectly   var clickbuttonContent=event.target.textContent; --> if value of correct button matches the correct answer event.target
    //values u can add and then remove
    //use data attribute button.setAttribute("data-answer", questionText);
    //event.getAttribute
    //the question is orrect when the clickButtonValue =question[0].answer
    //event.target.matches('button');
    //subtract time from clock and points from current score
    //WHEN all questions are answered 
    //THEN need a results div with initislas score and hidden by default last page
    //clear out current question or hide question element
    //can add hidden classes display none
    //Submit button
    //show results form for getting user initials click event for submition of scores
    //clear timeout
    //var interval
    //set interval 
    //type text id get value of initials input 
    //append new high score to list
    //create new list and get value of input append object with intials and score
    //store our list of highscores in local store
    //var high Score=[];
    //get the currently saved high scores out of local store localStore.get
    //localStore.getItem("highScore");
    // if(storedhighscores && highScores= )else highscores