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

// Game UI
const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('.box').text('')

  api.newGame(data)
    .then(function (response) {
      return response
    })
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamesPlayed = () => {
  event.preventDefault()
  api.gamesPlayed()
    .then(ui.gamesPlayedSuccess)
}

const onSquareClick = function (event) {
  event.preventDefault()
}

// Switching Between 'X' and 'O'
let playerTurn = 'X'
let squareClick = '.box'

const onUpdateGame = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  const gameArray = store.game.cells
  const value = gameArray[cellIndex]

  // if space is empty
  if (value === '') {
    $(event.target).html(playerTurn)

    // update api
    api.updateGame(cellIndex, playerTurn)
      .then(ui.updateGameSuccess)
      .then(() => checkWinner(store.game.cells))

    // change turn
    // playerTurn = playerTurn === 'X' ? 'O' : 'X'
    if (playerTurn === 'X') {
      playerTurn = 'O'
    } else {
      playerTurn = 'X'
    }

    // if space is taken
  } else {
    $('#message').text('This spot is taken')
let gameWon = checkWinner(squareClick, playerTurn)
  }
}

// Game Array

// Logic behind array numbering
// [0][1][2]
// [3][4][5]
// [6][7][8]

const checkWinner = function (gameWon) {
  const isOccupied = (playerTurn) => playerTurn !== ''
  const gameArray = store.game.cells

  // Row 1 Win: if square [0] is equal to square [1] and square [2]
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    console.log('Row 1 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

    // Row 2 Win: if square [3] is equal to square [4] and square [5]
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    console.log('Row 2 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

    // Row 3 Win: if square [6] is equal to square [7] and square [8]
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    console.log('Row 3 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

    // Column 1 Win: if square [0] is equal to square [3] and square [6]
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    console.log('Column 1 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

    // Column 2 Win: if square [1] is equal to square [4] and square [7]
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    console.log('Column 2 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

    // Column 3 Win: if square [2] is equal to square [5] and square [8]
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    console.log('Column 3 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

    // Diagonal Top-Left to Bottom-Right Win (or visa versa): if square [0] is equal to square [4] and square [8]
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    console.log('Diagonal Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

    // Diagonal Top-Right to Bottom-Left Win (or visa-versa): if square [2] is equal to square [4] and square [6]
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    console.log('Diagonal Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // $('.box').off('click')

  // if none of these conditions are met
  } else if (gameArray.every(isOccupied) === true) {
    store.game.over = true
    $('#message').text('It is a tie!')
    console.log('TIE!')
    // $('.box').off('click')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onUpdateGame,
  onSquareClick,
  checkWinner,
  onGamesPlayed
}
