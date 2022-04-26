// Store the wallet amount to your local storage with key "amount"

var sum = JSON.parse(localStorage.getItem("amount")) || 0;
document.getElementById("wallet").innerText = sum;
// document.getElementById("wallet").innerText = total

function addToWallet(){
    var amount = +document.getElementById("amount").value;
     sum = sum+amount;
     console.log(sum);
    localStorage.setItem("amount",JSON.stringify(sum))
    window.location.reload()
}



