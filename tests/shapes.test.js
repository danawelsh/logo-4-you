// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


const Shape = require("../lib/shapes");
const shape = new Shape ()
shape.setColor ("red")
describe ("shapes", () => {
    describe ("test property", () => {
        test("test.color", () => {
            expect (shape.color).toEqual("red")
        })
    })
})