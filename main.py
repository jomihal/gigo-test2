"""

Κινητήρας --> F

Pin 14 --> Speed

Pin 13 --> Direction

"""
def Κινητήρας(Ταχύτητα: number, Φορά: number, Θέση: str):
    if Θέση == 'F':
        sensors.dd_mmotor(AnalogPin.P13, Φορά, AnalogPin.P14, Ταχύτητα)

def on_forever():
    pass
basic.forever(on_forever)
