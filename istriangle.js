const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#submit-btn");
const message = document.querySelector(".output")

function calculateSumOfAngle(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}


function isTriangle() {
    const sumOfAngles = calculateSumOfAngle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        message.innerText = "Yay ! The angles form a triangle"
    } else {
        message.innerText = "Oh Oh The angles don't form a triangle"
    }
    if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0) {
        return result.innerText = "Please enter valid values";
    }
    if (!Number(inputs[0].value) || !Number(inputs[1].value)) {
        return result.innerText = "Please enter both the inputs";

    }
}
isTriangleBtn.addEventListener("click", isTriangle)