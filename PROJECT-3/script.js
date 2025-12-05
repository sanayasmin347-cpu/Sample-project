var arr = [{
    name: 'SRH',
    primary: 'rgba(250, 203, 75, 1)',
    secondary: 'rgba(186, 31, 22, 1)'
},{
    name: 'GT',
    primary: 'rgba(202, 152, 16, 1)',
    secondary: 'black'
},{
    name: 'RCB',
    primary: 'rgba(202, 152, 16, 1)',
    secondary: 'rgba(186, 31, 22, 1)'
},{
    name: 'KKR',
    primary: 'rgba(202, 152, 16, 1)',
    secondary: 'rgba(129, 93, 227, 1)'
},{
    name: 'RR',
    primary: 'white',
    secondary: 'rgba(198, 37, 179, 1)'
},{
    name: 'DC',
    primary: 'white',
    secondary: 'rgba(15, 56, 170, 1)'
},{
    name: 'CSK',
    primary: 'rgba(15, 56, 170, 1)',
    secondary: 'yellow'
}]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click', function(){
    var num = Math.floor(Math.random()*arr.length)
    let winner = arr[num]
    h1.innerHTML = winner.name
    h1.style.color = winner.primary
    h1.style.backgroundColor = winner.secondary
})