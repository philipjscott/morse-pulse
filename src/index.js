import Morsey from 'morsey'
import pulsemap from './pulsemap'
import { $ } from './util'

const morse = new Morsey()
const message = 'hello, world'
const hello = morse.encode(message)
const pulses = pulsemap(hello)

$('#morse').addEventListener('click', (e) => {
  window.navigator.vibrate(pulses)
})
