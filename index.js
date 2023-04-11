// Importing classes and modules necessary
const inquirer = require('inquirer');
const { Square, Triangle, Circle, LogoRenderer} = require('./lib/shapes');
const fs = require('fs');
// Set up the user prompt questions for input.

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 1-3 characters for your logo text.',
        validate: (input) => input.length <= 3 || 'Input must be three characters or fewer.',
    },
    {
        type: 'input',
        name: 'colorText',
        message: 'Enter a color for your text',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your logo.',
        choices: ['Square', 'Triangle', 'Circle'],
    },
    {
        type: 'input',
        name: 'colorShape',
        message: 'Enter a color for your shape',
    },
];

inquirer.prompt(questions).then(({colorText, colorShape, text, shape}) => {
    const shapeInstance = {
        Square: new Square(colorText, colorShape, text),
        Triangle: new Triangle(colorText, colorShape, text),
        Circle: new Circle(colorText, colorShape, text),
    }[shape];

    const logoRenderer = new LogoRenderer();
    logoRenderer.putText(colorText, text);
    logoRenderer.putShape(shapeInstance);

    const svg = logoRenderer.renederLogo();
    fs.writeFileSync('./examples/logo.svg', svg);
    console.log('Generated logo.svg');
});