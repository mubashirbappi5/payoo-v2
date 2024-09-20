console.log('cheak utilities')
// common value fuction
// function getinputFieldById(){
//     console.log("cheak function")
//     const addMoney = document.getElementById('add-amount').value
//     return addMoney
// }


function getinputValueByid(id){
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}


function gettextValuebyID(id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)
    return textNumber
}

function showdisplyByid(id){
    document.getElementById('show-add-money').classList.add('hidden')
    document.getElementById('show-cash-out').classList.add('hidden')
    document.getElementById('show-history-tran').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}

document.getElementById('log-out').addEventListener("click",function(){
    window.location.href ='index.html'
})