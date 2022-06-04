//Default user input of 6
createGrid(6);


function changeDimension() {
  userInputx = prompt("What size grid do you want? e.g. 64 for 64x64");
  createGrid(userInputx);
}

function createGrid(userInput) {
  let noOfColumns = userInput;
  let pixelHeight = 700 / noOfColumns;
  let area = noOfColumns * noOfColumns;

  let divsContainer = document.querySelector(".divs-container");
  divsContainer.innerHTML = "";
  divsContainer.setAttribute(
    "style",
    "grid-template-columns: repeat(" + noOfColumns + "," + pixelHeight + "px);"
  );

  //creating pixels/divs
  for (let i = 1; i < area + 1; i++) {
    // div/pixel creation
    let div = document.createElement("div");
    div.className = "div" + i.toString();

    //set div/pixel height
    div.setAttribute(
      "style",
      "background: white; width:" + pixelHeight + "px;"
    );

    //append
    divsContainer.appendChild(div);
  }

  // get all children of .divs-container
  let divsContainer1 = document.querySelector(".divs-container").childNodes;

  divsContainer1.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.setAttribute("style", "background: red;");
    });
  });
}
