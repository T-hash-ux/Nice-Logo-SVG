// Set up shape classes that represent a generic shape with letters, text color, and shape color properties
class Shape {
    constructor(colorText, colorShape, text) {
        this.colorText = colorText;
        this.colorShape = colorShape;
        this.text = text;
    }
// Method to change the color of the shape

    changeShapeColor(newShapeColor) {
        this.shapeColor = newShapeColor;
    }
}
// Specific shape class that extends Shape class and represents a Square shape
class Square extends Shape {
    render() {

        return `<rect width="120" height="120" x="90" y="40" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class LogoRenderer {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
// This section renders the logo with the shape and the text elements
    renderLogo() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }

    putText(colorText, text) {
        this.textElement = `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${colorText}">${text}</text>`;
    }

    putShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = { Square, Triangle, Circle, LogoRenderer };