// Capture the clear button to a variable
const clearButton = document.querySelector('#clearButton');
// Capture the add button to a variable
const addButton = document.querySelector('#addButton');
// ✅ Select for #heading1 
// ✅ Isolate the inner html
let inputScreen = document.querySelector('#inputPanelText')
// Counter in variable
let counter = 0
// Function that clears the inputScreenText
function clearInputText() {
  counter = 0
  inputScreen.innerText = counter
}
function incrementCounter() {
  if (inputScreen.innerText == 'Input Screen'){
    clearInputText()
  }
  counter = counter + 1
  inputScreen.innerText = counter
}
// Capture whenever the clear button is clicked
clearButton.addEventListener('click', clearInputText)
// Capture whenever the 'Add 1' button is clicked
addButton.addEventListener('click', incrementCounter)