const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputE = document.querySelector(".output");

const correctAnswers = ["180°", "Isosceles triangle", "60°", "Scalene triangle", "Centroid"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let selectedValues of formResults.values()) {
        if (selectedValues === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputE.innerText = "Your score is : " + score;

}

submitBtn.addEventListener("click", calculateScore)