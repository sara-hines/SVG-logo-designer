// The Circle class is required to allow testing of its methods. 
const { Circle } = require("../lib/shapes.js");


// Each method of the Circle class is tested to ensure that it returns the appropriate SVG code based on the user's specifications. The SVG returned by the renderStarterSvg method requires no customization, but each of the other methods are tested based on their ability to return customized SVG code when given the value for a variable.
describe("Circle", () => {
    describe("renderStarterSvg", () => {
        it("should return the first section of SVG code necessary to create a circle logo", () => {
            const circle = new Circle("SDF", "black", "circle", "blue");
            expect(circle.renderStarterSvg()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
        });
    });

    describe("renderShape", () => {
        it("should return the second section of SVG code necessary to create a circle logo, involving circle dimensions and shape color; given a shapeColor of blue, the fill should be set to blue", () => {
            const circle = new Circle("SDF", "black", "circle", "blue");
            expect(circle.renderShape()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
        });
    });

    describe("renderShape", () => {
        it("should return the second section of SVG code necessary to create a circle logo, involving circle dimensions and shape color; given a shapeColor of #3cb371, the fill should be set to #3cb371", () => {
            const circle = new Circle("SDF", "black", "circle", "#3cb371");
            expect(circle.renderShape()).toEqual(`<circle cx="150" cy="100" r="80" fill="#3cb371" />`);
        });
    });

    describe("renderTextColor", () => {
        it("should return the third section of SVG code necessary to create a circle logo, involving text position, size, and color; given a textColor of black, the fill should be set to black", () => {
            const circle = new Circle("SDF", "black", "circle", "blue");
            expect(circle.renderTextColor()).toEqual(`<text x="150" y="120" font-size="55" text-anchor="middle" fill="black">`);
        });
    });

    describe("renderTextColor", () => {
        it("should return the third section of SVG code necessary to create a circle logo, involving text position, size, and color; given a textColor of #ffa500, the fill should be set to #ffa500", () => {
            const circle = new Circle("SDF", "#ffa500", "circle", "blue");
            expect(circle.renderTextColor()).toEqual(`<text x="150" y="120" font-size="55" text-anchor="middle" fill="#ffa500">`);
        });
    });

    describe("renderText", () => {
        it("should return the last section of SVG code necessary to create a circle logo, involving the actual text for the logo; given the textForShape is 'SDF', 'SDF' should appear before the text closing tag", () => {
            const circle = new Circle("SDF", "black", "circle", "blue");
            expect(circle.renderText()).toEqual(`SDF</text>
</svg>`);
        });
    });

    describe("renderText", () => {
        it("should return the last section of SVG code necessary to create a circle logo, involving the actual text for the logo; given the textForShape is 'sdf', 'sdf' should appear before the text closing tag", () => {
            const circle = new Circle("sdf", "black", "circle", "blue");
            expect(circle.renderText()).toEqual(`sdf</text>
</svg>`);
        });
    });
});

