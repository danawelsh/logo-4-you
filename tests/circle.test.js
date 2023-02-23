const Circle = require("../lib/circle");
describe ("circle", () => {
    describe ("test property", () => {
        const circle = new Circle ()
        circle.getColor("red")
        test("test.color", () => {
            expect (circle.color).toEqual("red")
        })
        test("render", () => {
            expect (circle.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="red" />`)
        })
        // test("radius of a circle", () => {
        //     expect(circle.getRadius()).toEqual(5)
        // })
        // test("test area of a circle", () => {
        //     expect(circle.getArea()).toEqual(78.5)
        // })
    })
});