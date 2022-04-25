// Store the wallet amount to your local storage with key "amount"

var wallet = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText = wallet;
// document.getElementById("wallet").innerText = total
function addToWallet(){
    var amount = +document.getElementById("amount").value
    localStorage.setItem("amount",JSON.stringify(amount))
    window.location.reload()
}



