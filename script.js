let index = 0;
var timer = document.querySelector("#timer")

startBtn.addEventListener("click", startGame)

function startGame() {
	gameScreen.classList.remove("hide")
	startScreen.classList.add("hide")

	setTime()
	displayQuestion()
}


var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
	  clearInterval(timerInterval);
	  alert("Pencils Down!")
    }

  }, 1000);
}




function displayQuestion() {
	const question = questions[index]

	questionTitle.textContent = question.title

	// for (var i = 0; i < question.choices.length; i++) {
	// 	const button = document.createElement('button') // <button></button>
	// 	button.textContent = question.choices[i]
	// 	choices.appendChild(button)
	// }

	choices.innerHTML = ""
	for (const value of question.choices) {
		const button = document.createElement('button') // <button></button>
		button.textContent = value
		button.addEventListener('click', handleSelection)

		choices.appendChild(button)
	}

	// question.choices.forEach((value) => choices.appendChild(ChoiceBtn(value)))
}

// function ChoiceBtn(val) {
// 	const button = document.createElement('button') // <button></button>
// 	button.textContent = val
// 	return button;
// }

function handleSelection() {
	const choice = this.textContent

	if (choice === questions[index].answer) {
		console.log("true")
	} else {
		console.log("false")
	}
	index++

	displayQuestion()
}
