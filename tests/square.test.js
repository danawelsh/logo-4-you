const Square = require("../lib/square");
const square = new Square ()
square.setColor ("red")
describe ("square", () => {
    describe ("test property", () => {
        test("test.color", () => {
            expect (square.color).toEqual("red")
        })
    })
});