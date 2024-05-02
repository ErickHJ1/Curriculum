var toggle =document.getElementById ('toggle')


var body = document.querySelector('body')


toggle.addEventListener("click",()=>{
    body.classList.toggle('active')
    toggle.classList.toggle('active')

})
