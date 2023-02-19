const Square = require("../lib/square");
describe ("square", () => {
    describe ("test property", () => {
        const square = new Square (5, "red")
        test("test.color", () => {
            expect (square.getColor()).toEqual("red")
        })
        test("side of a square", () => {
            expect(square.getSide()).toEqual(5)
        })
        test("test area of a square", () => {
            expect(square.getArea()).toEqual(25)
        })
    })
});