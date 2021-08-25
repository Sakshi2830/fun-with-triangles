const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateButton = document.querySelector("#calculate-button");
const message = document.querySelector("#output");



calculateButton.addEventListener("click", function measureSide() {
    if (base.value && height.value) {
        if (base.value > 0 && base.value > 0) {
            calculateArea();
        } else {
          message.innerText = "Please enter side greater than 0"
        }
    } else {
      message.innerText = "Please fill both the sides."
    }

})

function calculateArea() {
    const area = (0.5 * (base.value) * (height.value)).toFixed(2);
    message.innerText = "The area of this triangle is: " + area;

}



