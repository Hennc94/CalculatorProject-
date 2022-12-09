//to select class display
let display = document.querySelector("#display")
//to select all buttons
const buttons = document.querySelectorAll("button")

let numText = display.innerText

for (const btn of buttons) {
  btn.addEventListener("click", function (e) {
    let btnText = e.target.innerText
    if (btnText === "AC") {
      display.innerText = ""
    } else if (btnText === "÷") {
      display.innerText += "/"
    } else if (btnText === "*") {
      display.innerText += "*"
    } else if (btnText === "=") {
    } else {
      (display.innerText += btnText)
    }
  })

}

// let numText = display.innerText
// let splitText = numText.split("+")
console.log(numText)


// function sumNum(str){
//   let strNum = str.split(",")
//   let sum = display.reduce(function(total,num){
//     return parseFloat(total) + parseFloat(num)
//   })
//   return sum
// }





//   document.addEventListener('click', e => {
//   let coin = document.createElement('div')
//   coin.classList.add('coin')
//   coin.style.top = `${e.clientY}px`
//   coin.style.left = `${e.clientX}px`
//   document.body.append(coin)
//   console.log(e.clientX, e.clientY)

//   setTimeout(() => {
//     coin.remove()
//   }, 400)
// })