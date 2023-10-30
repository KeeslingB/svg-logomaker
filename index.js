const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// module.imports = {Triangle, Circle, Square};

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
    name: 'shapes',
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
  svgfile = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

  
  ${shapeChoice.response}
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.text}</text>

</svg>`;
  fs.writeFile('logo.svg', svgfile, (err) =>
  err ? console.error(err) : console.log('Generated logo.svg'));
}



function shapeChoice (shapes) {
  if (shapes === 'Triangle') {
    return Triangle;
  }
  if (shapes === 'Square') {
    return Square;
  }
  else {
    return Circle;
  }
}
