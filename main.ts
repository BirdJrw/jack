input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
for (let index = 0; index < 2; index++) {
    basic.showString("Hi, how are you?")
}
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    . . # . .
    `)
