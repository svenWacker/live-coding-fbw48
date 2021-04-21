/// Any code you will write for your website (in the future!) should go here
//   Javascript in the browser
//  XMl, JSON, jQuery, Ajax, API

//  JS Engines:
//   V8 (Chrome, Node, Edge)
//    SpiderMonkey (Firefox)
//    Chakra (Internet Explorer)

//   DOM aka Document Object Module
//   DOM tree.

// Adding javascript to HTML:
// - The `<script>` tag
// - External JS with `<script src="...">`

// The Window object
// (objects functions and variables) are member of window object.
// document object is also member of the window object
// the window object contain many Properties and methods

// -Host object-
// are objects supplied by a certain environment.
// Like in browser environment you will find window
// Or in node.js environment you will find Process

// -Native object-
// are standard built-in objects provided by Javascript.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// window.alert("Hi");
// let username = window.prompt("Please enter your name");
// console.log(username);

function change() {
  console.log(window.document.getElementById("main"));

  window.document.getElementById("main").outerHTML =
    "<h1 id='main'> Hi this is new text form Js 😎</h1>";
  let headerText = window.document.getElementById("main");
  console.log(headerText);
  headerText.style.backgroundColor = "orange";
}

function calculation() {
  let userNum1 = document.querySelector("#num1").value;
  let userNum2 = document.querySelector("#num2").value;
  //   console.log(userNum1);
  //   console.log(userNum2);
  //   console.log(userNum1 * userNum2);
  let userCal = document.querySelector("#cal").value;
  var calResult = 0;

  //   for (let i = 1; i <= 10; i++) {
  //     resultText += `${i} * ${userNum} ☘️ ${i * userNum} <br>`;
  //   }

  if (userCal == 1) {
    calResult = Number(userNum1) + Number(userNum2);
  }
  if (userCal == 2) {
    calResult = Number(userNum1) - Number(userNum2);
  }
  if (userCal == 3) {
    calResult = Number(userNum1) * Number(userNum2);
  }
  if (userCal == 4) {
    calResult = Number(userNum1) / Number(userNum2);
  }
  let resultText = "";
  resultText += `${userNum1} * ${userNum2} ☘️ ${calResult} <br>`;
  document.querySelector(".result").innerHTML = resultText;
}
