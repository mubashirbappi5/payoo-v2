document.getElementById('add-btn').addEventListener("click",function(e){
    e.preventDefault()
    console.log("cheak btn")

    // const addMoney=  getinputFieldById();
    // console.log('cheak add money is ', addMoney)

    const addMoney = getinputValueByid('add-amount')
   
    const pinNumber = getinputValueByid('add-pin')

    if(isNaN(addMoney)){
        alert(" something was worng.try again")
        return;
    }

    if(pinNumber === 4343){
        const mainBalance = gettextValuebyID('main-balance')
        const newBalance = mainBalance + addMoney
        document.getElementById('main-balance').innerText = newBalance
        const p = document.createElement('p')
        p.classList.add('bg-green-400')
        p.innerText = `${addMoney} tk add money successful`

        document.getElementById('Histroy').appendChild(p)
        document.getElementById('not-found').classList.add('hidden')

    }
    else{
        alert("someting was wrong.try again")
    }
    
})