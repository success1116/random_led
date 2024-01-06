input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < 次數) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈號(a + 1)
        }
    }
})
function 燈號 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = num / 5 - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.B, function () {
    if (次數 < 26) {
        次數 += 1
        basic.showNumber(次數)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        led.setBrightness(150)
    }
})
let y = 0
let x = 0
let a = 0
let n = 0
let list: number[] = []
let 次數 = 0
次數 = 0
