const angles = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector(".output")

function calculateSumOfAngle(angle1, angle2 , angle3)
{
    const sumOfAngle= angle1 + angle2 +angle3;
    console.log(sumOfAngle)
}
function isTriangle(){
    const sumOfAngle = calculateSumOfAngle(40,100,40);

}

isTriangleBtn.addEventListener("click", isTriangle)