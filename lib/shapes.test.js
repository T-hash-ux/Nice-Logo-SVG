// Imported classes that will be test from the shape modules
const { Square, Triangle, Circle, LogoRenderer } = require('./shapes');

// These are the test cases for each shape

test('Square render function', () => {
    const square = new Square ('ABC', 'black', 'red');
    expect(square.render()).toEqual(`<rect width="120" height="120" x="90" y="40" fill="red" />`);
});

test('Triangle render function', () => {
    const triangle = new Triangle('ABC', 'black', 'red');
    expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
});

test('Circle render function', () => {
    const circle = new Circle('ABC', 'black', 'red');
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
  });

// This test case is for the LogoRenderer class's putText, putShape and renderLogo methods.

test('LogoRenderer putText, putShape, and renderLogo functions', () => {
    const square = new Square ('ABC', 'black', 'red');
    const logoRenderer = new LogoRenderer();
    logoRenderer.putText('ABC', 'black');
    logoRenderer.putShape(square);

    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" x="90" y="40" fill="red" /><text x="150" y="110" font-size="40" text-anchor="middle" fill="black">ABC</text></svg>`;
    expect(logoRenderer.renderLogo()).toEqual(expectedSVG);
});