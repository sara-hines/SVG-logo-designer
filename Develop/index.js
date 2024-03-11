// Requiring the modules and packages which will be used: the built-in fs module for writing to a file; inquirer for working with user input; validate-color for validating color keywords and hexadecimal values; and the generateSvg function from fn-generate-svg.js for creating the customized SVG code.
const fs = require('fs');
const inquirer = require('inquirer');
const validateColor = require('validate-color').default;
const generateSvg = require('./lib/fn-generate-svg.js');


// Inquirer will prompt the user for their responses to the below questions.
let questions = [
    {
        type: "input", 
        name: "textForShape", 
        message: "1. Please enter at least 1 and up to 3 characters for the text for your logo."
    }, 
    {
        type: "input", 
        name: "textColor", 
        message: "2. Please enter the color for your logo's text, as either: a color keyword or a hexadecimal number beginning in #."
    }, 
    {
        type: "list", 
        name: "shape", 
        message: "3. Please choose one of the following shapes for your logo",
        choices: ["circle", "triangle", "square"]
    }, 
    {
        type: "input", 
        name: "shapeColor", 
        message: "4. Please enter the fill color for the shape, as either: a color keyword or a hexadecimal number beginning in #."
    }
];


function init() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            // Npm package validate-color is used to validate color keywords or hexadecimal values the user provided in their responses. 
            // validTextColor will be true if the textColor is valid, or false if the textColor is invalid. 
            let validTextColor = validateColor(answers.textColor);

            // validShapeColor will be true if the shapeColor is valid, or false if the shapeColor is invalid.
            let validShapeColor = validateColor(answers.shapeColor);

            // If the user provided an invalid amount of characters for their logo's text, or provided an invalid color keyword or hexadecimal value, an error will be thrown and the program will stop execution.
            if (answers.textForShape.length == 0 || answers.textForShape.length > 3 || !validTextColor || !validShapeColor) {
                throw new Error("Check your responses--you either provided an invalid amount of characters for your logo text, or an invalid color for your text color or shape color.");
            }

            // If the user's input was valid and the user responded to all questions, the user's responses will be passed to the generateSvg function, which will return customized SVG code based on the user's responses.
            if (answers.textForShape && answers.textColor && answers.shape && answers.shapeColor) {
                let svgCode = generateSvg(answers);
                // The customized SVG code will be written to a file named "logo.svg", with the help of the writeToFile function.
                writeToFile("logo.svg", svgCode);
            } else {
                throw new Error("There was an error in obtaining your responses--please try again.");
            }
        })

        // The .catch() is used for error handling, and can handle errors from the previous .prompt() and .then() blocks.
        .catch((error) => {
            if (error.isTtyError) {
                throw new Error("Prompt couldn't be rendered in current environment");
            } else {
                // If the error is not a Tty error, the error will appear in a console log in red.
                console.error(error);
            }
        });
}


// Function writeToFile provides the functionality to write the svgCode (passed in as data), to the logo.svg file (passed in as fileName).
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function() {
        console.log("Generated logo.svg");
    });
}


// The init function is called to begin the application when "node index.js" is run in the terminal.
init();