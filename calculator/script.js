let btn = document.querySelectorAll('.btn')
let display = document.querySelector('#display')

function calculate(value) {
  try {
    display.value = eval(display.value)
  } catch  {
    display.value = 'Error'
  }
}
function appendDisplay(value) {
display.value+= value
} 
function clearDisplay(){
    display.value = ''
}