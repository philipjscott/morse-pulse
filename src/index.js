import Morsey from 'morsey'
import pulsemap from './pulsemap'
import { $ } from './util'

const morse = new Morsey()

let encoded
let pulses

$('#morse-form').addEventListener('submit', (e) => {
  e.preventDefault()

  encoded = morse.encode($('#message').value)
  pulses = pulsemap(encoded, { factor: 500 })

  $('#morse').innerHTML = encoded

  window.navigator.vibrate(pulses)
})
