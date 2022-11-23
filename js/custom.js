//Default
let error = document.querySelector(".error");
let errorTwo = document.querySelector(".error-two");
let limitBar = document.querySelector(".limit-bar");
let limitBack = document.querySelector(".limit-back");
let limitFront = document.querySelector(".limit-front");
let gameWrap = document.querySelector(".game-wrap");
let winOneNone = document.querySelector(".win-one-none");
let winTowNone = document.querySelector(".win-two-none");

//Player One
let playerOne = document.querySelector(".player-one");
let inputOne = document.querySelector(".input-one");
let playOneBtn = document.querySelector(".play-one-btn");

//Player Two
let playerTwo = document.querySelector(".player-two");
let inputTwo = document.querySelector(".input-two");
let playTwoBtn = document.querySelector(".play-two-btn");

let count = 5;

playOneBtn.addEventListener("click", function () {
  if (inputOne.value) {
    error.innerHTML = "";
    if (inputOne.value - 20) {
      if (inputOne.value > 9) {
        error.innerHTML = "Maximum Number Is 9";
      } else {
        playerOne.style.display = "none";
        playerTwo.style.display = "block";
        playTwoBtn.addEventListener("click", function () {
          if (inputTwo.value) {
            if (inputTwo.value - 20) {
              console.log("Your guess number is " + inputTwo.value);
              if (inputTwo.value > 9) {
                errorTwo.innerHTML = "Maximum Number Is 9";
              } else {
                if (inputTwo.value > 9) {
                  console.log("Two 9 er beshi");
                } else {
                  count--;
                  if (count != 0) {
                    if (inputOne.value == inputTwo.value) {
                      gameWrap.style.display = "none";
                      winTowNone.style.display = "block";
                    } else {
                      errorTwo.innerHTML = "Your Chance left = " + count;
                      limitBar.style.display = "block";
                      if (count == 4) {
                        limitFront.className = "limit-front four";
                      } else if (count == 3) {
                        limitFront.className = "limit-front three";
                      } else if (count == 2) {
                        limitFront.className = "limit-front two";
                      } else if (count == 1) {
                        limitFront.className = "limit-front one";
                      } else {
                        console.log("limit Over");
                      }
                    }
                  } else {
                    gameWrap.style.display = "none";
                    winOneNone.style.display = "block";
                  }
                }
              }
            } else {
              errorTwo.innerHTML = "Please give your guess number";
            }
          } else {
            errorTwo.innerHTML = "Please give your value";
          }
        });
      }
    } else {
      error.innerHTML = "Please input the number";
    }
  } else {
    error.innerHTML = "Please give a value";
  }
});
