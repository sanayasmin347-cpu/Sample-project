var dog = document.querySelector('.img1')
var cat = document.querySelector('.img2')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    var img1src = dog.getAttribute('src')
    var img2src = cat.getAttribute('src')
 
    dog.setAttribute('src',img2src)
    cat.setAttribute('src',img1src)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
})
