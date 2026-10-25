// Tests: not included when the extension is used in another project
// Simulates the remote: A = next button, B = decode and show name

let codes = [0x45, 0x46, 0x47, 0x44, 0x40, 0x43, 0x07, 0x15, 0x09,
    0x19, 0x16, 0x0D, 0x1C, 0x18, 0x52, 0x08, 0x5A, 0x99]
let index = 0

input.onButtonPressed(Button.A, function () {
    index = (index + 1) % codes.length
    basic.showNumber(index)
})

input.onButtonPressed(Button.B, function () {
    let button = IrButtons.decode(codes[index])
    basic.showString(IrButtons.name(button))
})