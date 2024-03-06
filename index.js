const fs = require('fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle}= require('./Lib/Shapes')


const getUserInput = async () =>{
const UserInput = await inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => input.length > 0 && input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex):',
  },
]);
return UserInput;
}

function createSVG({text, textColor, shape, shapeColor}){
  let selectedShape;
  switch (shape){
  case 'Circle':
  selectedShape = new Circle()
  break
  case 'Triangle':
    selectedShape = new Triangle()
  break
  case 'Square':
    selectedShape = new Square()
  break
  }


  selectedShape.setColor(shapeColor);
  const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="125" font-size="50" text-anchor="middle"  fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

const main = async () => {
  const userInput = await getUserInput();
  createSVG(userInput);
};

main();