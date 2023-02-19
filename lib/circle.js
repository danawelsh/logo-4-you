const Shape = require("./shapes");
class Circle extends Shape {
    constructor (radius, color) {
        super(color)
        this.radius = radius
    }
    getRadius () {
        return this.radius
    }
    getArea () {
        return 3.14 * this.radius * this.radius
    }
};

module.exports = Circle