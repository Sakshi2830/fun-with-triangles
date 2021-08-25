const base = document.querySelector('#base');
const height = document.querySelector('#height');
const calculateButton = document.querySelector('#calculate-button');
const outputEl = document.querySelector('#output');

outputEl.style.display = "none";

calculateButton.addEventListener("click" , function measureSide(){
    if (base.value && height.value) {
        if (base.value > 0 && base.value > 0) {
            calculateArea();
        } else {
            showMessage("Please enter side greater than 0");
        }
    } else {
        showMessage("Please fill both the sides.")
    }

})
function calculateArea(){
    
}