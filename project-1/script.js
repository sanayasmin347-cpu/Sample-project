
var box = document.querySelector('#hello')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    var c = Math.floor(Math.random()*9999)

    box.style.backgroundColor = `#${c}`
})