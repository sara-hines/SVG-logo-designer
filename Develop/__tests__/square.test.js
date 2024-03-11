// The Square class is required to allow testing of its methods. 
const { Square } = require("../lib/shapes.js");


// Each method of the Square class is tested to ensure that it returns the appropriate SVG code based on the user's specifications. The SVG returned by the renderStarterSvg method requires no customization, but each of the other methods are tested based on their ability to return customized SVG code when given the value for a variable.
describe("Square", () => {
    describe("renderStarterSvg", () => {
        it("should return the first section of SVG code necessary to create a square logo", () => {
            const square = new Square("SDF", "black", "square", "blue");
            expect(square.renderStarterSvg()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
        });
    });

    describe("renderShape", () => {
        it("should return the second section of SVG code necessary to create a square logo, involving rectangle dimensions and shape color; given a shapeColor of blue, the fill should be set to blue", () => {
            const square = new Square("SDF", "black", "square", "blue");
            expect(square.renderShape()).toEqual(`<rect width="160" height="160" x="60" y="20" rx="2" ry="2" fill="blue" />`);
        });
    });

    describe("renderShape", () => {
        it("should return the second section of SVG code necessary to create a square logo, involving rectangle dimensions and shape color; given a shapeColor of #ee82ee, the fill should be set to #ee82ee", () => {
            const square = new Square("SDF", "black", "square", "#ee82ee");
            expect(square.renderShape()).toEqual(`<rect width="160" height="160" x="60" y="20" rx="2" ry="2" fill="#ee82ee" />`);
        });
    });

    describe("renderTextColor", () => {
        it("should return the third section of SVG code necessary to create a square logo, involving text position, size, and color; given a textColor of black, the fill should be set to black", () => {
            const square = new Square("SDF", "black", "square", "blue");
            expect(square.renderTextColor()).toEqual(`<text x="140" y="120" font-size="60" text-anchor="middle" fill="black">`);
        });
    });

    describe("renderTextColor", () => {
        it("should return the third section of SVG code necessary to create a square logo, involving text position, size, and color; given a textColor of #6a5acd, the fill should be set to #6a5acd", () => {
            const square = new Square("SDF", "#6a5acd", "square", "blue");
            expect(square.renderTextColor()).toEqual(`<text x="140" y="120" font-size="60" text-anchor="middle" fill="#6a5acd">`);
        });
    });

    describe("renderText", () => {
        it("should return the last section of SVG code necessary to create a square logo, involving the actual text for the logo; given the textForShape is 'ROE', 'ROE' should appear before the text closing tag", () => {
            const square = new Square("ROE", "black", "square", "blue");
            expect(square.renderText()).toEqual(`ROE</text>
</svg>`);
        });
    });

    describe("renderText", () => {
        it("should return the last section of SVG code necessary to create a square logo, involving the actual text for the logo; given the textForShape is 'roe', 'roe' should appear before the text closing tag", () => {
            const square = new Square("roe", "black", "square", "blue");
            expect(square.renderText()).toEqual(`roe</text>
</svg>`);
        });
    });
});