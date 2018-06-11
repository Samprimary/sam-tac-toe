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
  // let xSelect// x has selected a tile (may need to string)
  // let oSelect// o has selected a tile
  // x and o select are now values
  // let xTurn = 1 // the turn is x's at present (may need to string)
  // let oTurn = 0 // the turn is o's at present (')
  // xTurn and oTurn are now values of 1 and 0, gone otherwise
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
  let a1 = 0 // all tiles start as value 0 for free tile
  let a2 = 0 // value of 1 will indicate owned by X
  let a3 = 0 // value of 2 will indicate owned by O
  let b1 = 0 // this was previously  and 2
  let b2 = 0
  let b3 = 0
  let c1 = 0
  let c2 = 0
  let c3 = 0
  let boardLock = false // locks board on a win

  const resetBoard = function () {
    // remove all injected tiles with blank
    // reset turns to zero if wincheck does not
    // celebrate whoever won?
    // whomever?
    $('#reset-button').html(`<h3>Game Over!</h3>
    <h3><button id="continue-reset" type="submit">Play Again</button></h3>
    `)
  }

  const winCheck = function () {

    // A1-A2-A3 FIRST ROW HORIZONTAL WIN CHECK
    if (a1 === 1 && a2 === 1 && a3 === 1) {
      console.log('X wins!')
      xWins++
      console.log("X's wins now total " + xWins)
      turnsTaken = 0
      boardLock = true
      resetBoard()
    } else if (a1 === 2 && a2 === 2 && a3 === 2) {
      console.log('O wins!')
      oWins++
      console.log("0's wins now total " + oWins)
      boardLock = true
      resetBoard()
    }

    // B1-B2-B3 SECOND ROW HORIZONTAL WIN CHECK
    else if (b1 === 1 && b2 === 1 && b3 === 1) {
      console.log('X wins!')
      xWins++
      console.log("X's wins now total " + xWins)
      boardLock = true
      resetBoard()
    } else if (b1 === 2 && b2 === 2 && b3 === 2) {
      console.log('O wins!')
      oWins++
      console.log("0's wins now total " + oWins)
      resetBoard()
      boardLock = true
    }

    //C1-C2-C3 THIRD ROW HORIZONTAL WIN CHECK
    else if (c1 === 1 && c2 === 1 && c3 === 1) {
      console.log('X wins!')
      xWins++
      console.log("X's wins now total " + xWins)
      boardLock = true
      resetBoard()
    } else if (c1 === 2 && c2 === 2 && c3 === 2) {
      console.log('O wins!')
      oWins++
      console.log("0's wins now total " + oWins)
      boardLock = true
      resetBoard()
    }

    //A1-B1-C1 LEFT (1st) COLUMN VERTICAL WIN CHECK
    else if (a1 === 1 && b1 === 1 && c1 === 1) {
      console.log('X wins!')
      xWins++
      console.log("X's wins now total " + xWins)
      boardLock = true
      resetBoard()
    } else if (a1 === 2 && b1 === 2 && c1 === 2) {
      console.log("O wins!")
      oWins++
      console.log("0's wins now total " + oWins )
      boardLock = true
      resetBoard()
    }

    //A2-B2-C2 MIDDLE (2nd) COLUMN VERTICAL WIN CHECK
    else if ( a2 === 1 && b2 === 1 && c2 === 1) {
      console.log("X wins!")
      xWins++
      console.log("X's wins now total " + xWins)
      boardLock = true
      resetBoard()
    }
    else if ( a2 === 2 && b2 === 2 && c2 === 2 ) {
      console.log("O wins!")
      oWins++
      console.log("0's wins now total " + oWins)
      boardLock = true
      resetBoard()
    }

    //A3-B3-C3 RIGHT (3rd) COLUMN VERTICAL WIN CHECK
    else if ( a3 === 1 && b3 === 1 && c3 === 1) {
      console.log("X wins!")
      xWins++
      console.log("X's wins now total " + xWins)
      boardLock = true
      resetBoard()
    }
    else if ( a3 === 2 && b3 === 2 && c3 === 2 ) {
      console.log("O wins!")
      oWins++
      console.log("0's wins now total " + oWins)
      boardLock = true
      resetBoard()
    }

    //A1-B2-C3 DESCENDING DIAGONAL WIN CHECK
    else if ( a1 === 1 && b2 === 1 && c3 === 1 ) {
      console.log("X wins!")
      xWins++
      console.log("X's wins now total " + xWins)
      boardLock = true
      resetBoard()
    }
    else if ( a1 === 2 && b2 === 2 && c3 === 2 ) {
      console.log("O wins!")
      oWins++
      console.log("0's wins now total " + oWins)
      boardLock = true
      resetBoard()
    }

    //C1-B2-A3 ASCENDING DIAGONAL WIN CHECK
    if ( c1 === 1 && b2 === 1 && a3 === 1 ) {
      console.log("X wins!")
      xWins++
      console.log("X's wins now total " + xWins)
      boardLock = true
      resetBoard()
    }
    else if ( c1 === 2 && b2 === 2 && a3 === 2 ) {
      console.log("O wins!")
      oWins++
      console.log("0's wins now total " + oWins)
      boardLock = true
      resetBoard()
    }

    // NO WIN CONDITION, OUT OF SQUARES
    else if (turnsTaken === 9) { //it's 9 because ARRAYS START AT ZERO
      console.log("You ran out of moves and tied.")
      tieWins++
      console.log("number of ties now totals " + tieWins)
      boardLock = true
      resetBoard()
    } else {
      console.log('Next turn please!')
    }
  }

$('#continue-reset').click(function(event) {
  event.preventDefault()
  onRestartGame
})

const onRestartGame = function(event) {
    event.preventDefault()
    $('#A1').html('<H3>A1</H3>')
    $('#A2').html('<H3>A2</H3>')
    $('#A3').html('<H3>A3</H3>')
    $('#B1').html('<H3>B1</H3>')
    $('#B2').html('<H3>B2</H3>')
    $('#B3').html('<H3>B3</H3>')
    $('#C1').html('<H3>C1</H3>')
    $('#C2').html('<H3>C2</H3>')
    $('#C3').html('<H3>C3</H3>')
    a1 = 0 // all tiles start as value 0 for free tile
    a2 = 0 // value of 1 will indicate owned by X
    a3 = 0 // value of 2 will indicate owned by O
    b1 = 0 // this was previously x and o turn
    b2 = 0
    b3 = 0
    c1 = 0
    c2 = 0
    c3 = 0
    a1clicked = false // all tiles reset to unclicked
    a2clicked = false
    a3clicked = false
    b1clicked = false
    b2clicked = false
    b3clicked = false
    c1clicked = false
    c2clicked = false
    c3clicked = false
    boardLock = false
    turnsTaken = 0
  }

  $('#A1').click(function () {
    console.log('A1, The Top Left Tile Was Clicked')
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (a1clicked === false && turnPlayer === 0) {
      a1clicked = true
      a1 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes A1.')
      console.log('Turn', turnsTaken)
      $('#A1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a1clicked === false && turnPlayer === 1) {
      a1clicked = true
      a1 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (a2clicked === false && turnPlayer === 0) {
      a2clicked = true
      a2 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes A2.')
      console.log('Turn', turnsTaken)
      $('#A2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a2clicked === false && turnPlayer === 1) {
      a2clicked = true
      a2 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (a3clicked === false && turnPlayer === 0) {
      a3clicked = true
      a3 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes A3.')
      console.log('Turn', turnsTaken)
      $('#A3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a3clicked === false && turnPlayer === 1) {
      a3clicked = true
      a3 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (b1clicked === false && turnPlayer === 0) {
      b1clicked = true
      b1 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes B1.')
      console.log('Turn', turnsTaken)
      $('#B1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b1clicked === false && turnPlayer === 1) {
      b1clicked = true
      b1 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (b2clicked === false && turnPlayer === 0) {
      b2clicked = true
      b2 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes B2.')
      console.log('Turn', turnsTaken)
      $('#B2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b2clicked === false && turnPlayer === 1) {
      b2clicked = true
      b2 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (b3clicked === false && turnPlayer === 0) {
      b3clicked = true
      b3 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes B3.')
      console.log('Turn', turnsTaken)
      $('#B3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b3clicked === false && turnPlayer === 1) {
      b3clicked = true
      b3 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (c1clicked === false && turnPlayer === 0) {
      c1clicked = true
      c1 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes C1.')
      console.log('Turn', turnsTaken)
      $('#C1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c1clicked === false && turnPlayer === 1) {
      c1clicked = true
      c1 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (c2clicked === false && turnPlayer === 0) {
      c2clicked = true
      c2 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes C2.')
      console.log('Turn', turnsTaken)
      $('#C2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c2clicked === false && turnPlayer === 1) {
      c2clicked = true
      c2 = 2
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
    if (boardLock === true) {
      console.log('Start a new game first.')
    } else if (c3clicked === false && turnPlayer === 0) {
      c3clicked = true
      c3 = 1
      turnsTaken++
      turnPlayer = 1
      console.log('X takes C3.')
      console.log('Turn', turnsTaken)
      $('#C3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c3clicked === false && turnPlayer === 1) {
      c3clicked = true
      c3 = 2
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
