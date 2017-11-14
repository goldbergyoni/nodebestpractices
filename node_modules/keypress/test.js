
var keypress = require('./')
keypress(process.stdin)

if (process.stdin.setRawMode)
  process.stdin.setRawMode(true)
else
  require('tty').setRawMode(true)

process.stdin.on('keypress', function (c, key) {
  console.log(0, c, key)
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause()
  }
})
process.stdin.on('mousepress', function (mouse) {
  console.log(mouse)
})

keypress.enableMouse(process.stdout)
process.on('exit', function () {
  //disable mouse on exit, so that the state is back to normal
  //for the terminal.
  keypress.disableMouse(process.stdout)
})

process.stdin.resume()

