'use strict'

const getFormFields = require('./get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('the form was submitted')
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('the form was submitted')
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Did I get data? - ', data)
  authApi.changePassword(data)
  .then(authUi.changePasswordSuccess)
  .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutError)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
