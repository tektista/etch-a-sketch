//user inputs 10x10 e.g.
let userInput = 20;

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
  // div/pixel creation
  const div = document.createElement("div");
  div.className = "div" + i.toString();

  //set div/pixel height
  div.setAttribute("style", "background: white; width:" + pixelHeight + "px;");

  //append
  divsContainer.appendChild(div);
}

const divsContainer1 =
  document.getElementsByClassName("divs-container").childNodes;
  


  console.log(divsContainer1);


  divsContainer1.forEach((element) => {
  // and for each one we add a 'click' listener
  element.addEventListener("mouseover", function () {
    alert(element.class);
  });
});

//mouser over

// const divsContainer1 = document.querySelector(".divs-container");
// divsContainer1.forEach((element) => {
//   element.addEventListener("mouseover", function () {
//       element.setAttribute("style", "background: red;");

//   });
// });
