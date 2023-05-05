const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
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


}


isTriangleBtn.addEventListener("click", isTriangle)