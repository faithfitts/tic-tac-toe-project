'use strict'

const events = require('./events')

$(() => {
  $('.authenticated').hide()
  $('.new-game').hide()

  // Sign-Up Listener:
  $('#sign-up').on('submit', events.onSignUp)

  // Sign-In Listener:
  $('#sign-in').on('submit', events.onSignIn)

  // Change Password listener:
  $('#change-password').on('submit', events.onChangePassword)

  // Click event for sign out:
  $('#sign-out').on('click', events.onSignOut)

  // New Game Listener
  $('#start-new-game').on('submit', events.onNewGame)

  // Click event for game board
  $('.box').on('click', events.onSquareClick, events.onPlayerTurn)
})
