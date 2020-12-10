curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/game" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "game": {
      "cells": ["", "", "", "", "", "", "", "", ""],
      "over": false,
      "owner": "'"${ID}"'"
    }
  }'
  echo
