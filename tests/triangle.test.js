const Triangle = require("../lib/triangle");
describe ("triangle", () => {
    describe ("test property", () => {
        const triangle = new Triangle (5, 7, "red")
        test("test.color", () => {
            expect (triangle.getColor()).toEqual("red")
        })
        test("render", () => {
            expect (circle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`)
        })
    })
});