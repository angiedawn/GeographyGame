(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(
    typedAns /*0,1 or 2*/,
    scoreFunction /*function from below*/
  ) {
    var sc;
    if (typedAns === this.correct) {
      console.log("CORRECT ANSWER!");
      sc = scoreFunction(true);
    } else {
      console.log("Wrong answer, try again.");
      sc = scoreFunction(false);
    }
    this.displayScore(sc);
  };
  Question.prototype.displayScore = function(scorez) {
    console.log("Your current score is: " + scorez);
    console.log("-------------------------------------");
  };

  var q1 = new Question(
    "What state is St. Louis in?",
    [" Missouri", " Texas", " Main"],
    0
  );
  var q2 = new Question(
    "What continent is the country India in?",
    ["North America", "Austrailia", "Asia"],
    2
  );

  var q3 = new Question(
    "Where is the Grand Canyon Located?",
    ["Cairo, Egypt", "Arizona, US", "St. Petersburg, Russia"],
    1
  );
  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++; //score + 1
      }
      return sc;
    };
  }

  keepscore = score(); //can also use keepscore below instead of score()

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    var answer = prompt("Enter the answer number."); //typedAns

    //questions[n].addPoints();

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), /*score() is same*/ keepscore); //running the score function
      nextQuestion();
    }
  }
  nextQuestion();
})(); //Running the function

/*******************************************
 * FIRST PART OF CHALLENGE
 *******************************************/
/*(function() {
  //IIFE makes the function safe
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log("Correct Anwer!");
    } else {
      console.log("Wrong answer, try again.");
    }
  };

  var q1 = new Question(
    "What state is St. Louis in?",
    [" Missouri", " Texas", " Main"],
    0
  );
  var q2 = new Question(
    "What continent is the continent India in?",
    ["North America", "Austrailia", "Asia"],
    2
  );

  var q3 = new Question(
    "Where is the Grand Canyon Located?",
    ["Cairo, Egypt", "Arizona, US", "St. Petersburg, Russia"],
    1
  );

  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);
  console.log(n);

  questions[n].displayQuestion();
  var answer = parseInt(prompt("Enter the answer number."));
  questions[n].checkAnswer(answer);
})(); //Running the function*/

/*console.log(questions[0].question);
  console.log(questions[0].answers[0][1][2]);
   var correct = console.log("You are correct");*/
