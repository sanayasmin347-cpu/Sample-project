var body = document.querySelector('body')
var btn = document.querySelector('.btn')

var arr = []

btn.addEventListener('click', function(){
    var x = Math.floor(Math.random()*90)
    var y = Math.random()*90
    var rot = Math.floor(Math.random()*360)
    var chutki = document.createElement('img')
    chutki.setAttribute('src','./chutki.png')
    chutki.style.height = '50px'
    chutki.style.position = 'absolute'
    chutki.style.left = x+'%'
    chutki.style.top = y+'%'
    chutki.style.rotate = rot+'deg'
    body.appendChild(chutki)
    console.log(chutki)
})