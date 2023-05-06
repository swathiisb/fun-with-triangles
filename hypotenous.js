const side = document.querySelectorAll(".input-side");
const hypotenuseBtn = document.querySelector(".hypotenuse-btn");
const result = document.querySelector(".output");

function calculateSumOfSquares(side1, side2) {
    const sumOfSquares = side1 ** 2 + side2 ** 2;
    //console.log(sumOfSquares)
    return sumOfSquares
}

function calculatehypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(side[0].value), Number(side[1].value));
    const lengthOfHypotenous = Math.sqrt(sumOfSquares)
    //console.log(lengthOfHypotenous)
    result.innerText ="The length of hypotenuse " + lengthOfHypotenous;
    
}

hypotenuseBtn.addEventListener("click", calculatehypotenuse)