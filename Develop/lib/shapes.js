class Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        this.textForShape = textForShape;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor
    }
}


class Circle extends Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        super(textForShape, textColor, shape, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textForShape}</text>
      
</svg>`
    }
}


class Triangle extends Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        super(textForShape, textColor, shape, shapeColor);
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

<polygon points="150,10 270,190 30,190" fill="${this.shapeColor}" />
    
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textForShape}</text>
    
</svg>`
    }
}


class Square extends Shape {
    constructor(textForShape, textColor, shape, shapeColor) {
        super(textForShape, textColor, shape, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect width="160" height="160" x="60" y="20" rx="2" ry="2" fill="${this.shapeColor}" />
      
<text x="140" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textForShape}</text>
      
</svg>`
    }
}


function generateSvg(answers) {
    if (answers.shape == "circle") {
        const circle = new Circle(answers.textForShape, answers.textColor, answers.shape, answers.shapeColor);
        return circle.render();
    } else if (answers.shape == "triangle") {
        const triangle = new Triangle(answers.textForShape, answers.textColor, answers.shape, answers.shapeColor);
        return triangle.render();
    } else if (answers.shape == "square") {
        const square = new Square(answers.textForShape, answers.textColor, answers.shape, answers.shapeColor);
        return square.render();
    }
}


module.exports = generateSvg;