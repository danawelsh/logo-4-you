const Shape = require("./shapes");
class Square extends Shape {
    constructor (side, color) {
        super(color)
        this.side = side
    }
    getSide () {
        return this.side
    }
    getArea () {
        return this.side * this.side
    }
};

module.exports = Square