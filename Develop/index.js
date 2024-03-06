const fs = require('fs');
const inquirer = require('inquirer');
const validateColor = require('validate-color').default;

// shapes.js will export Triangle, Circle, and Square classes.
const generateSvg = require('../Develop/lib/shapes.js');

const questions = [
    {
        type: "input", 
        name: "textForShape", 
        message: "1. Please enter up to 3 characters for the text for your logo."
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
            console.log(answers);
            // validTextColor will be true if the textColor is valid, or false if the textColor is invalid.
            let validTextColor = validateColor(answers.textColor);
            console.log(validTextColor);
            // validShapeColor will be true if the shapeColor is valid, or false if the shapeColor is invalid.
            let validShapeColor = validateColor(answers.shapeColor);
            console.log(validShapeColor);

            if (answers.textForShape.length > 3 || answers.textForShape.length == 0 || !validTextColor || !validShapeColor) {
                throw new Error("Check your responses--you either provided an invalid amount of characters for your logo text, or an invalid color for your text color or shape color.")
            }

            if (answers.textForShape && answers.textColor && answers.shape && answers.shapeColor) {
                let svgCode = generateSvg(answers);
                writeToFile("logo.svg", svgCode);
            } else {
                throw new Error("There was an error in obtaining your responses--please try again.")
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                throw new Error("Prompt couldn't be rendered in current environment");
                } else {
                // If the error is not a Tty error, the error will appear in a console log in red.
                console.error(error);
                }
        });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function() {
        console.log("Generated logo.svg");
    });
}

init();