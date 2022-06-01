//user inputs 10x10 e.g.
let userInput = 10;

let noOfColumns = userInput;
let pixelHeight = 700 / noOfColumns;
let area = noOfColumns * noOfColumns;

const divsContainer = document.querySelector(".divs-container");
divsContainer.setAttribute(
  "style",
  "grid-template-columns: repeat(" + noOfColumns + "," + pixelHeight + "px);"
);

//creating pixels/divs

for (let i = 1; i < area + 1; i++) {
  //div/pixel creation
  const div = document.createElement("div");
  div.className = "div" + i.toString();

  //set div height
  div.setAttribute("style", "background: red; width:" + pixelHeight + "px;");

  //append
  divsContainer.appendChild(div);
}
