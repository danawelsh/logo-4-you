const Square = require("../lib/square");
describe ("square", () => {
    describe ("test property", () => {
        const square = new Square (5, "red")
        test("test.color", () => {
            expect (square.getColor()).toEqual("red")
        })
        test("render", () => {
            expect (square.render()).toEqual(`<rect x="30" y="30" width="30" height="30" fill="red" />`)
        })
    })
});