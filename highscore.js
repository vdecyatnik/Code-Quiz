











var scorePageScore = document.getElementById("getfinalscore");
var scorePageInitials = document.getElementById("getinitials");

var HighScoreDisplayArr = [];
var showScoresArray = [];
var highScoreKey = "highScoreKey";



var unOrderList = document.createElement("ul");
console.log(unOrderList);
var list = document.createElement("li");
unOrderList.appendChild(list);
document.getElementById("scorelist").appendChild(list);



function renderLastInitials() {

  for (var i = 0; i < showScoresArray.length; i++) {

    //list.textContent=showScoresArray[i];
    console.log(showScoresArray);



    //append to screen
  }


  showScoresArray = JSON.parse(localStorage.getItem(highScoreKey));
  console.log(showScoresArray);




}

renderLastInitials();






//document.getElementById("clearScore").addEventListener("click", clearScores)

//function clearScores(){



//}



