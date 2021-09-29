const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#btn");
const outputEl = document.querySelector(".output");

const correctAnswers = ["90°", "right angle"];
const calculateScore = () => {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index++;
  }
  outputEl.innerText = "Your total score is : " + score;
};
submitAnswerBtn.addEventListener("click", calculateScore);
