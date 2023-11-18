// Pin 14 --> Speed
// Pin 13 --> Direction
// Pin 14 --> Speed
// 
function Κινητήρας (Ταχύτητα: number, Φορά: number, Θύρα: string) {
    if (Θύρα == "E") {
        sensors.DDMmotor(
        AnalogPin.P15,
        Φορά,
        AnalogPin.P16,
        Ταχύτητα
        )
    } else {
        if (Θύρα == "F") {
            sensors.DDMmotor(
            AnalogPin.P13,
            Φορά,
            AnalogPin.P14,
            Ταχύτητα
            )
        } else {
            if (Θύρα == "G") {
                sensors.DDMmotor(
                AnalogPin.P12,
                Φορά,
                AnalogPin.P2,
                Ταχύτητα
                )
            } else {
                if (Θύρα == "H") {
                    sensors.DDMmotor(
                    AnalogPin.P1,
                    Φορά,
                    AnalogPin.P8,
                    Ταχύτητα
                    )
                }
            }
        }
    }
}
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
})
