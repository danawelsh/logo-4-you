const Triangle = require("../lib/triangle");
describe ("triangle", () => {
    describe ("test property", () => {
        const triangle = new Triangle (5, 7, "red")
        test("test.color", () => {
            expect (triangle.getColor()).toEqual("red")
        })
        test("base of a triangle", () => {
            expect(triangle.getBase()).toEqual(5)
        })
        test("height of a triangle", () => {
            expect(triangle.getHeight()).toEqual(7)
        })
        test("test area of a triangle", () => {
            expect(triangle.getArea()).toEqual(17.5)
        })
    })
});