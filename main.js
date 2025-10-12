const buttons = document.querySelectorAll(".incrementBtn");
const submitButton = document.getElementById("submit");
const questions = document.querySelectorAll(".question");

submitButton.disabled = true;

function checkAllAnswered() {
  let allAnswered = true;
  questions.forEach((question) => {
    const selected = question.querySelector(".incrementBtn.selected");
    if (!selected) allAnswered = false;
  });
  submitButton.disabled = !allAnswered;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const questionDiv = button.closest(".question");
    questionDiv
      .querySelectorAll(".incrementBtn")
      .forEach((btn) => btn.classList.remove("selected"));

    button.classList.add("selected");
    checkAllAnswered();
  });
});

submitButton.addEventListener("click", function () {
  const scores = {
    melody: 0,
    tuxedosam: 0,
    hellokitty: 0,
    pompourin: 0,
    kuromi: 0,
  };

  questions.forEach((question) => {
    const selected = question.querySelector(".incrementBtn.selected");
    if (selected) {
      const character = selected.dataset.character;
      scores[character]++;
    }
  });

  localStorage.setItem("scores", JSON.stringify(scores));
  window.location.href = "results.html";
});

const clickSound = new Audio("click.wav");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
