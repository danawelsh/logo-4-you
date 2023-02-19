const Triangle = require("../lib/triangle");
const triangle = new Triangle ()
triangle.setColor ("red")
describe ("triangle", () => {
    describe ("test property", () => {
        test("test.color", () => {
            expect (triangle.color).toEqual("red")
        })
    })
});