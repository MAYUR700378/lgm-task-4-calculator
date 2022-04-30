// Variables
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
// For each
buttons.forEach(function (button) {
 button.addEventListener("click", calculate);
});
// Functions
function calculate(event) {
 const clickedButtonValue = event.target.value;
 try {
 if (clickedButtonValue === "=") {
 if (display.value !== "") {
 display.value = eval(display.value);
 }
 } else if (clickedButtonValue === "C") {
 display.value = "";
 } else {
 display.value += clickedButtonValue;
 }
 } catch (error) {
 alert("Error!");
 }
}
