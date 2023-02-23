const Shape = require("./shapes");
class Square extends Shape {
    render () {
        return `<rect x="30" y="30" width="30" height="30" fill="${this.color}" />`
     }
};

module.exports = Square