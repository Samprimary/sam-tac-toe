'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is', signUpResponse)
}

const signUpError = function (error) {
  console.log('Error in sign up response is', signUpResponse)
}

const signInSuccess = function (response) {
  console.log('signInResponse is', response)
  store.user = response.user
}

const signInError = function (error) {
  console.log('Error in sign in response is', signInResponse)
}

const changePasswordSuccess = function (response) {
  console.log('changePasswordResponse is', changePasswordResponse)
}

const changePasswordError = function (error) {
  console.log('Error in password response is', changePasswordResponse)
}

const signOutSuccess = function (response) {
  console.log('you successfully signed out')
  delete store.user
  console.log('store after sign out is', store)
}

const signOutError = function (error) {
  console.log('Error in sign out is', signOutResponse)
}

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
}
