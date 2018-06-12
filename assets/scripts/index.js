'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./events') !!!!!
// use require without a reference to ensure a file is bundled
// require('./example')
// const authTestAuth = require('./testauth') // TEST
const authEvents = require('../auth/events')
// const authUi = require('../auth/ui')

$(() => {
  let oWins = 0 // how many times O won
  let xWins = 0 // how many times X won
  let tieWins = 0 // how many ties
  // these get replaced later with API stuff
  // let xSelect// x has selected a tile (may need to string)
  // let oSelect// o has selected a tile
  // xSelect and oSelect removed
  // xSelect and oSelect changed to number values for tile variables
  // let xTurn = 0 // the turn is x's at present (may need to string)
  // let oTurn = 1 // the turn is o's at present (')
  // xTurn and oTurn removed
  // xTurn and oTurn are now values of 1 and 0 for turnPlayer
  let turnPlayer = 0 // turnPlayer switches between states 0 and 1
  let turnsTaken = 0 // turnsTaken ends draws in winCheck
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
  let b1 = 0 // this was previously x/oSelect
  let b2 = 0
  let b3 = 0
  let c1 = 0
  let c2 = 0
  let c3 = 0
  let boardLock = true // locks board on a complete game

  $('#dropdown-anchor').click('#show-sign-up', function () {
    $('#sign-up-field').html(``)
    $('#sign-up-field').html(`<form id='sign-up-form' class="forms">
        <input name="credentials[email]" type="email" placeholder="Enter Username">
        <input name="credentials[password]" type="password" placeholder="Enter Password">
        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">
        <button type="submit"  class="forms">Sign Up</button>
      </form>`)
    $('#sign-up-form').on('submit', authEvents.onSignUp)
  })

  $('#dropdown-link').click('#show-change-password', function () {
    $('#sign-up-field').html(``)
    $('#sign-up-field').html(`<form id='change-password-form' class="forms">
        <input name="passwords[old]" type="password" placeholder="Old Password">
        <input name="passwords[new]" type="password" placeholder="New Password">
        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">
        <button type="submit" class="forms">Change Password</button>
      </form>`)
    $('#change-password-form').on('submit', authEvents.onChangePassword)
  })

  // $('#sign-in-form').on('submit', authEvents.onSignIn)
  // $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-in-field').on('submit', '#sign-in-form', authEvents.onSignIn)
  $('#sign-in-field').on('submit', '#sign-out-form', authEvents.onSignOut)

  $('#continue-reset-o').click(function () {
    boardLock = false
    turnPlayer = 1
    $('#announcer').html(`O starts this round.`)
    $('#reset-button').html('')
    // didAnAuth() // TEST
  })

  $('#continue-reset-x').click(function () {
    boardLock = false
    turnPlayer = 0
    $('#announcer').html(`X starts this round.`)
    $('#reset-button').html('')
    // didAnotherAuth() // TEST
  })

  const resetBoard = function () {
    // remove all injected tiles with blank
    // reset turns to zero if wincheck does not
    // celebrate whoever won?
    // whomever?
    $('#reset-button').html(`<h3>Game Over! Play again?</h3>
    <h3><button id="continue-reset-x" type="button">X starts</button>
    <button id="continue-reset-o" type="button">O starts</button></h3>
    `)
    $('#continue-reset-x').click(function () {
      $('#A1').html('<H1>A1</H1>')
      $('#A2').html('<H1>A2</H1>')
      $('#A3').html('<H1>A3</H1>')
      $('#B1').html('<H1>B1</H1>')
      $('#B2').html('<H1>B2</H1>')
      $('#B3').html('<H1>B3</H1>')
      $('#C1').html('<H1>C1</H1>')
      $('#C2').html('<H1>C2</H1>')
      $('#C3').html('<H1>C3</H1>')
      a1 = 0 // all tiles start as value 0 for free tile
      a2 = 0 // value of 1 will indicate owned by X
      a3 = 0 // value of 2 will indicate owned by O
      b1 = 0 // this was previously xTurn and oTurn
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
      boardLock = false // board lock reset to false
      turnsTaken = 0 // turns reset to 0
      turnPlayer = 0 // player resets to X
      $('#announcer').html(`X starts this round.`)
      $('#reset-button').html('')
    })
    $('#continue-reset-o').click(function () {
      $('#A1').html('<H1>A1</H1>')
      $('#A2').html('<H1>A2</H1>')
      $('#A3').html('<H1>A3</H1>')
      $('#B1').html('<H1>B1</H1>')
      $('#B2').html('<H1>B2</H1>')
      $('#B3').html('<H1>B3</H1>')
      $('#C1').html('<H1>C1</H1>')
      $('#C2').html('<H1>C2</H1>')
      $('#C3').html('<H1>C3</H1>')
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
      turnPlayer = 1 // player resets to O
      $('#announcer').html(`O starts this round.`)
      $('#reset-button').html('')
    })
  }

  const resetAlert = function () {
    // remove all injected tiles with blank
    // reset turns to zero if wincheck does not
    // celebrate whoever won?
    // whomever?
    $('#reset-button').html(`<h2>Choose Starting Player<br>
    <button id="continue-reset-x" type="button">X starts</button>
    <button id="continue-reset-o" type="button">O starts</button></h2>`)
    $('#continue-reset-x').click(function () {
      $('#A1').html('<H1>A1</H1>')
      $('#A2').html('<H1>A2</H1>')
      $('#A3').html('<H1>A3</H1>')
      $('#B1').html('<H1>B1</H1>')
      $('#B2').html('<H1>B2</H1>')
      $('#B3').html('<H1>B3</H1>')
      $('#C1').html('<H1>C1</H1>')
      $('#C2').html('<H1>C2</H1>')
      $('#C3').html('<H1>C3</H1>')
      a1 = 0 // all tiles start as value 0 for free tile
      a2 = 0 // value of 1 will indicate owned by X
      a3 = 0 // value of 2 will indicate owned by O
      b1 = 0 // this was previously xTurn and oTurn
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
      boardLock = false // board lock reset to false
      turnsTaken = 0 // turns reset to 0
      turnPlayer = 0 // player resets to X
      $('#announcer').html(`X starts this round.`)
      $('#reset-button').html('')
    })
    $('#continue-reset-o').click(function () {
      $('#A1').html('<H1>A1</H1>')
      $('#A2').html('<H1>A2</H1>')
      $('#A3').html('<H1>A3</H1>')
      $('#B1').html('<H1>B1</H1>')
      $('#B2').html('<H1>B2</H1>')
      $('#B3').html('<H1>B3</H1>')
      $('#C1').html('<H1>C1</H1>')
      $('#C2').html('<H1>C2</H1>')
      $('#C3').html('<H1>C3</H1>')
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
      turnPlayer = 1 // player resets to O
      $('#announcer').html(`O starts this round.`)
      $('#reset-button').html('')
    })
  }

  const winCheck = function () {
    if (a1 === 1 && a2 === 1 && a3 === 1) {
      // A1-A2-A3 FIRST ROW HORIZONTAL WIN CHECK
      xWins++
      $('#announcer').html(`X Wins! X's wins now total ${xWins}.`)
      turnsTaken = 0
      boardLock = true
      $('#A1').html('<img src=xwingraphic.png>')
      $('#A2').html('<img src=xwingraphic.png>')
      $('#A3').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (a1 === 2 && a2 === 2 && a3 === 2) {
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#A1').html('<img src=owingraphic.png>')
      $('#A2').html('<img src=owingraphic.png>')
      $('#A3').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (b1 === 1 && b2 === 1 && b3 === 1) {
      // B1-B2-B3 SECOND ROW HORIZONTAL WIN CHECK
      $('#announcer').html(`X Wins!`)
      xWins++
      $('#announcer').html(`X Wins! X's wins now total ${xWins}.`)
      boardLock = true
      $('#B1').html('<img src=xwingraphic.png>')
      $('#B2').html('<img src=xwingraphic.png>')
      $('#B3').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (b1 === 2 && b2 === 2 && b3 === 2) {
      $('#announcer').html(`O Wins!`)
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#B1').html('<img src=owingraphic.png>')
      $('#B2').html('<img src=owingraphic.png>')
      $('#B3').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (c1 === 1 && c2 === 1 && c3 === 1) {
      // C1-C2-C3 THIRD ROW HORIZONTAL WIN CHECK
      $('#announcer').html(`X Wins!`)
      xWins++
      $('#announcer').html(`X Wins! X's wins now total ${xWins}.`)
      boardLock = true
      $('#C1').html('<img src=xwingraphic.png>')
      $('#C2').html('<img src=xwingraphic.png>')
      $('#C3').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (c1 === 2 && c2 === 2 && c3 === 2) {
      $('#announcer').html(`O Wins!`)
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#C1').html('<img src=owingraphic.png>')
      $('#C2').html('<img src=owingraphic.png>')
      $('#C3').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (a1 === 1 && b1 === 1 && c1 === 1) {
      // A1-B1-C1 LEFT (1st) COLUMN VERTICAL WIN CHECK
      xWins++
      $('#announcer').html(`X Wins! X's wins now total ${xWins}.`)
      boardLock = true
      $('#A1').html('<img src=xwingraphic.png>')
      $('#B1').html('<img src=xwingraphic.png>')
      $('#C1').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (a1 === 2 && b1 === 2 && c1 === 2) {
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#A1').html('<img src=owingraphic.png>')
      $('#B1').html('<img src=owingraphic.png>')
      $('#C1').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (a2 === 1 && b2 === 1 && c2 === 1) {
      // A2-B2-C2 MIDDLE (2nd) COLUMN VERTICAL WIN CHECK
      xWins++
      $('#announcer').html(`X Wins! X's wins now total ${xWins}.`)
      boardLock = true
      $('#A2').html('<img src=xwingraphic.png>')
      $('#B2').html('<img src=xwingraphic.png>')
      $('#C2').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (a2 === 2 && b2 === 2 && c2 === 2) {
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#A2').html('<img src=owingraphic.png>')
      $('#B2').html('<img src=owingraphic.png>')
      $('#C2').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (a3 === 1 && b3 === 1 && c3 === 1) {
      // A3-B3-C3 RIGHT (3rd) COLUMN VERTICAL WIN CHECK
      xWins++
      $('#announcer').html(`X Wins! X's wins now total ${xWins}.`)
      boardLock = true
      $('#A3').html('<img src=xwingraphic.png>')
      $('#B3').html('<img src=xwingraphic.png>')
      $('#C3').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (a3 === 2 && b3 === 2 && c3 === 2) {
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#A3').html('<img src=owingraphic.png>')
      $('#B3').html('<img src=owingraphic.png>')
      $('#C3').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (a1 === 1 && b2 === 1 && c3 === 1) {
      // A1-B2-C3 DESCENDING DIAGONAL WIN CHECK
      xWins++
      $('#announcer').html(`X wins! X's wins now total ${xWins}.`)
      boardLock = true
      $('#A1').html('<img src=xwingraphic.png>')
      $('#B2').html('<img src=xwingraphic.png>')
      $('#C3').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (a1 === 2 && b2 === 2 && c3 === 2) {
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#A1').html('<img src=owingraphic.png>')
      $('#B2').html('<img src=owingraphic.png>')
      $('#C3').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (c1 === 1 && b2 === 1 && a3 === 1) {
      // C1-B2-A3 ASCENDING DIAGONAL WIN CHECK
      xWins++
      $('#announcer').html(`X Wins! X's wins now total ${xWins}.`)
      boardLock = true
      $('#C1').html('<img src=xwingraphic.png>')
      $('#B2').html('<img src=xwingraphic.png>')
      $('#A3').html('<img src=xwingraphic.png>')
      resetBoard()
    } else if (c1 === 2 && b2 === 2 && a3 === 2) {
      oWins++
      $('#announcer').html(`O Wins! O's wins now total ${oWins}.`)
      boardLock = true
      $('#C1').html('<img src=owingraphic.png>')
      $('#B2').html('<img src=owingraphic.png>')
      $('#A3').html('<img src=owingraphic.png>')
      resetBoard()
    } else if (turnsTaken === 9) { // it's 9 because ARRAYS START AT ZERO
    // NO WIN CONDITION, OUT OF SQUARES
      tieWins++
      $('#announcer').html(`Tie game! The board has been tied ${tieWins} times.`)
      boardLock = true
      resetBoard()
    } else {
      // WIN CHECK FAILS, DOES NOTHING
    }
  }

  $('#A1').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (a1clicked === false && turnPlayer === 0) {
      a1clicked = true
      a1 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes A1 for turn ${turnsTaken}.`)
      $('#A1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a1clicked === false && turnPlayer === 1) {
      a1clicked = true
      a1 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`0 takes A1 for turn ${turnsTaken}.`)
      $('#A1').html('<img src="ographic.png">')
      winCheck()
    } else if (a1clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#A2').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (a2clicked === false && turnPlayer === 0) {
      a2clicked = true
      a2 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes A2 for turn ${turnsTaken}.`)
      $('#A2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a2clicked === false && turnPlayer === 1) {
      a2clicked = true
      a2 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`O takes A2 for turn ${turnsTaken}.`)
      $('#A2').html('<img src="ographic.png">')
      winCheck()
    } else if (a2clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#A3').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (a3clicked === false && turnPlayer === 0) {
      a3clicked = true
      a3 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes A3 for turn ${turnsTaken}.`)
      $('#A3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (a3clicked === false && turnPlayer === 1) {
      a3clicked = true
      a3 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`O takes A3 for turn ${turnsTaken}.`)
      $('#A3').html('<img src="ographic.png">')
      winCheck()
    } else if (a3clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#B1').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (b1clicked === false && turnPlayer === 0) {
      b1clicked = true
      b1 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes B1 for turn ${turnsTaken}.`)
      $('#B1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b1clicked === false && turnPlayer === 1) {
      b1clicked = true
      b1 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`0 takes B1 for turn ${turnsTaken}.`)
      $('#B1').html('<img src="ographic.png">')
      winCheck()
    } else if (b1clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#B2').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (b2clicked === false && turnPlayer === 0) {
      b2clicked = true
      b2 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes the pivotal B2 for turn ${turnsTaken}!`)
      $('#B2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b2clicked === false && turnPlayer === 1) {
      b2clicked = true
      b2 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`O takes the pivotal b2 for turn ${turnsTaken}!`)
      $('#B2').html('<img src="ographic.png">')
      winCheck()
    } else if (b2clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#B3').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (b3clicked === false && turnPlayer === 0) {
      b3clicked = true
      b3 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes B3 for turn ${turnsTaken}.`)
      $('#B3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (b3clicked === false && turnPlayer === 1) {
      b3clicked = true
      b3 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`0 takes B3 for turn ${turnsTaken}.`)
      $('#B3').html('<img src="ographic.png">')
      winCheck()
    } else if (b3clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#C1').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (c1clicked === false && turnPlayer === 0) {
      c1clicked = true
      c1 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes C1 for turn ${turnsTaken}.`)
      $('#C1').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c1clicked === false && turnPlayer === 1) {
      c1clicked = true
      c1 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`0 takes C1 for turn ${turnsTaken}.`)
      $('#C1').html('<img src="ographic.png">')
      winCheck()
    } else if (c1clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#C2').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (c2clicked === false && turnPlayer === 0) {
      c2clicked = true
      c2 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes C2 for turn ${turnsTaken}.`)
      $('#C2').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c2clicked === false && turnPlayer === 1) {
      c2clicked = true
      c2 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`O takes C2 for turn ${turnsTaken}.`)
      $('#C2').html('<img src="ographic.png">')
      winCheck()
    } else if (c2clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })

  $('#C3').click(function () {
    if (boardLock === true) {
      $('#announcer').html(`Start a new game first.`)
      resetAlert()
    } else if (c3clicked === false && turnPlayer === 0) {
      c3clicked = true
      c3 = 1
      turnsTaken++
      turnPlayer = 1
      $('#announcer').html(`X takes C3 for turn ${turnsTaken}.`)
      $('#C3').html('<img src="xgraphic.png">')
      winCheck()
    } else if (c3clicked === false && turnPlayer === 1) {
      c3clicked = true
      c3 = 2
      turnsTaken++
      turnPlayer = 0
      $('#announcer').html(`0 takes C3 for turn ${turnsTaken}.`)
      $('#C3').html('<img src="ographic.png">')
      winCheck()
    } else if (c3clicked === true) {
      $('#announcer').html(`That tile is taken.`)
    }
  })
})
