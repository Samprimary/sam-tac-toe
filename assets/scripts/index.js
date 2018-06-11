'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

   $('#A1').click(function() {
     console.log("A1, The Top Left Tile Was Clicked")
   })

   $('#A2').click(function() {
     console.log("A2, The Top Middle Tile Was Clicked")
   })

   $('#A3').click(function() {
     console.log("A3, The Top Left Tile Was Clicked")
   })

   $('#B1').click(function() {
     console.log("B1, The Middle Left Tile Was Clicked")
   })

   $('#B2').click(function() {
     console.log("B2, The PIVOTAL CENTRAL Tile Was Clicked")
   })

   $('#B3').click(function() {
     console.log("B3, The Middle Left Tile Was Clicked")
   })

   $('#C1').click(function() {
     console.log("C1, The Bottom Left Tile Was Clicked")
   })

   $('#C2').click(function() {
     console.log("C2, The Bottom Middle Tile Was Clicked")
   })

   $('#C3').click(function() {
     console.log("C3, The Bottom Left Tile Was Clicked")
   })

})

// require stuff
