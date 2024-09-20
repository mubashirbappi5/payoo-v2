document.getElementById('btnid').addEventListener("click",function(e){
    e.preventDefault()
     const phoneNumber = getinputValueByid('phone-num')
     const loginPin = getinputValueByid('pin-num')

     if(loginPin === 4343 && phoneNumber === 1851516736){
        window.location.href='home.html'
     }
     else{
        alert('try again later')
     }
})