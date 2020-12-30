let index = 0;
var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var startScreen = document.getElementById("startScreen");
var gameScreen = document.getElementById("gameScreen");
var questionTitle = document.getElementById("questionTitle");
var choicesEl = document.getElementById("choices")

// lets us click, start the game
startBtn.addEventListener("click", function(){
	startScreen.setAttribute("class", "hide");
	gameScreen.removeAttribute("class", "hide");

	displayQuestion();
	setTime();
})

var secondsLeft = 100;

// Created a timer
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " second(s) left";

    if(secondsLeft === 0) {
	  clearInterval(timerInterval);
	  alert("Pencils Down!")
    }

  }, 1000);
}

function displayQuestion () {
	var firstQuestion = questions[index]
	questionTitle.textContent = firstQuestion.title

	// loop for answer choices
	for (let i = 0; i < firstQuestion.choices.length; i++) {
		var button = document.createElement("button")
		button.textContent = firstQuestion.choices[i]
		button.addEventListener("click", function(){
			handleSelection(firstQuestion.choices[i]);
		});
		choices.appendChild(button)
	}
	
	
}

function handleSelection (response) {
	console.log(response)
	if (response === questions[index].answer) {
		alert("this is correct!")
		index++;
		questionTitle.textContent = questions[index].title
	}
	else{
		secondsLeft -= 10
		alert("this is wrong!")
	}
};