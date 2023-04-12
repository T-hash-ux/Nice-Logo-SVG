// Imported classes that will be test from the shape modules
const { Square, Triangle, Circle, LogoRenderer } = require('./shapes');

// These are the test cases for each shape

test('Square render function', () => {
    const square = new Square ('ABC', 'black', 'red');
    expect(square.render()).toEqual(`<rect width="120" height="120" x="90" y="40" fill="black" />`);
});

test('Triangle render function', () => {
    const triangle = new Triangle('ABC', 'black', 'red');
    expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="black" />`);
});

test('Circle render function', () => {
    const circle = new Circle('ABC', 'black', 'red');
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="black" />`);
  });


  