"use strict";
//variable declarations
const check = document.getElementById("check");
const tryAgain = document.getElementById("try-again");
const input = document.getElementById("text");
let captcha = document.getElementById("captcha");
//important DATA
const capArr = ["r08In", "Ju51eeN", "r3n33", "ra7", "12gf34", "69fb420"];
let randNum = Math.trunc(Math.random() * capArr.length);
console.log(randNum);
//we set the captcha text content here
captcha.textContent = capArr[randNum];

//whenever text area is clicked on, whatever is inside of it will clear out
input.addEventListener("click", () => {
  input.value = ""; //empty input now
});

//function checks to see if input is the same as needed value
check.addEventListener("click", () => {
  //if correct/incorrect, we do...
  if (input.value !== captcha.textContent) {
    input.classList.add("wrong"); //1) add classlist to make input red
    input.value = "try again"; //2) send error message to user
  } else {
    input.classList.add("correct"); //1) add classList to make input green
    captcha.textContent = "Correct!"; //2) send success message to user
    captcha.style.textDecoration = "none"; //get rid of line through text
    input.value = ""; //clear out the input
  }
});

//try again function so when the user is incorrect they can do it again
//simple checks to see if input classes are included
tryAgain.addEventListener("click", () => {
  if (input.classList.contains("wrong")) input.classList.remove("wrong");
  if (input.classList.contains("correct")) input.classList.remove("correct");
  input.value = "";
  //change captcha textContent
  captcha.style.textDecoration = "line-through";
  randNum = Math.trunc(Math.random() * capArr.length);
  captcha.textContent = capArr[randNum];
});

function woohoo() {
  captcha.textContent = "correct";
}
