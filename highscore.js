var scorePageScore = document.getElementById("getfinalscore");
var scorePageInitials = document.getElementById("getinitials");

var HighScoreDisplayArr=[];
var showScoresArray=[];
var highScoreKey = "highScoreKey";



var unOrderList = document.createElement("ul");
console.log(unOrderList);
var list = document.createElement("li");
console.log(list);
unOrderList.appendChild(list);
document.getElementById("scorelist").appendChild(list);












function renderLastInitials() {

  for (var i = 0; i < showScoresArray.length; i++) {

//and set the 'listItem.textContent' equal to 'todo'

    list.textContent=showScoresArray[i];
//APPEND the 'listItem' to the new 'todoList'

    
  //append to screen
 



  }

  showScoresArray = JSON.parse(localStorage.getItem(highScoreKey));
  console.log(showScoresArray);
  console.log(HighScoreDisplayArr);



}

renderLastInitials();





//document.getElementById("clearScore").addEventListener("click", clearScores)

//function clearScores(){



//}



