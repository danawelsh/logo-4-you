const Circle = require("../lib/circle");
describe ("circle", () => {
    describe ("test property", () => {
        const circle = new Circle (5, "red")
        test("test.color", () => {
            expect (circle.getColor()).toEqual("red")
        })
        test("radius of a circle", () => {
            expect(circle.getRadius()).toEqual(5)
        })
        test("test area of a circle", () => {
            expect(circle.getArea()).toEqual(78.5)
        })
    })
});