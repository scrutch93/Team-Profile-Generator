const Employee = require("../lib/Employee")

test("I can instantiate Employee objects (make an instance of an object with a class)", () => {
    const testElement = new Employee()
    expect(typeof(testElement)).toBe("object");
})

test("I can declare a name in the object", () => {
    const testVal = "Alice";
    const testElement = new Employee(testVal)

    expect(testElement.name).toBe(testVal)
})
