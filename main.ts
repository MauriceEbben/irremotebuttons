/**
 * Buttons on the remote control
 */
enum IrButton {
    //% block="unknown"
    Unknown,
    //% block="1"
    Button1,
    //% block="2"
    Button2,
    //% block="3"
    Button3,
    //% block="4"
    Button4,
    //% block="5"
    Button5,
    //% block="6"
    Button6,
    //% block="7"
    Button7,
    //% block="8"
    Button8,
    //% block="9"
    Button9,
    //% block="0"
    Button0,
    //% block="*"
    Star,
    //% block="#"
    Hash,
    //% block="OK"
    Ok,
    //% block="up"
    Up,
    //% block="down"
    Down,
    //% block="left"
    Left,
    //% block="right"
    Right
}

/**
 * Helper blocks to convert IR codes to buttons
 */
//% weight=100 color="#AA278D" icon="\uf1eb" block="IR Buttons"
namespace IrButtons {

    /**
     * Converts a raw IR code to a button
     * @param code the received IR code
     */
    //% blockId=irbuttons_decode
    //% block="decode IR code %code"
    //% weight=100
    export function decode(code: number): IrButton {
        switch (code) {
            case 0x45: return IrButton.Button1
            case 0x46: return IrButton.Button2
            case 0x47: return IrButton.Button3
            case 0x44: return IrButton.Button4
            case 0x40: return IrButton.Button5
            case 0x43: return IrButton.Button6
            case 0x07: return IrButton.Button7
            case 0x15: return IrButton.Button8
            case 0x09: return IrButton.Button9
            case 0x19: return IrButton.Button0
            case 0x16: return IrButton.Star
            case 0x0D: return IrButton.Hash
            case 0x1C: return IrButton.Ok
            case 0x18: return IrButton.Up
            case 0x52: return IrButton.Down
            case 0x08: return IrButton.Left
            case 0x5A: return IrButton.Right
            default: return IrButton.Unknown
        }
    }

    /**
     * A button as a constant, to compare against
     */
    //% blockId=irbuttons_button
    //% block="%button"
    //% weight=90
    export function button(button: IrButton): IrButton {
        return button
    }

    /**
     * Returns the name of a button as text
     */
    //% blockId=irbuttons_name
    //% block="name of %button"
    //% weight=80
    export function name(button: IrButton): string {
        switch (button) {
            case IrButton.Button1: return "Button 1"
            case IrButton.Button2: return "Button 2"
            case IrButton.Button3: return "Button 3"
            case IrButton.Button4: return "Button 4"
            case IrButton.Button5: return "Button 5"
            case IrButton.Button6: return "Button 6"
            case IrButton.Button7: return "Button 7"
            case IrButton.Button8: return "Button 8"
            case IrButton.Button9: return "Button 9"
            case IrButton.Button0: return "Button 0"
            case IrButton.Star: return "Button *"
            case IrButton.Hash: return "Button #"
            case IrButton.Ok: return "Button OK"
            case IrButton.Up: return "Button Up"
            case IrButton.Down: return "Button Down"
            case IrButton.Left: return "Button Left"
            case IrButton.Right: return "Button Right"
            default: return "Unknown"
        }
    }
}