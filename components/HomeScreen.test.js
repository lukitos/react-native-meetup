const HomeScreen = require("./HomeScreen")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new HomeScreen.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
