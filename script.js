//variable of questions that the quiz will choose
var questions = [
    { question: "When adding a hyperlink, which tag is needed?", 
    options: ["<b>", "<h>", "<a>", "<p>"], 
    answerIndex: 2 },
    { question: "Arrays in JavaScript are used to add:", 
    options: ["numbers & strings", "different arrays", "booleans", "all of the above"], 
    answerIndex: 3 },
    { question: "Which coding language contains the bulk of your written on-screen text", 
    options: ["javascript", "html", "css", "jquery"], 
    answerIndex: 1 },
];


//timer variable
var time;

//timer duration
var timerSeconds = 60; 

//the timer variable  itself
var timer = document.getElementById("time");

//users quiz score
var score = document.getElementById("score-display");

//question prompt variable
var qprompt = document.getElementById("question-prompt");

//submit question button variable 
var sbmtbtn = document.getElementById("submit-btn");

//next question button variable
var nxtbtn = document.getElementById("next-btn");

//quiz start button variable
var strtbtn = document.getElementById("start-btn");

//answer button variable
var answrbtn = document.getElementById("answer-buttons");

// question variable
var question = 0;

//answers variable
var answers = [];



//timer function for countdown of 60 sconds
function updateTimer() {
    var minutes = Math.floor(timerSeconds / 60);
    var seconds = timerSeconds % 60;
    timer.value = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

//alert for when the timer runs out
function myTimer() {
    updateTimer();
    timerSeconds--;

    if (sec == -1) {
        clearInterval(time);
        alert("You are out of time!");
    }
}

//the rate at which the countdown timer will run at
document.getElementById('start-btn').addEventListener('click', function() {
    time = setInterval(myTimer, 1000);
});

//start buttton even listener
strtbtn.addEventListener("click", startQuiz);

//next button even listener 
nxtbtn.addEventListener("click", nextQuestion);

//submit button event listener
sbmtbtn.addEventListener("click", showResults);

//function to start your quiz
function startQuiz() {
    strtbtn.classList.add("hide");
    answrbtn.classList.remove("hide");
    nxtbtn.classList.remove("hide");
    sbmtbtn.classList.remove("hide");
    startTimer();
    showQuestion();
}

//function to make sure the question pops up
function showQuestion() {
    resetQuestion();
    var currentQ = questions[question];
    qprompt.textContent = currentQ.question;

    currentQ.options.forEach(function (option, index) {
        var button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn");
        button.addEventListener("click", function () {
            selectAnswer(index);
        });
        answrbtn.appendChild(button);
    });
}

//resets questions to make sure they show again
function resetQuestion() {
    qprompt.textContent = "";
    while (answrbtn.firstChild) {
        answrbtn.removeChild(answrbtn.firstChild);
    }
}


//function to go onto the next question
function nextQuestion() {
    question++;
    if (question < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

//function to select your chosen answer for question
function selectAnswer(index) {
    answers[question] = index;
}

//ends the quiz
function endQuiz() {
    clearInterval(timerInterval);
    nxtbtn.classList.add("hide");
    sbmtbtn.classList.remove("hide");
    showScore();
}

//shows final score 
function showScore() {
    var score = calculateScore();
    score.textContent = "Your Score: " + score + " out of " + questions.length;
    score.classList.remove("hide");
}

//function to show the correct scores eg if you get wrong answer 
function calculateScore() {
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].answerIndex) {
            score++;
        }
    }
    return score;
}

//starts timer
function startTimer() {
    timerInterval = setInterval
}


//shoiws results
function showResults() {
    var finalScore = calculateScore();
    score.textContent = "Your Final Score: " + finalScore + " out of " + questions.length;
    score.classList.remove("hide");
}



