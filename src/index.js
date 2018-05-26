import Morsey from 'morsey'
import pulsemap from './pulsemap'
import { $ } from './util'

const morse = new Morsey()
const message = 'hello, world'
const hello = morse.encode(message)
const pulses = pulsemap(hello)

$('#pulsify').addEventListener('click', (e) => {
  $('#morse').innerHTML = hello
  window.navigator.vibrate(pulses)
})
