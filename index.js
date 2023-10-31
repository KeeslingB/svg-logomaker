const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square , Shape} = require('./lib/shapes');

// import(Shape)


inquirer.prompt([
  {
    type: 'input',
    message: 'enter up to three characters',
    name: 'text',
    validate: (input) => input.length < 4,
  },
  {
    type: 'input',
    message: 'What color would you like the text? (enter color keyword or hexadecimal number)',
    name: 'textcolor'
  },
  {
    type: 'list',
    message: 'What shape would you like?',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    message: 'Shape Color? (color keyword or hexadecimal)',
    name: 'shapecolor',
  }
])
.then((response) =>
createPage(response));


  
function createPage(response) {
  let shape;
  if(response.shape === 'Circle'){
    shape = new Circle();
  } if (response.shape === "Triangle"){
    shape = new Triangle();
  } if (response.shape === "Square"){
    shape = new Square();
  }
  // setColor(shape);
  svgfile = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

  ${shape}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;
  fs.writeFile('logo.svg', svgfile, (err) =>
  err ? console.error(err) : console.log('Generated logo.svg'));
}
  // ${shape.response}
  // ${shape}