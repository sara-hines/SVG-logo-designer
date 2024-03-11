// The Shape class allows for the Circle, Triangle, and Square child classes to inherit shared properties and access to the renderStarterSvg method.
class Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        this.textForShape = textForShape;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    renderStarterSvg() {
        // The renderStarterSvg method provides the first line of SVG code, including the SVG version, total width and height of the image, and XML namespace.
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    }
}


// Through 4 different methods, the Circle class can create all necessary lines of SVG code needed for a circle logo, with a maximum of one variable per method. Isolating each variable into its own section of SVG code allows for more precise unit testing.
class Circle extends Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        super(textForShape, textColor, shape, shapeColor);
    }
    renderStarterSvg() {
        return super.renderStarterSvg();
    }
    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
    renderTextColor() {
        return `<text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.textColor}">`;
    }
    renderText() {
        return `${this.textForShape}</text>
</svg>`;
    }
}


// The Triangle class provides the functionality to render all of the SVG for a triangle logo, including polygon points, shape color, and the size, positioning, color, and content of the text.
class Triangle extends Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        super(textForShape, textColor, shape, shapeColor);
    }
    renderStarterSvg() {
        return super.renderStarterSvg();
    }
    renderShape() {
        return `<polygon points="150,10 270,190 30,190" fill="${this.shapeColor}" />`;
    }
    renderTextColor() {
        return `<text x="150" y="150" font-size="55" text-anchor="middle" fill="${this.textColor}">`;
    }
    renderText() {
        return `${this.textForShape}</text>
</svg>`;
    }
}


// The Square class, similar to the Circle and Triangle classes, renders customized lines of SVG code based on user input.
class Square extends Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        super(textForShape, textColor, shape, shapeColor);
    }
    renderStarterSvg() {
        return super.renderStarterSvg();
    }
    renderShape() {
        return `<rect width="160" height="160" x="60" y="20" rx="2" ry="2" fill="${this.shapeColor}" />`;
    }
    renderTextColor() {
        return `<text x="140" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
    }
    renderText() {
        return `${this.textForShape}</text>
</svg>`;
    }
}


module.exports = {
    Circle, 
    Triangle, 
    Square
}