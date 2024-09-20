document.getElementById('cash-btn').addEventListener("click",function(e){
    e.preventDefault()
    const cashAmount = getinputValueByid('cash-amount')
    const cashPin = getinputValueByid('add-cashout-pin')

    if(isNaN(cashAmount)){
        alert(" something was worng.try again")
        return;
    }

    if(cashPin === 4343){
        const mainBalance = gettextValuebyID('main-balance')
        if(cashAmount > mainBalance){
            alert('insufficient balance');
            return;
        }
        const newbalance = mainBalance-cashAmount;
       document.getElementById('main-balance').innerText = newbalance

       const h = document.createElement('h5')
       h.classList.add('bg-red-600')
       h.innerText = `${cashAmount} tk cash out successful`
       
       document.getElementById('Histroy').appendChild(h)
       document.getElementById('not-found').classList.add('hidden')
    }
    else{
        alert("something was wrong try again")
    }
})