//using inquire, ask users whether they want to create a square, triangle, or circle: first set of questions
//depending on the user's choice, example: create a square, create a function to generate a new square object by asking a second set of questions like
    // color of the square, side of the square- do inquire.prompt in this set of questions
    //inside the .then of inquirer.prompt, create new object of a circle example: const newCircle = new Circle (answers.radius, answers.color)
        //same logic for square, triangle, etc.

const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const fs = require('fs');
const inquirer = require('inquirer');
const confirmText = async (input) => {
    if (input <= 3) {
       return true;
    }
    return "please choose characters between 1 and 3 in length!";
 };

const questions = [
    {
        type: 'list',
        message: 'What color do you want your shape to be?',
        name: 'color',
        choices: ['red', 'blue', 'green', 'orange', 'pink']
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        message: 'What do you want your logo to say?',
        name: 'text',
        validate: confirmText,
    },
]


function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        if (answers.shape === 'circle') {
            let circle = new Circle()
            circle.getColor(answers.color)
            //pass off the circle.render and the answers.text to the svg builder that happens underneath this
            //update square and triangle files and finish other conditionals here
        }
        else if (answers.shape === 'square') {
            let sqaure = new Square()
            Square.getColor(answers.color)
        }
        else (answers.shape === 'triangle') ;{
            let triangle = new Triangle()
            Triangle.getColor(answers.color)
        }
      })
    .catch((err) => {
        console.log(err);
    })
}
init();