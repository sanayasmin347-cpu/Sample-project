var btn = document.querySelector('.download')
var percent = document.querySelector('p')
var full = document.querySelector('.full')

btn.addEventListener('click', function(){
    var grow = 0;
    var int = setInterval(function(){
        grow++ 
        percent.innerHTML = grow+"%"
        full.style.width = grow+"%"
        btn.innerHTML = 'Downloading...' 
    },50)
    setTimeout(function() {
        clearInterval(int)
        btn.innerHTML = 'Downloaded!'
    },5000)
})