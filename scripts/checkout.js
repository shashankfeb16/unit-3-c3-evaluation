// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var wallet = JSON.parse(localStorage.getItem("amount")) || 0
document.getElementById("wallet").innerText = wallet;


let moviescheckout = JSON.parse(localStorage.getItem("movie"));

let moviesdiv = document.getElementById("movie");
// moviesdiv.append(moviescheckout)
let div = document.createElement("div");
let image = document.createElement("img");
image.src = moviescheckout.Poster;
let title = document.createElement("p");
title.innerText = moviescheckout.Title;
div.append(image,title)
moviesdiv.append(div)


function submit(){
    event.preventDefault;
    let name = document.getElementById("user_name").value;
    let number = document.getElementById("number_of_seats").value;
    let total = 100*number
    console.log(total)
    if(total>wallet){
        alert("Insufficient Balance !")
    }
    else{
        alert("Booking Successful!");
    }
    wallet = wallet-total;
    localStorage.setItem("amount",JSON.stringify(wallet));
    window.location.reload();
   
}

