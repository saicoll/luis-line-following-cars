radio.onReceivedNumber(function (receivedNumber) {
    NUMERO = receivedNumber
    basic.showNumber(NUMERO)
})
function DERECHA () {
    wuKong.setAllMotor(30, 0)
}
input.onButtonPressed(Button.A, function () {
    LINE = 101
    AI = 201
})
function IZQUIERDA () {
    wuKong.setAllMotor(0, 30)
}
function STOP () {
    wuKong.setAllMotor(0, 0)
}
function ADELANTE () {
    wuKong.setAllMotor(30, 30)
}
let AI = 0
let LINE = 0
let NUMERO = 0
radio.setGroup(1)
NUMERO = 2
LINE = 3
basic.showIcon(IconNames.Tortoise)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (NUMERO == 100) {
        LINE = 100
        NUMERO = 0
    }
    if (NUMERO == 200) {
        AI = 200
        NUMERO = 0
    }
    if (LINE == 101 && AI == 201) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            ADELANTE()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            DERECHA()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            IZQUIERDA()
        }
    } else if (LINE == 100 || AI == 200) {
        STOP()
        basic.pause(4000)
        AI = 201
        LINE = 101
    }
})
