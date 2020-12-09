'use strict'

const events = require('./events')

$(() => {
  // Hide authenticated options:
  $('.authenticated').hide()
  // Sign-Up Listener:
  $('#sign-up').on('submit', events.onSignUp)

  // Sign-In Listener:
  $('#sign-in').on('submit', events.onSignIn)

  // Change Password listener:
  $('#change-password').on('submit', events.onChangePassword)

  // Click event for sign out:
  $('#sign-out').on('click', events.onSignOut)
})
