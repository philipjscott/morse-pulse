'use strict'

import { includes } from './util'

/**
 * Extends morse code; adds explicit 1-dot silence denoted by the '*' character
 * Also replaces ' / ' with '/'; extended morse code can be directly mapped to delays
 * @method extend
 * @param  {String} morse The original morse code
 * @return {String}       The extended morse code
 */
function extend (morse) {
  const noiseGlyphes = ['.', '-']

  return morse.replace(' / ', '/').split('').reduce((acc, curr, i, arr) => {
    return includes(noiseGlyphes, curr, arr[i + 1])
      ? acc + curr + '*'
      : acc + curr
  }, '')
}

export default extend
