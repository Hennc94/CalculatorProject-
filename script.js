const buttons = document.querySelectorAll('button')
let display = document.querySelector('#display')

let firstNum = 0
let secondNum = 0
let operatorChosen = false
let operator = ''

function handleOperator(op) {

  if (operatorChosen === false) {
    operator = op
    firstNum = display.innerText
    display.innerText = ''
    operatorChosen = true
  }

}

function handleEvaluation() {

  operatorChosen = false;
  secondNum = display.innerText

  if (operator === '+') {
    return parseFloat(firstNum) + parseFloat(secondNum)
  }
  if (operator === '*') {
    return parseFloat(firstNum) * parseFloat(secondNum)
  }
  if (operator === "-") {
    return parseFloat(firstNum) - parseFloat(secondNum)
  }
  if (operator ==="÷") {
    return parseFloat(firstNum) / parseFloat(secondNum)
  }
  
}


for (let button of buttons) {
  button.addEventListener('click', e => {
    console.log(e.target.classList[0] == 'number')
    let num = e.target.dataset.number
    let op = e.target.dataset.operator

    if (op === '=') {
      display.innerText = handleEvaluation()
      return;
    }

    if (num) {
      display.innerText += num;
    }
    if (op) {
      handleOperator(op)
    }

  })
}


//don't forget backspace button
// e.target.id
// display.innerText.slice(0, -1)

document.addEventListener('click', e => {
  let coin = document.createElement('div')
  coin.classList.add('coin')
  coin.style.top = `${e.clientY}px`
  coin.style.left = `${e.clientX}px`
  document.body.append(coin)
  
  console.log(e.clientX, e.clientY)

  setTimeout(() => {
    coin.remove()
  }, 400)
})