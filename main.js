var melody = 0;
var tuxedosam = 0;
var hellokitty = 0;
var pompourin = 0;
var kuromi = 0;

let count = 0;

const buttons = document.querySelectorAll(".incrementBtn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const character = button.dataset.character;

    if (character === "kuromi") kuromi++;
    if (character === "hellokitty") hellokitty++;
    if (character === "tuxedosam") tuxedosam++;
    if (character === "pompourin") pompourin++;
    if (character === "melody") melody++;

    console.log({ melody, tuxedosam, hellokitty, pompourin, kuromi });
  });
});

document.getElementById("submit").addEventListener("click", function () {
  const scores = { melody, tuxedosam, hellokitty, pompourin, kuromi };
  localStorage.setItem("scores", JSON.stringify(scores));
  window.location.href = "results.html";
});
