// The Triangle class is required to allow testing of its methods. 
const { Triangle } = require("../lib/shapes.js");


// Each method of the Triangle class is tested to ensure that it returns the appropriate SVG code based on the user's specifications. The SVG returned by the renderStarterSvg method requires no customization, but each of the other methods are tested based on their ability to return customized SVG code when given the value for a variable.
describe("Triangle", () => {
    describe("renderStarterSvg", () => {
        it("should return the first section of SVG code necessary to create a triangle logo", () => {
            const triangle = new Triangle("SDF", "black", "triangle", "blue");
            expect(triangle.renderStarterSvg()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
        });
    });

    describe("renderShape", () => {
        it("should return the second section of SVG code necessary to create a triangle logo, involving polygon points and shape color; given a shapeColor of blue, the fill should be set to blue", () => {
            const triangle = new Triangle("SDF", "black", "triangle", "blue");
            expect(triangle.renderShape()).toEqual(`<polygon points="150,10 270,190 30,190" fill="blue" />`);
        });
    });

    describe("renderShape", () => {
        it("should return the second section of SVG code necessary to create a triangle logo, involving polygon points and shape color; given a shapeColor of #ff2dd2, the fill should be set to #ff2dd2", () => {
            const triangle = new Triangle("SDF", "black", "triangle", "#ff2dd2");
            expect(triangle.renderShape()).toEqual(`<polygon points="150,10 270,190 30,190" fill="#ff2dd2" />`);
        });
    });

    describe("renderTextColor", () => {
        it("should return the third section of SVG code necessary to create a triangle logo, involving text position, size, and color; given a textColor of black, the fill should be set to black", () => {
            const triangle = new Triangle("SDF", "black", "triangle", "blue");
            expect(triangle.renderTextColor()).toEqual(`<text x="150" y="150" font-size="55" text-anchor="middle" fill="black">`);
        });
    });

    describe("renderTextColor", () => {
        it("should return the third section of SVG code necessary to create a triangle logo, involving text position, size, and color; given a textColor of #ffa500, the fill should be set to #ffa500", () => {
            const triangle = new Triangle("SDF", "#ffa500", "triangle", "blue");
            expect(triangle.renderTextColor()).toEqual(`<text x="150" y="150" font-size="55" text-anchor="middle" fill="#ffa500">`);
        });
    });

    describe("renderText", () => {
        it("should return the last section of SVG code necessary to create a triangle logo, involving the actual text for the logo; given the textForShape is 'BAM', 'BAM' should appear before the text closing tag", () => {
            const triangle = new Triangle("BAM", "black", "triangle", "blue");
            expect(triangle.renderText()).toEqual(`BAM</text>
</svg>`);
        });
    });

    describe("renderText", () => {
        it("should return the last section of SVG code necessary to create a triangle logo, involving the actual text for the logo; given the textForShape is 'bam', 'bam' should appear before the text closing tag", () => {
            const triangle = new Triangle("bam", "black", "triangle", "blue");
            expect(triangle.renderText()).toEqual(`bam</text>
</svg>`);
        });
    });
});