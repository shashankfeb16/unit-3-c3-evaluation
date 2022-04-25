// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var walletamount = JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText = walletamount;

let moviesdiv = document.getElementById("movies")
let id;

async function searchMovies(){
   try{
    let search =  document.getElementById("search").value;

    let res = await fetch(`https://www.omdbapi.com/?apikey=9a98f2ab&s=${search}`);

    let data = await res.json();
    console.log(data.Search);
    let movies = data.Search;
    append(movies);
    if(movies==undefined){
        moviesdiv.innerHTML = " ";
    }
   }
   catch(err){
       console.log(err);
   }
}

function append(data){
    moviesdiv.innerHTML = null;
    data.map(function({Poster,Title}){
        let box = document.createElement("div");
        let image = document.createElement("img");
        image.src = Poster;
        let title = document.createElement("p");
        title.innerText = Title;
        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        let data = {
            Poster,
            Title
        }
        
        btn.addEventListener("click",function(){
            redirect(data)
        });
        box.append(image,title,btn);
        moviesdiv.append(box);
    })
}

function redirect(x){
    
    window.location.href = "checkout.html"
    localStorage.setItem("movie",JSON.stringify(x));

}

function debounce(func,delay){
    if(id){
        clearInterval(id)
    }
  id = setTimeout(function(){
      func()
  },delay)
}