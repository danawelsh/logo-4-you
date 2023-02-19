const Shape = require("./shapes");
class Square extends Shape {
    render() {
        return`<rect x="10" y="10" width="10" height="10" fill= "${this.color}" />`
    }
};

module.exports = Square