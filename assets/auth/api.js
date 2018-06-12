'use strict'

const store = require('../store')
// what does store do that i did not finish

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://aqueous-atoll-85096.herokuapp.com',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://aqueous-atoll-85096.herokuapp.com',
    data: data
  })
}

const changePassword = function (data) {
  console.log('store is', store)
  console.log('token is', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: 'https://aqueous-atoll-85096.herokuapp.com',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function (data) {
  console.log('sign out is', data)
  return $.ajax({
    method: 'DELETE',
    url: 'https://aqueous-atoll-85096.herokuapp.com',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://aqueous-atoll-85096.herokuapp.com',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  updateGame
}
