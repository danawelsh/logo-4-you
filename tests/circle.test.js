const Circle = require("../lib/circle");
const circle = new Circle ()
circle.setColor ("red")
describe ("circle", () => {
    describe ("test property", () => {
        test("test.color", () => {
            expect (circle.color).toEqual("red")
        })
    })
});