'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  let oWins = 0 // how many times O won
  let xWins = 0 // how many times X won
  let tieWins = 0 // how many ties
  // these get replaced later with API stuff
  let xSelect // x has selected a tile (may need to string)
  let oSelect // o has selected a tile
  // let xTurn = 1 // the turn is x's at present (may need to string)
  // let oTurn = 0 // the turn is o's at present (')
  // xTurn and oTurn are now values of 1 and 0
  let turnPlayer = 0 // turnPlayer switches between states 0 and 1
  let turnsTaken = 0 // turnstaken ends draws in winCheck
  let a1clicked = false // all tiles start unclicked
  let a2clicked = false
  let a3clicked = false
  let b1clicked = false
  let b2clicked = false
  let b3clicked = false
  let c1clicked = false
  let c2clicked = false
  let c3clicked = false
  let a1                // all tiles start undefined
  let a2
  let a3
  let b1
  let b2
  let b3
  let c1
  let c2
  let c3

  $('#A1').click(function () {
    console.log('A1, The Top Left Tile Was Clicked')
    if (a1clicked === false && turnPlayer === 0) {
      a1clicked = true
      a1 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes A1.')
      console.log('Turn', turnsTaken)
      $('#A1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a1clicked === false && turnPlayer === 1) {
      a1clicked = true
      a1 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes A1.')
      console.log('Turn', turnsTaken)
      $('#A1').html('<img src="ographic.png">')
      winCheck()
    } else if (a1clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#A2').click(function () {
    console.log('A2, The Top Middle Tile Was Clicked')
    if (a2clicked === false && turnPlayer === 0) {
      a2clicked = true
      a2 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes A2.')
      console.log('Turn', turnsTaken)
      $('#A2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a2clicked === false && turnPlayer === 1) {
      a2clicked = true
      a2 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes A2.')
      console.log('Turn', turnsTaken)
      $('#A2').html('<img src="ographic.png">')
      winCheck()
    } else if (a2clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#A3').click(function () {
    console.log('A3, The Top Left Tile Was Clicked')
    if (a3clicked === false && turnPlayer === 0) {
      a3clicked = true
      a3 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes A3.')
      console.log('Turn', turnsTaken)
      $('#A3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a3clicked === false && turnPlayer === 1) {
      a3clicked = true
      a3 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes A3.')
      console.log('Turn', turnsTaken)
      $('#A3').html('<img src="ographic.png">')
      winCheck()
    } else if (a3clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#B1').click(function () {
    console.log('B1, The Middle Left Tile Was Clicked')
    if (b1clicked === false && turnPlayer === 0) {
      b1clicked = true
      b1 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes B1.')
      console.log('Turn', turnsTaken)
      $('#B1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b1clicked === false && turnPlayer === 1) {
      b1clicked = true
      b1 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes B1.')
      console.log('Turn', turnsTaken)
      $('#B1').html('<img src="ographic.png">')
      winCheck()
    } else if (b1clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#B2').click(function () {
    console.log('B2, The PIVOTAL CENTRAL Tile Was Clicked')
    if (b2clicked === false && turnPlayer === 0) {
      b2clicked = true
      b2 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes B2.')
      console.log('Turn', turnsTaken)
      $('#B2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b2clicked === false && turnPlayer === 1) {
      b2clicked = true
      b2 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes B2.')
      console.log('Turn', turnsTaken)
      $('#B2').html('<img src="ographic.png">')
      winCheck()
    } else if (b2clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#B3').click(function () {
    console.log('B3, The Middle Left Tile Was Clicked')
    if (b3clicked === false && turnPlayer === 0) {
      b3clicked = true
      b3 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes B3.')
      console.log('Turn', turnsTaken)
      $('#B3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b3clicked === false && turnPlayer === 1) {
      b3clicked = true
      b3 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes b3.')
      console.log('Turn', turnsTaken)
      $('#B3').html('<img src="ographic.png">')
      winCheck()
    } else if (b3clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#C1').click(function () {
    console.log('C1, The Bottom Left Tile Was Clicked')
    if (c1clicked === false && turnPlayer === 0) {
      c1clicked = true
      c1 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes C1.')
      console.log('Turn', turnsTaken)
      $('#C1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c1clicked === false && turnPlayer === 1) {
      c1clicked = true
      c1 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes C1.')
      console.log('Turn', turnsTaken)
      $('#C1').html('<img src="ographic.png">')
      winCheck()
    } else if (c1clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#C2').click(function () {
    console.log('C2, The Bottom Middle Tile Was Clicked')
    if (c2clicked === false && turnPlayer === 0) {
      c2clicked = true
      c2 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes C2.')
      console.log('Turn', turnsTaken)
      $('#C2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c2clicked === false && turnPlayer === 1) {
      c2clicked = true
      c2 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes C2.')
      console.log('Turn', turnsTaken)
      $('#C2').html('<img src="ographic.png">')
      winCheck()
    } else if (c2clicked === true) {
      console.log('That tile is taken.')
    }
  })

  $('#C3').click(function () {
    console.log('C3, The Bottom Left Tile Was Clicked')
    if (c3clicked === false && turnPlayer === 0) {
      c3clicked = true
      c3 = xSelect
      turnsTaken++
      turnPlayer = 1
      console.log('X takes C3.')
      console.log('Turn', turnsTaken)
      $('#C3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c3clicked === false && turnPlayer === 1) {
      c3clicked = true
      c3 = oSelect
      turnsTaken++
      turnPlayer = 0
      console.log('O takes C3.')
      console.log('Turn', turnsTaken)
      $('#C3').html('<img src="ographic.png">')
      winCheck()
    } else if (c3clicked === true) {
      console.log('That tile is taken.')
    }
  })
})

const resetBoard = function () {
  // remove all injected tiles with blank
  // reset turns to zero if wincheck does not
  // celebrate whoever won?
}

const winCheck = function () {
  // A1-A2-A3 FIRST ROW HORIZONTAL WIN CHECK
  if (a1 === xSelect && a2 === xSelect && a3 === xSelect) {
    console.log('X wins!')
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
  }
  else if (a1 === oSelect && a2 === oSelect && a3 === oSelect) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins )
    resetBoard()
    turnsTaken = 0
  }

  //B1-B2-B3 SECOND ROW HORIZONTAL WIN CHECK
  else if ( b1 === xSelect && b2 === xSelect && b3 === xSelect ) {
    console.log("X wins!")
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
  }
  else if ( b1 === oSelect && b2 === oSelect && b3 === oSelect ) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins)
    resetBoard()
    turnsTaken = 0
  }

  //C1-C2-C3 THIRD ROW HORIZONTAL WIN CHECK
  else if ( c1 === xSelect && c2 === xSelect && c3 === xSelect ) {
    console.log("X wins!")
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
  }
  else if ( c1 === oSelect && c2 === oSelect && c3 === oSelect ) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins)
    resetBoard()
    turnsTaken = 0
  }

  //A1-B1-C1 LEFT (1st) COLUMN VERTICAL WIN CHECK
  else if ( a1 === xSelect && b1 === xSelect && c1 === xSelect ) {
    console.log("X wins!")
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
      }
  else if ( a1 === oSelect && b1 === oSelect && c1 === oSelect ) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins )
    resetBoard()
    turnsTaken = 0
  }

  //A2-B2-C2 MIDDLE (2nd) COLUMN VERTICAL WIN CHECK
  else if ( a2 === xSelect && b2 === xSelect && c2 === xSelect ) {
    console.log("X wins!")
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
  }
  else if ( a2 === oSelect && b2 === oSelect && c2 === oSelect ) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins)
    resetBoard()
    turnsTaken = 0
  }

  //A3-B3-C3 RIGHT (3rd) COLUMN VERTICAL WIN CHECK
  else if ( a3 === xSelect && b3 === xSelect && c3 === xSelect ) {
    console.log("X wins!")
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
  }
  else if ( a3 === oSelect && b3 === oSelect && c3 === oSelect ) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins)
    resetBoard()
    turnsTaken = 0
  }

  //A1-B2-C3 DESCENDING DIAGONAL WIN CHECK
  else if ( a1 === xSelect && b2 === xSelect && c3 === xSelect ) {
    console.log("X wins!")
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
  }
  else if ( a1 === oSelect && b2 === oSelect && c3 === oSelect ) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins)
    resetBoard()
    turnsTaken = 0
  }

  //C1-B2-A3 ASCENDING DIAGONAL WIN CHECK
  if ( c1 === xSelect && b2 === xSelect && a3 === xSelect ) {
    console.log("X wins!")
    xWins++
    console.log("X's wins now total " + xWins)
    resetBoard()
    turnsTaken = 0
  }
  else if ( c1 === oSelect && b2 === oSelect && a3 === oSelect ) {
    console.log("O wins!")
    oWins++
    console.log("0's wins now total " + oWins)
    resetBoard()
    turnsTaken = 0
  }

  // NO WIN CONDITION, OUT OF SQUARES
  else if (turnsTaken = 8) { //it's 8 because ARRAYS START AT ZERO
    console.log("You ran out of moves and tied.")
    tieWins++
    console.log("number of ties now totals" + tieWins)
    resetBoard()
    turnsTaken = 0
  } else {
    console.log('Next turn please!')
  }
}
