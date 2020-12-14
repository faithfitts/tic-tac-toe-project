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
  $('#message').css('color', 'green')
  console.log(store)
  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const signInFailure = function (error) {
  $('#message').text('Sorry! Sign Up Failed: ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// Change-Password Success & Failure
const changePasswordSuccess = function (response) {
  $('#message').text('You have successfully changed your password!')
  $('#message').css('color', 'green')
}

const changePasswordFailure = function (error) {
  $('#message').text('We were unable to change your password. Please try again! ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// Sign-Out Success & Failure
const signOutSuccess = function () {
  $('#message').text('Sign Out Successful!')
  $('#message').css('color', 'green')
  $('.new-game').hide()
  $('.unauthenticated').show()
  $('.authenticated').hide()

  // Removes token
  store.user = null
  // Resets the form
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('SignOut Failed: ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// GAME UI BEGINS HERE

// Creating a New Game Success & Failure
const newGameSuccess = function (response) {
  // console.log(response.data)
  $('.authenticated').show()
  $('.new-game').show()
  $('#message').text('New Game Started!')
  $('#message').css('color', 'green')

  store.game = response.game
  const gameObject = response.game
  console.log('Game Object: ', gameObject)

  $('.unauthenticated').hide()
}

const newGameFailure = function (error) {
  $('#message').text('Sorry! You can not create a new game: ' + error.responseJSON.message)
  $('#message').css('color', 'red')
}

// Checking the Squares Success & Failure
const updateGameSuccess = function (response) {
  $('#message').text('Square Clicked!')
  $('#message').css('color', 'green')

  store.game = response.game
  const gameObject = store.game.cells
  console.log(gameObject)
}

// Checking for a winner
const checkWinnerSuccess = function (response) {
  $('#message').text('Next Player!!!')
  $('#message').css('color', 'green')

  // store.game = response.game
  // const gameObject = store.game.over
  // console.log(gameObject)
}

// Game Stats (INCOMPLETE)
const gamesPlayedSuccess = function (data) {
  const gamesPlayed = data.game.over
  console.log(data)
  $('#message').text(`You've played ${gamesPlayed} games.`)
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
  updateGameSuccess,
  checkWinnerSuccess,
  gamesPlayedSuccess

}
