const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');


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
  fs.writeFile('logo.svg', svgfile, (err) =>
  err ? console.error(err) : console.log('success'));
}


//file made after prompts named logo.svg
//output text 'generated logo.svg 
//svg images 300x200 pixel size

/*
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/

