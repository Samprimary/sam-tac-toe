'use strict'

// const getFormFields = require('./get-form-fields')
// const store = require('./store')
const config = require('../scripts/config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function (data) {
  // ('sign out is', data)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  // ('store is', store)
  // ('token is', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function (event) {
  // ('user is ', store.user)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function () {
  // ('Token is ', store.user.token)
  console.log('store.game.id is ' + store.game.id)
  console.log('store.user.token is ' + store.user.token)
  console.log('store.gameData is ' + store.gameData)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: store.gameData
  })
}

// get played games
const gameIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

// SHOW ONE GAME
const getGame = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  newGame: newGame,
  updateGame: updateGame,
  getGame: getGame,
  gameIndex: gameIndex
}
