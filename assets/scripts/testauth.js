'use strict'

const testAuthFunction = function () {
  console.log('Hey, this worked')
  return 1
}

const testOtherAuthFunction = function () {
  console.log('Hey, this worked too')
  return 1
}

module.exports = {
  testAuthFunction: testAuthFunction,
  testOtherAuthFunction: testOtherAuthFunction
}
