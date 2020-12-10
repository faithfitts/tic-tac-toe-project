'use strict'

const store = require('./store')

// Sign-Up Success & Failure Responses
const signUpSuccess = function (response) {
  $('#message').text('You have signed Up Successfully!')
}

const signUpFailure = function (error) {
  $('#message').text('We were unable to sign you in. Please try again. ' + error.message)
}

// Sign-In Success & Failure Responses
const signInSuccess = function (response) {
  $('#message').text('You have successfully signed in!')
  console.log(store)
  store.user = response.user
  console.log(store)

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const signInFailure = function (error) {
  $('#message').text('Sorry! Sign Up Failed: ' + error.responseJSON.message)
}

// Change-Password Success & Failure
const changePasswordSuccess = function (response) {
  $('#message').text('You have successfully changed your password!')
}

const changePasswordFailure = function (error) {
  $('#message').text('We were unable to change your password. Please try again! ' + error.responseJSON.message)
}

// Sign-Out Success & Failure
const signOutSuccess = function () {
  $('#message').text('Sign Out Successful!')
  $('.new-game').hide()
  $('.unauthenticated').show()
  $('.authenticated').hide()

  // Removes token
  store.user = null
  // Resets the form:
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('SignOut Failed: ' + error.responseJSON.message)
}

// GAME UI BEGINS HERE

// Creating a New Game Success & Failure
const newGameSuccess = function (response) {
  // console.log(response.data)
  $('.authenticated').show()
  $('.new-game').show()
  $('#message').text('New Game Started!')
  $('#form').trigger('reset')

  store.game = response.game
  const gameObject = response.game
  console.log('Game Object: ', gameObject)

  $('.unauthenticated').hide()
}

const newGameFailure = function (error) {
  $('#message').text('Sorry! You can not create a new game: ' + error.responseJSON.message)
}

// Clicking the Squares Success & Failure
const squareClickSuccess = function (response) {
  $('#message').text('Square Clicked!')
  console.log(response)
  store.game = response.game
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  squareClickSuccess

}
