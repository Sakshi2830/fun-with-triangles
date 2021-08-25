const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");


function calculateSmOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function calculateHypotenuse(){
   const sumOfSquares= calculateSmOfSquares(Number(sides[0].value),Number(sides[1].value))
   const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
   outputEl.innerText = " The Length of Hypotenuse is " + lengthOfHypotenuse
}

hypotenuseBtn.addEventListener("click" , calculateHypotenuse)