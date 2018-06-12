'use strict'

const store = require('./store')
const api = require('./api')
const events = require('./events')

const signUpSuccess = function (response) {
    $('#login-infobox').html(`<h4>New Player Created!</h4>`)
}

const signUpError = function (error) {
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#login-infobox').html(`<h4>Signed In!</h4>`)
  $('#sign-in-field').html(`<form id='sign-out-form'>
      <button type="submit">Sign Out</button>
    </form>`)
  $('#sign-in-form').on('submit', '#sign-out-form', events.onSignOut)
}

const signInError = function (error) {
  $('#login-infobox').html(`<h4>There was an error.</h4>`)
}

const changePasswordSuccess = function (response) {
  $('#login-infobox').html(`<h4>You successfully changed your password.</h4>`)
}

const changePasswordError = function (error) {
  $('#login-infobox').html(`<h4>There was an error.</h4>`)
}

const signOutSuccess = function (response) {
  console.log('you successfully signed out')
  delete store.user
  console.log('store after sign out is', store)
  $('#login-infobox').html(`<h4>Signed Out!</h4>`)
}

const signOutError = function (error) {
  $('#login-infobox').html(`<h4>There was an error.</h4>`)
}

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
  store: store
//  doSignUp: doSignUp,
//  doChangePassword: doChangePassword
}
