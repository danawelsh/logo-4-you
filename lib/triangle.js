const Shape = require("./shapes");
class Triangle extends Shape {
    constructor (base, height, color) {
        super(color)
        this.base = base
        this.height = height
    }
    getBase () {
        return this.base
    }
    getHeight () {
        return this.height
    }
    getArea () {
        return 0.5 * this.base * this.height
    }
};

module.exports = Triangle