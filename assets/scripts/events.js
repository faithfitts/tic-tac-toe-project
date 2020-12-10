'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(console.log)
    .catch(console.error)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(function (response) {
      return response
    })
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const playerTurn = 'X'
const onSquareClick = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  const gameArray = store.game.cells
  const value = gameArray[cellIndex]

  // if space is empty
  if (value === '') {
    $(event.target).html(playerTurn)

    api.squareClick(cellIndex, playerTurn)
      .then(ui.squareClickSuccess)
      // .catch(ui.squareClickFailure)

  // if space is taken
  } else {
    $('#message').text('This space is taken.')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onSquareClick
}
