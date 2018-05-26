'use strict'

import extend from './extend.js'

/**
 * Maps morse code to an array of pulses and delays
 * @method pulsemap
 * @param  {morse}  morse           Morse code that uses [.-/ ] as glyphes
 * @param  {Object} config          Configuation object
 * @param  {Number} [config.factor] Delay factor
 * @return {Array}                  Array of numbers denoting signals, in milliseconds
 */
function pulsemap (morse, config) {
  const factor = config.factor || 1000

  return extend(morse).split('').map((symbol) => {
    let delay

    switch (symbol) {
      case '*':
        delay = 1
        break
      case '.':
        delay = 1
        break
      case '-':
        delay = 3
        break
      case ' ':
        delay = 3
        break
      case '/':
        delay = 5
        break
    }

    return delay * factor
  })
}

export default pulsemap
