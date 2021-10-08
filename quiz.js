// code by olatocode 
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

Quiz.prototype.isEnded = function () {
  return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    let element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  let gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> You score: " + quiz.score + "</h2>";
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

// create questions here
let questions = [
  new Question(
    "Who invented the computer?",
    ["Charles", "C.Barber", "C.Babbage", "Garbage"],
    "C.Babbage"
  ),
  new Question(
    "Who is the Founder of Microsoft?",
    ["Bill Gate", "James", "Bond", "Musk"],
    "Bill Gate"
  ),
  new Question(
    "On Oct 6th 2021 Facebook, Instagram and WhatsApp was down for?",
    ["2hrs", "4hrs", "6hrs", "8hrs"],
    "6hrs"
  ),
  new Question(
    "Google was created by larry Page and ?",
    ["Sergey Brin", "Bean", "Sergio Bin", "Beans"],
    "Sergey Brin"
  ),
  new Question(
    "Facebook was Develop by Mark Zuckerberg in the year",
    ["2002", "2003", "2004", "2005"],
    "2004"
  ),
];

// create quiz
let quiz = new Quiz(questions);

// display quiz
populate();
