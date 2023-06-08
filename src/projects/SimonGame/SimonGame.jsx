import "./simonGame-styles.css";
import $ from "jquery";
import wrongSound from "./sounds/wrong.mp3";
import blueSound from "./sounds/blue.mp3";
import greenSound from "./sounds/green.mp3";
import redSound from "./sounds/red.mp3";
import yellowSound from "./sounds/yellow.mp3";

//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//
//* GAME LOGIC *// 

// Variables
var level = 0;
var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var lives = 0;
var rotatingButtons = undefined;
handleRocker();
const gameOverSound = new Audio(wrongSound);
const blueButtonSound = new Audio(blueSound);
const greenButtonSound = new Audio(greenSound);
const redButtonSound = new Audio(redSound);
const yellowButtonSound = new Audio(yellowSound);

// Game Start
function GameStart() {
  if (level === 0) {
    setTimeout(function () {
      nextSequence();
    }, 100);
  }
}

// Next Sequence
function nextSequence() {
  level++;
  $("#simon-h2").text("level " + level); //show current level

  // Choose random button
  var randomColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);
  buttonShowAnimation(randomColor);
  buttonSound(randomColor);
}

// Behavior when user clicks a button
function handleClick(e) {
  buttonSound(e.target.id);
  buttonPressAnimation(e.target.id);
  if (level !== 0) {
    userPattern.push(e.target.id);
    checkPatterns(userPattern.length - 1);
  }
}

// Check Patterns Function
function checkPatterns(i) {
  if (userPattern[i] === gamePattern[i]) {
    // Correct Pattern
    if (userPattern.length === gamePattern.length) {
      userPattern = [];
      setTimeout(function () {
        rotateButtons();
      }, 250);

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // Incorrect Pattern
    if (lives === 0) {
      // Game over
      $("#simon-h2").text("Game over.");
      setTimeout(function () {
        $("#simon-h2").text("Click Here to Start the Game.");
      }, 1500);

      $(".button").addClass("wrong");
      setTimeout(function () {
        $(".button").removeClass("wrong");
      }, 500);

      gameOverSound.play();

      userPattern = [];
      gamePattern = [];
      level = 0;

      $(".lives-h2").text("0");
      $(".simon-game-area").css("transform", "rotate(0deg)");
    } else {
      // Reduce Lives
      lives--;
      userPattern = [];
      $(".lives-h2").text(lives);

      $(".button").addClass("false");
      setTimeout(function () {
        $(".button").removeClass("false");
      }, 500);

      gameOverSound.play();
    }
  }
}

// Rotate Buttons
function rotateButtons() {
  if (rotatingButtons === true && level > 1) {
    var x = 90 * (level - 1);
    $(".simon-game-area").css("transform", "rotate(" + x + "deg)");
  }
}

// Animation when randomly selected Button is shown to the user
function buttonShowAnimation(buttonID) {
  $("#" + buttonID)
    .fadeOut(100)
    .fadeIn(100);
}

// Animation when User clicks on a Button
function buttonPressAnimation(buttonID) {
  $("#" + buttonID).addClass("pressed");
  setTimeout(function () {
    $("#" + buttonID).removeClass("pressed");
  }, 100);
}

// Sound is playing when buttons gets clicked or is shown by the game
function buttonSound(buttonID) {
  if (buttonID === "green") {
    greenButtonSound.play();
  } else if (buttonID === "red") {
    redButtonSound.play();
  } else if (buttonID === "yellow") {
    yellowButtonSound.play();
  } else if (buttonID === "blue") {
    blueButtonSound.play();
  }
}

// Set Amout of Lives
function AddLive() {
  if (lives < 9 && level === 0) {
    lives++;
    $(".lives-h2").text(lives);
  }
}

function ReduceLive() {
  if (lives > 0 && level === 0) {
    lives--;
    $(".lives-h2").text(lives);
  }
}

function handleRocker() {
  if (document.getElementsByClassName("checkbox").checked === false) {
    document.getElementsByClassName("checkbox").checked = true;
    rotatingButtons = true;
    //++++++++++++++++set Button on ON
  } else {
    document.getElementsByClassName("checkbox").checked = false;
    rotatingButtons = false;
  }
}

//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//
//* SIMON GAME HTML RENDERING *//
function SimonGame() {
  return (
    <div className="simon-game">
      {/** Heading Section */}
      <div className="simon-head">
        <h1>Retro Simon Game</h1>
        <h2 onClick={GameStart} className="simon-h2" id="simon-h2">
          Click Here to Start the Game.
        </h2>
      </div>
      <div className="simon-grid">
        {/** Set number of Lives */}

        <div className="simon-lives">
          <div className="col col-subtract-live">
            <h3>Lives</h3>
            <button onClick={ReduceLive} className="plus-minus-btn">
              -
            </button>
          </div>
          <div className="col col-live-amount">
            <h2 className="lives-h2">{lives}</h2>
          </div>
          <div className="col col-add-live">
            <button onClick={AddLive} className="plus-minus-btn">
              +
            </button>
          </div>
        </div>
        {/** Game Section */}
        <div className="simon-game-area">
          <div className="game-div">
            <button
              onClick={handleClick}
              id="green"
              className="button green-btn"
            ></button>
            <button
              onClick={handleClick}
              id="red"
              className="button red-btn"
            ></button>
          </div>
          <div className="game-div">
            <button
              onClick={handleClick}
              id="yellow"
              className="button yellow-btn"
            ></button>
            <button
              onClick={handleClick}
              id="blue"
              className="button blue-btn"
            ></button>
          </div>
        </div>
        {/** Simon Advanced Switcher */}
        <div className="simon-switcher">
          <h4>Advanced Mode</h4>
          <label className="rocker">
            <input type="checkbox" onClick={handleRocker} />
            <span className="switch-left">On</span>
            <span className="switch-right">Off</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SimonGame;
