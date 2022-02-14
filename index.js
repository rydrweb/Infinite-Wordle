"use strict";
ans = legal[Math.floor(Math.random()*legal.length)];
function changeAnswer(answer) {
  ans = answer
  return null
}

let guesses = 0

function nl(element){
  var nextLine = document.createElement("br")
  element.appendChild(nextLine)
}

function wordle() {
  const board = document.getElementById("board")
  var word = document.getElementById("word").value.toLowerCase()
  if (word.length < 5 || !(legal.includes(word))) {
    alert("Word must be valid")
    return
  }
  document.getElementById("word").value = ""
  var lans = ans.split("")
  for (var i = 0; i < word.length; i++) {
    var letter = document.createElement("span")
    letter.className = "letter"
    letter.textContent = word[i]
    if (lans.includes(word[i])) {
      if (word[i] == lans[i]) {
        letter.setAttribute("style", "background-color:#2ab825;")
        lans[i] = " "
      }
      else {
        letter.setAttribute("style", "background-color:#e8d900;")
        lans[lans.indexOf(word[i])] = " "
      }
    }
    board.appendChild(letter)
  }
  nl(board)
  if (word == ans) {
    document.getElementById("submit").remove()
    return
  }
  guesses++
  if (guesses == 6) {
    var lose = document.createElement("p")
    lose.textContent = "You Lost :("
    board.appendChild(lose)
    document.getElementById("submit").remove()
  }
}