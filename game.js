const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
//push the questions into
function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

//set question number and question and options

function getNewQuestion() {
  //set question number
  questionNumber.innerHTML = `Question ${questionCounter + 1}   of ${
    quiz.length
  }`;
  //set question text
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

  //get the position of 'questionIndex' from the available question array
  const index1 = availableQuestions.indexOf(questionIndex);
  //remove the 'questionIndex' from the availableQuestion array
  availableQuestions.splice(index1, 1);
  //set options
  //get the length of options

  const optionLen = currentQuestion.options.length;
  //push options into availableOptions Array

  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }

  optionContainer.innerHTML = "";
  let animationDelay = 0.15;
  //create options in html

  for (let i = 0; i < optionLen; i++) {
    //random options
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    //get the position of optionIndex from the availableOptions
    const index2 = availableOptions.indexOf(optionIndex);
    //remove the 'optionIndex' from the availableOptions, so that the option does not repeat
    availableOptions.splice(index2, 1);

    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }

  questionCounter++;
}

//get the result of current attempt question
function getResult(element) {
  const id = parseInt(element.id);

  //get the answer by comparing the id of clicked option
  if (id === currentQuestion.answer) {
    //set the green color to the correct option
    element.classList.add("correct");
    //add the indictor to correct mark
    updateAnswerIndicator("correct");
    correctAnswers++;
    console.log("correct:" + correctAnswers);
  } else {
    //set the red color to the wrong option
    element.classList.add("wrong");
    //add the indictor to wrong mark
    updateAnswerIndicator("wrong");
    //if the answer is incorrect then show the correct option by adding green color the correct option
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (
        parseInt(optionContainer.children[i].id) ===
        currentQuestion.answer.answer
      ) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }
  attempt++;
  unclickableOptions();
}

//make all the options unclickable once the user select an option(restrict the user to change the option)
function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
}

function answersIndicator() {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function next() {
  if (questionCounter === quiz.length) {
    console.log("quiz over");
    quizOver();
  } else {
    getNewQuestion();
  }
}

function quizOver() {
  //hide quiz quizBox
  quizBox.classList.add("hide");
  // show result Box
  resultBox.classList.remove("hide");
  quizResult();
}

//get the quiz result
function quizResult() {
  resultBox.querySelector(".total-question").innerHTML = quiz.length;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers / quiz.length) * 100;
  resultBox.querySelector(
    ".percentage"
  ).innerHTML = `${percentage.toFixed()} %`;
  resultBox.querySelector(
    ".total-score"
  ).innerHTML = `${correctAnswers} / ${quiz.length}`;
}


function  resetQuiz(){
  
questionCounter = 0;
correctAnswers = 0;
attempt = 0;
};

function tryAgainQuiz() {
  //hide the resultBox
  resultBox.classList.add("hide");
  //show the quizBox
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

//Go to home page

function goToHome(){
location.href = 'game.html';
}

///STARTING POINT

function startQuiz() {


  //hide home box
  homeBox.classList.add("hide");
  //show quiz Box
  quizBox.classList.remove("hide");
  //first we will set all questions in availableQuestions array

  setAvailableQuestions();

  //second we will call getNewQuestion() function

  getNewQuestion();
  //to create indicator of answers
  answersIndicator();
};
