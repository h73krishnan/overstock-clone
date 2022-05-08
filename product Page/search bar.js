var searchinput=document.getElementById("search_input");



var searchbar=document.getElementById("searchbar")
console.log(searchbar)

searchbar.addEventListener("click",showdiv);
var inputdiv=document.getElementById("inputdiv")

function showdiv(){
    document.getElementById("navigate").innerHTML=null
    inputdiv.innerHTML=null
    var div=document.createElement("div");
    


     


    inputdiv.append(div)

}





function pagereload(){
    window.location.reload()
}

