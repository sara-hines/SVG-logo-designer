// The generateSvg function is required to allow testing of its functionality.
const generateSvg = require("../lib/fn-generate-svg");


// For each shape (circle, triangle, and square), function generateSvg is tested to ensure it creates the correct, completed SVG code when given different values for text, text color, and shape color. Colors given as color keywords and hexadecimal values are tested. Uppercase and lowercase letters are tested for the logo text.
describe("function generateSvg", () => {
    describe("function generateSvg", () => {
        it("should return the full SVG code to create a circle logo; given the logo text 'SWO', text color oldlace, shape=circle, and shape color midnightblue, SVG code for a logo meeting those criteria should be created", () => {

            const sampleAnswers = {
                textForShape: "SWO", 
                textColor: "oldlace", 
                shape: "circle", 
                shapeColor: "midnightblue"
            }

            expect(generateSvg(sampleAnswers)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="midnightblue" />
    <text x="150" y="120" font-size="55" text-anchor="middle" fill="oldlace">SWO</text>
</svg>`);
        });
    });
    
    describe("function generateSvg", () => {
        it("should return the full SVG code to create a circle logo; given the logo text 'Art', text color #00e2ff, shape=circle, and shape color #6a5acd, SVG code for a logo meeting those criteria should be created", () => {

            const sampleAnswers = {
                textForShape: "Art", 
                textColor: "#00e2ff", 
                shape: "circle", 
                shapeColor: "#6a5acd"
            }

            expect(generateSvg(sampleAnswers)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="#6a5acd" />
    <text x="150" y="120" font-size="55" text-anchor="middle" fill="#00e2ff">Art</text>
</svg>`);
        });
    });

    describe("function generateSvg", () => {
        it("should return the full SVG code to create a triangle logo; given the logo text 'noe', text color seashell, shape=triangle, and shape color darkslategrey, SVG code for a logo meeting those criteria should be created", () => {

            const sampleAnswers = {
                textForShape: "noe", 
                textColor: "seashell", 
                shape: "triangle", 
                shapeColor: "darkslategrey"
            }

            expect(generateSvg(sampleAnswers)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 270,190 30,190" fill="darkslategrey" />
    <text x="150" y="150" font-size="55" text-anchor="middle" fill="seashell">noe</text>
</svg>`);
        });
    });

    describe("function generateSvg", () => {
        it("should return the full SVG code to create a triangle logo; given the logo text 'EVO', text color #EBC07D, shape=triangle, and shape color #660F0F, SVG code for a logo meeting those criteria should be created", () => {

            const sampleAnswers = {
                textForShape: "EVO", 
                textColor: "#EBC07D", 
                shape: "triangle", 
                shapeColor: "#660F0F"
            }

            expect(generateSvg(sampleAnswers)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 270,190 30,190" fill="#660F0F" />
    <text x="150" y="150" font-size="55" text-anchor="middle" fill="#EBC07D">EVO</text>
</svg>`);
        });
    });
    
    describe("function generateSvg", () => {
        it("should return the full SVG code to create a square logo; given the logo text 'BAT', text color white, shape=square, and shape color purple, SVG code for a logo meeting those criteria should be created", () => {
            const sampleAnswers = {
                textForShape: "BAT", 
                textColor: "white", 
                shape: "square", 
                shapeColor: "purple"
            }

            expect(generateSvg(sampleAnswers)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="160" x="60" y="20" rx="2" ry="2" fill="purple" />
    <text x="140" y="120" font-size="60" text-anchor="middle" fill="white">BAT</text>
</svg>`);
        });
    });

    describe("function generateSvg", () => {
        it("should return the full SVG code to create a square logo; given the logo text 'cam', text color #FFFAF0, shape=square, and shape color #4B0082, SVG code for a logo meeting those criteria should be created", () => {
            const sampleAnswers = {
                textForShape: "cam", 
                textColor: "#FFFAF0", 
                shape: "square", 
                shapeColor: "#4B0082"
            }

            expect(generateSvg(sampleAnswers)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="160" x="60" y="20" rx="2" ry="2" fill="#4B0082" />
    <text x="140" y="120" font-size="60" text-anchor="middle" fill="#FFFAF0">cam</text>
</svg>`);
        });
    });
});