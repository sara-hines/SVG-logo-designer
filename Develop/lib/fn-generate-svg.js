// The Circle, Triangle, and Square classes are required for accessing their respective render methods.
const { Circle } = require("./shapes.js");
const { Triangle } = require("./shapes.js");
const { Square } = require("./shapes.js");


// Based on the user's chosen shape and responses to the prompts, the SVG code for the logo will be rendered in parts, using each method of the correct class, and the variable renderedSvg will be used to store and return the finished SVG. 
function generateSvg(answers) {
    if (answers.shape === "circle") {
        const circle = new Circle(answers.textForShape, answers.textColor, answers.shape, answers.shapeColor);

        let starterSvg = circle.renderStarterSvg();
        let svgForShape = circle.renderShape();
        let svgForTextColor = circle.renderTextColor();
        let svgForText = circle.renderText();

        let renderedSvg = `${starterSvg}
    ${svgForShape}
    ${svgForTextColor}${svgForText}`;
        return renderedSvg;

    } else if (answers.shape === "triangle") {
        const triangle = new Triangle(answers.textForShape, answers.textColor, answers.shape, answers.shapeColor);

        let starterSvg = triangle.renderStarterSvg();
        let svgForShape = triangle.renderShape();
        let svgForTextColor = triangle.renderTextColor();
        let svgForText = triangle.renderText();

        let renderedSvg = `${starterSvg}
    ${svgForShape}
    ${svgForTextColor}${svgForText}`;
        return renderedSvg;

    } else if (answers.shape === "square") {
        const square = new Square(answers.textForShape, answers.textColor, answers.shape, answers.shapeColor);

        let starterSvg = square.renderStarterSvg();
        let svgForShape = square.renderShape();
        let svgForTextColor = square.renderTextColor();
        let svgForText = square.renderText();

        let renderedSvg = `${starterSvg}
    ${svgForShape}
    ${svgForTextColor}${svgForText}`;
        return renderedSvg;
    }
}


// The generateSvg is exported for use in function init() in index.js.
module.exports = generateSvg;