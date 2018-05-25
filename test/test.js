/* global describe, it */

'use strict'

import { expect } from 'chai'
import pulsemap from '../src/pulsemap'
import extend from '../src/extend'
import { includes } from '../src/util'

describe('pulsemap library', () => {
  describe('includes returns whether all search items are included', () => {
    it('includes returns true when all search items are included', () => {
      const target = ['foo', 'bar', 'test', 'helloooo', 'a', 'b', 'c', 'd', 'e']
      const longSearch = ['foo', 'bar', 'test', 'a', 'b', 'c']

      expect(includes(target, 'test', 'e')).to.equal(true)
      expect(includes(target, ...longSearch)).to.equal(true)
    })

    it('includes returns false when some search items aren\'t included', () => {
      const target = ['foo', 'bar', 'test', 'helloooo', 'a', 'b', 'c', 'd', 'e']
      const longSearch = ['foo', 'bar', 'test', 'a', 'b', 'NOT_INCLUDED']

      expect(includes(target, 'NOT_INCLUDED')).to.equal(false)
      expect(includes(target, ...longSearch)).to.equal(false)
    })

    it('includes returns true if no search items provided', () => {
      const target = ['foo', 'bar', 'test', 'helloooo', 'a', 'b', 'c', 'd', 'e']

      expect(includes(target)).to.equal(true)
    })
  })

  describe('extend maps morse code to extended morse', () => {
    it('correctly maps a simple morse code string', () => {
      const hello = '.... . .-.. .-.. ---'
      const extended = '.*.*.*. . .*-*.*. .*-*.*. -*-*-'

      expect(extend(hello)).to.equal(extended)
    })

    it('correctly maps a "complicated" morse code string', () => {
      const helloWorld = '.... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -..'
      const extended = '.*.*.*. . .*-*.*. .*-*.*. -*-*- -*-*.*.*-*-/.*-*- -*-*- .*-*. .*-*.*. -*.*.'

      expect(extend(helloWorld)).to.equal(extended)
    })
  })

  describe('pulsemap maps morse code strings to numbers', () => {
    it('correctly maps a simple morse code string', () => {
      const hello = '.... . .-.. .-.. ---'
      const pulses = [
        100, 100, 100, 100, 100, 100, 100, 300,
        100, 300,
        100, 100, 300, 100, 100, 100, 100, 300,
        100, 100, 300, 100, 100, 100, 100, 300,
        300, 100, 300, 100, 300
      ]

      expect(pulsemap(hello)).to.deep.equal(pulses)
    })

    it('correctly maps a "complicated" morse code string', () => {
      const helloWorld = '.... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -..'
      const pulses = [
        100, 100, 100, 100, 100, 100, 100, 300,
        100, 300,
        100, 100, 300, 100, 100, 100, 100, 300,
        100, 100, 300, 100, 100, 100, 100, 300,
        300, 100, 300, 100, 300, 300,
        300, 100, 300, 100, 100, 100, 100, 100, 300, 100, 300, 500,
        100, 100, 300, 100, 300, 300,
        300, 100, 300, 100, 300, 300,
        100, 100, 300, 100, 100, 300,
        100, 100, 300, 100, 100, 100, 100, 300,
        300, 100, 100, 100, 100
      ]

      expect(pulsemap(helloWorld)).to.deep.equal(pulses)
    })
  })
})
