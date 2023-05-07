const inputValue = document.querySelectorAll(".input-value");
const areaBtn = document.querySelector(".area-btn");
const result = document.querySelector(".output");

function calculateAreaOfTriangle(base, height){
    const areaTriangle = 1/2*(base*height)
    return areaTriangle;
}

function calculateArea()
{
    if (Number(inputValue[0].value) <= 0 || Number(inputValue[1].value) <= 0) {
        return result.innerText = "Please enter valid values";
    }
    if (!Number(inputValue[0].value) || !Number(inputValue[1].value)) {
        return result.innerText = "Please enter both the inputs";

    } else {
        const areaTriangle = calculateAreaOfTriangle(Number(inputValue[0].value), Number(inputValue[1].value));
        result.innerText = "Area of Triangle is " + (areaTriangle).toFixed(2) + "  cm²";

    }
}

areaBtn.addEventListener("click", calculateArea)