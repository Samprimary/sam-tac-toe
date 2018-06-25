webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getFormFields = __webpack_require__(7);
var authApi = __webpack_require__(2);
var authUi = __webpack_require__(4);

var onSignUp = function onSignUp(event) {
  event.preventDefault();
  // ('the form was submitted')
  var data = getFormFields(event.target);
  // ('data is', data)
  authApi.signUp(data).then(authUi.signUpSuccess).catch(authUi.signUpError);
};

var onSignIn = function onSignIn(event) {
  event.preventDefault();
  // ('the form was submitted')
  var data = getFormFields(event.target);
  // ('data is', data)
  authApi.signIn(data).then(authUi.signInSuccess).catch(authUi.signInError);
};

var onChangePassword = function onChangePassword(event) {
  event.preventDefault();
  var data = getFormFields(event.target);
  // ('Did I get data? - ', data)
  authApi.changePassword(data).then(authUi.changePasswordSuccess).catch(authUi.changePasswordError);
};

var onSignOut = function onSignOut(event) {
  event.preventDefault();
  authApi.signOut().then(authUi.signOutSuccess).catch(authUi.signOutError);
};

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// const getFormFields = require('./get-form-fields')
// const store = require('./store')

var config = __webpack_require__(9);
var store = __webpack_require__(3);

var signUp = function signUp(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  });
};

var signIn = function signIn(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  });
};

var signOut = function signOut(data) {
  // ('sign out is', data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var changePassword = function changePassword(data) {
  // ('store is', store)
  // ('token is', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var newGame = function newGame(event) {
  // ('user is ', store.user)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var updateGame = function updateGame() {
  // ('Token is ', store.user.token)
  console.log('store.game.id is ' + store.game.id);
  console.log('store.user.token is ' + store.user.token);
  console.log('store.gameData is ' + store.gameData);
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: store.gameData
  });
};

// get played games
var gameIndex = function gameIndex() {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  });
};

// SHOW ONE GAME
var getGame = function getGame(id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  });
};

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  newGame: newGame,
  updateGame: updateGame,
  getGame: getGame,
  gameIndex: gameIndex
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = {};

module.exports = {
  store: store
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var store = __webpack_require__(3);
// const api = require('./api')
var events = __webpack_require__(1);
// const reqIndex = require('../scripts/index')

var signInDisplay = function signInDisplay() {
  $('#sign-in-field').html('<form id=\'sign-out-form\'>\n  <button type="submit">Sign Out</button>\n  </form>');
  $('#dropdown-link').html('<h4><button id="show-change-password" class="formlink">Change My Password</button></h4>');
  $('#dropdown-anchor').html('');
  $('#sign-up-field').html('');
};

var signOutDisplay = function signOutDisplay() {
  $('#sign-in-field').html('<form id=\'sign-in-form\' class="forms">\n              <input name="credentials[email]" type="email" placeholder="Enter Username">\n              <input name="credentials[password]" type="password" placeholder="Enter Password">\n              <button type="submit"  class="forms">Sign In</button>\n            </form>');
  $('#dropdown-link').html('');
  $('#dropdown-anchor').html('  <h4><button id="show-sign-up" class="formlink" type="button">Sign Up</button></h4>');
  $('#sign-up-field').html('');
};

var signUpSuccess = function signUpSuccess(data) {
  $('#login-infobox').html('<h4>New Player Created!</h4>');
};

var signUpError = function signUpError(error) {};

var signInSuccess = function signInSuccess(data) {
  loggedIn = true;
  store.user = data.user;
  $('#login-infobox').html('<h4>Signed In!</h4>');
  signInDisplay();
  // reqIndex.resetBoard()
  console.log('we signed in');
};

var signInError = function signInError(error) {
  $('#login-infobox').html('<h4>Sign-in failed. Double check your password.</h4>');
};

var changePasswordSuccess = function changePasswordSuccess() {
  $('#login-infobox').html('<h4>You successfully changed your password.</h4>');
};

var changePasswordError = function changePasswordError(error) {
  $('#login-infobox').html('<h4>There was an error.</h4>');
};

var signOutSuccess = function signOutSuccess() {
  // ('you successfully signed out')
  delete store.user;
  // ('store after sign out is', store)
  $('#login-infobox').html('<h4>Signed Out!</h4>');
  signOutDisplay();
  // reqIndex.resetBoard()
};

var signOutError = function signOutError(error) {
  $('#login-infobox').html('<h4>Signed Out!</h4>');
};

var getGameSuccess = function getGameSuccess(data) {
  // ('getGameSuccess is ', data)
};
var getGameError = function getGameError() {
  $('#announcer').html('Error in getGame');
};

var updateGameSuccess = function updateGameSuccess(data) {
  $('#announcer').html(data.games.length + ' games have been played! (this is data.games.length)');
};

var updateGameError = function updateGameError(data) {
  $('#announcer').html(data.games.length + ' games have been played! (this is data.games.length)');
};

var newGameSuccess = function newGameSuccess(data) {
  store.game = data;
  console.log('data is ' + data);
};

var newGameError = function newGameError(data) {};
// const doSignUp = function () {
//   $('#sign-up-form').on('submit', events.onSignUp)
// }
//
// const doChangePassword = function () {
//   $('#change-password-form').on('submit', events.onChangePassword)
// }

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError,
  // updateGameSuccess: updateGameSuccess,
  // updateGameFailure: updateGameFailure,
  getGameSuccess: getGameSuccess,
  getGameError: getGameError,
  updateGameSuccess: updateGameSuccess,
  updateGameError: updateGameError,
  newGameSuccess: newGameSuccess,
  newGameError: newGameError,
  store: store
  //  doSignUp: doSignUp,
  //  doChangePassword: doChangePassword
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(6);

// styles
__webpack_require__(10);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./events') !!!!!
// use require without a reference to ensure a file is bundled
// require('./example')
// const authTestAuth = require('./testauth') // TEST

var authEvents = __webpack_require__(1);
var authApi = __webpack_require__(2);
var authUi = __webpack_require__(4);

$(function () {
  var gameArray = ['', '', '', '', '', '', '', '', ''];
  var oWins = 0; // how many times O won
  var xWins = 0; // how many times X won
  var tieWins = 0; // how many ties
  // these get replaced later with authApi stuff
  // let xSelect// x has selected a tile (may need to string)
  // let oSelect// o has selected a tile
  // xSelect and oSelect removed
  // xSelect and oSelect changed to number values for tile variables
  // let xTurn = 0 // the turn is x's at present (may need to string)
  // let oTurn = 1 // the turn is o's at present (')
  // xTurn and oTurn removed
  // xTurn and oTurn are now values of 1 and 0 for turnPlayer
  var turnPlayer = 0; // turnPlayer switches between states 0 and 1
  var turnsTaken = 0; // turnsTaken ends draws in winCheck
  var a1clicked = false; // all tiles start unclicked
  var a2clicked = false;
  var a3clicked = false;
  var b1clicked = false;
  var b2clicked = false;
  var b3clicked = false;
  var c1clicked = false;
  var c2clicked = false;
  var c3clicked = false;
  var a1 = 0; // all tiles start as value 0 for free tile
  var a2 = 0; // value of 1 will indicate owned by X
  var a3 = 0; // value of 2 will indicate owned by O
  var b1 = 0; // this was previously x/oSelect
  var b2 = 0;
  var b3 = 0;
  var c1 = 0;
  var c2 = 0;
  var c3 = 0;
  var boardLock = true; // locks board on a complete game

  var index = 0;
  var value = 'x';
  var over = false;

  var loggedIn = false; // separation fix here

  $('#dropdown-anchor').click('#show-sign-up', function () {
    $('#sign-up-field').html('');
    $('#sign-up-field').html('<form id=\'sign-up-form\' class="forms">\n        <input name="credentials[email]" type="email" placeholder="Enter Username">\n        <input name="credentials[password]" type="password" placeholder="Enter Password">\n        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">\n        <button type="submit"  class="forms">Sign Up</button>\n      </form>');
    $('#sign-up-form').on('submit', authEvents.onSignUp);
  });

  $('#dropdown-link').click('#show-change-password', function () {
    $('#sign-up-field').html('');
    $('#sign-up-field').html('<form id=\'change-password-form\' class="forms">\n        <input name="passwords[old]" type="password" placeholder="Old Password">\n        <input name="passwords[new]" type="password" placeholder="New Password">\n        <input name="credentials[password_confirmation]" type="password" placeholder="Confirm Password">\n        <button type="submit" class="forms">Change Password</button>\n      </form>');
    $('#change-password-form').on('submit', authEvents.onChangePassword);
  });

  // $('#sign-in-form').on('submit', authEvents.onSignIn)
  // $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#change-password-form').on('submit', authEvents.onChangePassword);
  $('#sign-in-field').on('submit', '#sign-in-form', authEvents.onSignIn);
  $('#sign-in-field').on('submit', '#sign-out-form', authEvents.onSignOut);

  $('#continue-reset-o').click(function () {
    boardLock = false;
    turnPlayer = 1;
    $('#announcer').html('O starts this round.');
    $('#reset-button').html('');
    // didAnAuth() // TEST
  });

  $('#continue-reset-x').click(function () {
    boardLock = false;
    turnPlayer = 0;
    $('#announcer').html('X starts this round.');
    $('#reset-button').html('');
    // didAnotherAuth() // TEST
  });

  var resetBoard = function resetBoard() {
    // remove all injected tiles with blank
    // reset turns to zero if wincheck does not
    // celebrate whoever won?
    // whomever?
    $('#reset-button').html('<h3>Game Over! Play again?</h3>\n    <h3><button id="continue-reset-x" type="button">X starts</button>\n    <button id="continue-reset-o" type="button">O starts</button></h3>\n    ');
    $('#continue-reset-x').click(function () {
      console.log('this click here.');
      if (authUi.loggedIn === true) {
        console.log('i was signed in.');
        authApi.newGame().then(authUi.newGameSuccess).catch(authUi.newGameError);
      }
      $('#A1').html('<H1>A1</H1>');
      $('#A2').html('<H1>A2</H1>');
      $('#A3').html('<H1>A3</H1>');
      $('#B1').html('<H1>B1</H1>');
      $('#B2').html('<H1>B2</H1>');
      $('#B3').html('<H1>B3</H1>');
      $('#C1').html('<H1>C1</H1>');
      $('#C2').html('<H1>C2</H1>');
      $('#C3').html('<H1>C3</H1>');
      a1 = 0; // all tiles start as value 0 for free tile
      a2 = 0; // value of 1 will indicate owned by X
      a3 = 0; // value of 2 will indicate owned by O
      b1 = 0; // this was previously xTurn and oTurn
      b2 = 0;
      b3 = 0;
      c1 = 0;
      c2 = 0;
      c3 = 0;
      a1clicked = false; // all tiles reset to unclicked
      a2clicked = false;
      a3clicked = false;
      b1clicked = false;
      b2clicked = false;
      b3clicked = false;
      c1clicked = false;
      c2clicked = false;
      c3clicked = false;
      boardLock = false; // board lock reset to false
      turnsTaken = 0; // turns reset to 0
      turnPlayer = 0; // player resets to X
      gameArray = ['', '', '', '', '', '', '', '', ''];
      over = false;
      $('#announcer').html('X starts this round.');
      $('#reset-button').html('');
    });
    $('#continue-reset-o').click(function () {
      console.log('this click here.');
      if (authUi.loggedIn === true) {
        console.log('i was signed in.');
        authApi.newGame().then(authUi.newGameSuccess).catch(authUi.newGameError);
      }
      $('#A1').html('<H1>A1</H1>');
      $('#A2').html('<H1>A2</H1>');
      $('#A3').html('<H1>A3</H1>');
      $('#B1').html('<H1>B1</H1>');
      $('#B2').html('<H1>B2</H1>');
      $('#B3').html('<H1>B3</H1>');
      $('#C1').html('<H1>C1</H1>');
      $('#C2').html('<H1>C2</H1>');
      $('#C3').html('<H1>C3</H1>');
      a1 = 0; // all tiles start as value 0 for free tile
      a2 = 0; // value of 1 will indicate owned by X
      a3 = 0; // value of 2 will indicate owned by O
      b1 = 0; // this was previously x and o turn
      b2 = 0;
      b3 = 0;
      c1 = 0;
      c2 = 0;
      c3 = 0;
      a1clicked = false; // all tiles reset to unclicked
      a2clicked = false;
      a3clicked = false;
      b1clicked = false;
      b2clicked = false;
      b3clicked = false;
      c1clicked = false;
      c2clicked = false;
      c3clicked = false;
      boardLock = false;
      turnsTaken = 0;
      turnPlayer = 1; // player resets to O
      gameArray = ['', '', '', '', '', '', '', '', ''];
      over = false;
      $('#announcer').html('O starts this round.');
      $('#reset-button').html('');
    });
  };

  var resetAlert = function resetAlert() {
    // remove all injected tiles with blank
    // reset turns to zero if wincheck does not
    // celebrate whoever won?
    // whomever?
    $('#reset-button').html('<h2>Choose Starting Player<br>\n    <button id="continue-reset-x" type="button">X starts</button>\n    <button id="continue-reset-o" type="button">O starts</button></h2>');
    $('#continue-reset-x').click(function () {
      console.log('this click here.');
      if (authUi.loggedIn === true) {
        console.log('i was signed in.');
        authApi.newGame().then(authUi.newGameSuccess).catch(authUi.newGameError);
      }
      $('#A1').html('<H1>A1</H1>');
      $('#A2').html('<H1>A2</H1>');
      $('#A3').html('<H1>A3</H1>');
      $('#B1').html('<H1>B1</H1>');
      $('#B2').html('<H1>B2</H1>');
      $('#B3').html('<H1>B3</H1>');
      $('#C1').html('<H1>C1</H1>');
      $('#C2').html('<H1>C2</H1>');
      $('#C3').html('<H1>C3</H1>');
      a1 = 0; // all tiles start as value 0 for free tile
      a2 = 0; // value of 1 will indicate owned by X
      a3 = 0; // value of 2 will indicate owned by O
      b1 = 0; // this was previously xTurn and oTurn
      b2 = 0;
      b3 = 0;
      c1 = 0;
      c2 = 0;
      c3 = 0;
      a1clicked = false; // all tiles reset to unclicked
      a2clicked = false;
      a3clicked = false;
      b1clicked = false;
      b2clicked = false;
      b3clicked = false;
      c1clicked = false;
      c2clicked = false;
      c3clicked = false;
      boardLock = false; // board lock reset to false
      turnsTaken = 0; // turns reset to 0
      turnPlayer = 0; // player resets to X
      gameArray = ['', '', '', '', '', '', '', '', ''];
      $('#announcer').html('X starts this round.');
      $('#reset-button').html('');
      over = false;
    });
    $('#continue-reset-o').click(function () {
      console.log('this click here.');
      if (authUi.loggedIn === true) {
        console.log('i was signed in.');
        authApi.newGame().then(authUi.newGameSuccess).catch(authUi.newGameError);
      }
      $('#A1').html('<H1>A1</H1>');
      $('#A2').html('<H1>A2</H1>');
      $('#A3').html('<H1>A3</H1>');
      $('#B1').html('<H1>B1</H1>');
      $('#B2').html('<H1>B2</H1>');
      $('#B3').html('<H1>B3</H1>');
      $('#C1').html('<H1>C1</H1>');
      $('#C2').html('<H1>C2</H1>');
      $('#C3').html('<H1>C3</H1>');
      a1 = 0; // all tiles start as value 0 for free tile
      a2 = 0; // value of 1 will indicate owned by X
      a3 = 0; // value of 2 will indicate owned by O
      b1 = 0; // this was previously x and o turn
      b2 = 0;
      b3 = 0;
      c1 = 0;
      c2 = 0;
      c3 = 0;
      a1clicked = false; // all tiles reset to unclicked
      a2clicked = false;
      a3clicked = false;
      b1clicked = false;
      b2clicked = false;
      b3clicked = false;
      c1clicked = false;
      c2clicked = false;
      c3clicked = false;
      boardLock = false;
      turnsTaken = 0;
      turnPlayer = 1; // player resets to O
      gameArray = ['', '', '', '', '', '', '', '', ''];
      over = false;
      $('#announcer').html('O starts this round.');
      $('#reset-button').html('');
    });
  };

  var winCheck = function winCheck() {
    if (a1 === 1 && a2 === 1 && a3 === 1) {
      // A1-A2-A3 FIRST ROW HORIZONTAL WIN CHECK
      xWins++;
      $('#announcer').html('X Wins! X\'s wins now total ' + xWins + '.');
      turnsTaken = 0;
      boardLock = true;
      $('#A1').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#A2').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#A3').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a1 === 2 && a2 === 2 && a3 === 2) {
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#A1').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#A2').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#A3').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (b1 === 1 && b2 === 1 && b3 === 1) {
      // B1-B2-B3 SECOND ROW HORIZONTAL WIN CHECK
      $('#announcer').html('X Wins!');
      xWins++;
      $('#announcer').html('X Wins! X\'s wins now total ' + xWins + '.');
      boardLock = true;
      $('#B1').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#B2').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#B3').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (b1 === 2 && b2 === 2 && b3 === 2) {
      $('#announcer').html('O Wins!');
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#B1').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#B2').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#B3').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (c1 === 1 && c2 === 1 && c3 === 1) {
      // C1-C2-C3 THIRD ROW HORIZONTAL WIN CHECK
      $('#announcer').html('X Wins!');
      xWins++;
      $('#announcer').html('X Wins! X\'s wins now total ' + xWins + '.');
      boardLock = true;
      $('#C1').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#C2').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#C3').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (c1 === 2 && c2 === 2 && c3 === 2) {
      $('#announcer').html('O Wins!');
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#C1').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#C2').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#C3').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a1 === 1 && b1 === 1 && c1 === 1) {
      // A1-B1-C1 LEFT (1st) COLUMN VERTICAL WIN CHECK
      xWins++;
      $('#announcer').html('X Wins! X\'s wins now total ' + xWins + '.');
      boardLock = true;
      $('#A1').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#B1').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#C1').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a1 === 2 && b1 === 2 && c1 === 2) {
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#A1').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#B1').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#C1').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a2 === 1 && b2 === 1 && c2 === 1) {
      // A2-B2-C2 MIDDLE (2nd) COLUMN VERTICAL WIN CHECK
      xWins++;
      $('#announcer').html('X Wins! X\'s wins now total ' + xWins + '.');
      boardLock = true;
      $('#A2').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#B2').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#C2').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a2 === 2 && b2 === 2 && c2 === 2) {
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#A2').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#B2').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#C2').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a3 === 1 && b3 === 1 && c3 === 1) {
      // A3-B3-C3 RIGHT (3rd) COLUMN VERTICAL WIN CHECK
      xWins++;
      $('#announcer').html('X Wins! X\'s wins now total ' + xWins + '.');
      boardLock = true;
      $('#A3').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#B3').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#C3').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a3 === 2 && b3 === 2 && c3 === 2) {
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#A3').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#B3').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#C3').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a1 === 1 && b2 === 1 && c3 === 1) {
      // A1-B2-C3 DESCENDING DIAGONAL WIN CHECK
      xWins++;
      $('#announcer').html('X wins! X\'s wins now total ' + xWins + '.');
      boardLock = true;
      $('#A1').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#B2').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#C3').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (a1 === 2 && b2 === 2 && c3 === 2) {
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#A1').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#B2').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#C3').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (c1 === 1 && b2 === 1 && a3 === 1) {
      // C1-B2-A3 ASCENDING DIAGONAL WIN CHECK
      xWins++;
      $('#announcer').html('X Wins! X\'s wins now total ' + xWins + '.');
      boardLock = true;
      $('#C1').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#B2').html('<img src=https://imgur.com/M4tAucJ.png>');
      $('#A3').html('<img src=https://imgur.com/M4tAucJ.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (c1 === 2 && b2 === 2 && a3 === 2) {
      oWins++;
      $('#announcer').html('O Wins! O\'s wins now total ' + oWins + '.');
      boardLock = true;
      $('#C1').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#B2').html('<img src=https://imgur.com/aoBAFkV.png>');
      $('#A3').html('<img src=https://imgur.com/aoBAFkV.png>');
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else if (turnsTaken === 9) {
      // it's 9 because ARRAYS START AT ZERO
      // NO WIN CONDITION, OUT OF SQUARES
      tieWins++;
      $('#announcer').html('Tie game! The board has been tied ' + tieWins + ' times.');
      boardLock = true;
      over = true;
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
      resetBoard();
    } else {
      // WIN CHECK FAILS, DOES NOTHING
      if (authUi.loggedIn === true) {
        authApi.updateGame(index, value, over);
      }
    }
  };

  $('#A1').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (a1clicked === false && turnPlayer === 0) {
      a1clicked = true;
      a1 = 1;
      gameArray[0] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes A1 for turn ' + turnsTaken + '.');
      $('#A1').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 1;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (a1clicked === false && turnPlayer === 1) {
      a1clicked = true;
      a1 = 2;
      gameArray[0] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('0 takes A1 for turn ' + turnsTaken + '.');
      $('#A1').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 1;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (a1clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#A2').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (a2clicked === false && turnPlayer === 0) {
      a2clicked = true;
      a2 = 1;
      gameArray[1] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes A2 for turn ' + turnsTaken + '.');
      $('#A2').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 2;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (a2clicked === false && turnPlayer === 1) {
      a2clicked = true;
      a2 = 2;
      gameArray[1] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('O takes A2 for turn ' + turnsTaken + '.');
      $('#A2').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 2;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (a2clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#A3').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (a3clicked === false && turnPlayer === 0) {
      a3clicked = true;
      a3 = 1;
      gameArray[2] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes A3 for turn ' + turnsTaken + '.');
      $('#A3').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 3;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (a3clicked === false && turnPlayer === 1) {
      a3clicked = true;
      a3 = 2;
      gameArray[2] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('O takes A3 for turn ' + turnsTaken + '.');
      $('#A3').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 3;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (a3clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#B1').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (b1clicked === false && turnPlayer === 0) {
      b1clicked = true;
      b1 = 1;
      gameArray[3] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes B1 for turn ' + turnsTaken + '.');
      $('#B1').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 4;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (b1clicked === false && turnPlayer === 1) {
      b1clicked = true;
      b1 = 2;
      gameArray[3] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('0 takes B1 for turn ' + turnsTaken + '.');
      $('#B1').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 4;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (b1clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#B2').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (b2clicked === false && turnPlayer === 0) {
      b2clicked = true;
      b2 = 1;
      gameArray[4] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes the pivotal B2 for turn ' + turnsTaken + '!');
      $('#B2').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 5;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (b2clicked === false && turnPlayer === 1) {
      b2clicked = true;
      b2 = 2;
      gameArray[4] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('O takes the pivotal b2 for turn ' + turnsTaken + '!');
      $('#B2').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 5;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (b2clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#B3').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (b3clicked === false && turnPlayer === 0) {
      b3clicked = true;
      b3 = 1;
      gameArray[5] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes B3 for turn ' + turnsTaken + '.');
      $('#B3').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 6;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (b3clicked === false && turnPlayer === 1) {
      b3clicked = true;
      b3 = 2;
      gameArray[5] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('0 takes B3 for turn ' + turnsTaken + '.');
      $('#B3').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 6;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (b3clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#C1').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (c1clicked === false && turnPlayer === 0) {
      c1clicked = true;
      c1 = 1;
      gameArray[6] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes C1 for turn ' + turnsTaken + '.');
      $('#C1').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 7;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (c1clicked === false && turnPlayer === 1) {
      c1clicked = true;
      c1 = 2;
      gameArray[6] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('0 takes C1 for turn ' + turnsTaken + '.');
      $('#C1').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 7;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (c1clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#C2').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (c2clicked === false && turnPlayer === 0) {
      c2clicked = true;
      c2 = 1;
      gameArray[7] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes C2 for turn ' + turnsTaken + '.');
      $('#C2').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 8;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (c2clicked === false && turnPlayer === 1) {
      c2clicked = true;
      c2 = 2;
      gameArray[7] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('O takes C2 for turn ' + turnsTaken + '.');
      $('#C2').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 8;
      value = 'o';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (c2clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });

  $('#C3').click(function () {
    if (boardLock === true) {
      $('#announcer').html('Start a new game first.');
      resetAlert();
    } else if (c3clicked === false && turnPlayer === 0) {
      c3clicked = true;
      c3 = 1;
      gameArray[8] = 'x';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 1;
      $('#announcer').html('X takes C3 for turn ' + turnsTaken + '.');
      $('#C3').html('<img src="https://imgur.com/X4mlyl0.png">');
      index = 9;
      value = 'x';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (c3clicked === false && turnPlayer === 1) {
      c3clicked = true;
      c3 = 2;
      gameArray[8] = 'o';
      console.log('game array is', gameArray);
      turnsTaken++;
      turnPlayer = 0;
      $('#announcer').html('0 takes C3 for turn ' + turnsTaken + '.');
      $('#C3').html('<img src="https://imgur.com/DvG7rh1.png">');
      index = 9;
      value = '0';
      console.log('index is' + index);
      console.log('value is' + value);
      console.log('over is' + over);
      winCheck();
    } else if (c3clicked === true) {
      $('#announcer').html('That tile is taken.');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(8);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apiUrl = void 0;
var apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com/',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

module.exports = {
  apiUrl: apiUrl
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(13)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 475px) {\n  body {\n    background-color: #add8e6; } }\n\nh1,\nh3 {\n  color: #808080;\n  font-family: Helvetica, sans-serif; }\n  @media only screen and (max-width: 515px) {\n    h1,\n    h3 {\n      font-size: 21px; } }\n\nh4 {\n  color: #f4b2b2;\n  font-family: Helvetica, sans-serif; }\n\nh2 {\n  color: #fff;\n  background-color: #f4b2b2;\n  -webkit-animation: flash linear 1s;\n  font-family: Helvetica, sans-serif;\n  width: 50%;\n  margin: 0px;\n  border-radius: 10px;\n  padding: 5px;\n  margin-bottom: 20px; }\n  @media only screen and (max-width: 515px) {\n    h2 {\n      font-size: 21px; } }\n\n.flashit {\n  color: #f2f, infinite;\n  animation: flash linear 1s infinite; }\n\n@-webkit-keyframes flash {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: .1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes flash {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: .1; }\n  100% {\n    opacity: 1; } }\n\n.formlink {\n  background: none !important;\n  color: inherit;\n  border: none;\n  padding: 0 !important;\n  font: inherit;\n  cursor: pointer;\n  border-bottom: 1px solid #f4e8b2; }\n\n.formlink:hover {\n  border-bottom: 1px solid #808080; }\n\n#dropdown-anchor {\n  display: inline-block; }\n\n#dropdown-link {\n  display: inline-block; }\n\n#announcer {\n  color: #f4e8b2;\n  background-color: #808080;\n  border: black;\n  font-family: Helvetica, sans-serif;\n  width: 90%;\n  margin: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.form-text,\nh4 {\n  color: #808080;\n  font-family: Helvetica, sans-serif;\n  font-size: 12px; }\n  .form-text .form-text a:hover,\n  h4 .form-text a:hover {\n    color: #f4e8b2; }\n\n.outer-padding {\n  align-items: center;\n  align-self: center;\n  background-color: #e0e0e0;\n  border: 1px;\n  justify-content: center;\n  padding: 5%, auto; }\n\n.tile-padding {\n  align-self: center;\n  align-content: center;\n  width: 325px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: gray; }\n\n.authentications-padding {\n  align-content: center;\n  align-self: center;\n  background-color: white;\n  border-radius: 5px; }\n  @media only screen and (min-width: 476px) {\n    .authentications-padding {\n      margin-bottom: 5px;\n      margin-left: 10%;\n      margin-right: 10%;\n      margin-top: 5px;\n      padding: 5px; } }\n  @media only screen and (max-width: 475px) {\n    .authentications-padding {\n      padding: 5px;\n      width: 335px; } }\n\n.forms {\n  margin-bottom: 1px; }\n\n.tiles {\n  background-color: black;\n  color: white;\n  width: 100px;\n  height: 100px;\n  border-radius: 20px;\n  border-color: #f4e8b2;\n  border-style: solid;\n  margin: 1px;\n  float: left;\n  text-align: center;\n  justify-content: center;\n  overflow: hidden; }\n\ndiv.tiles:hover {\n  background-color: #f4e8b2; }\n\n.tan-line {\n  width: 90%;\n  height: 1px;\n  border: 1px;\n  border-style: solid;\n  margin: 15px;\n  border-color: gray; }\n\n.clear {\n  clear: both; }\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[5]);