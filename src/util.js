'use strict'

/**
 * Returns true if all search items are present in the target array
 * @method includes
 * @param  {Array}    target  The array to be searched
 * @param  {Array}    search  The search items
 * @return {Boolean}          True if all items present
 */
function includes (target, ...search) {
  return search.every(elem => target.includes(elem))
}

export {
  includes
}
