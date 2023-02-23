// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Shape {
    constructor() {
        this.color = " "
    }
    getColor (color) {
        this.color = color
    }
};

module.exports = Shape