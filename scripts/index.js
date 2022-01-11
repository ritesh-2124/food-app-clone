let waiting;
import navbar from "./nav.js";
import {showdata , getData} from "./showdata.js";

document.querySelector("#navbarid").innerHTML = navbar()
let search =  document.querySelector("#search");
show()
function show(){
if(search.length<=2){
    return false;
}
let res2 = search.value || "chicken"

    let response = getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${res2}`);

console.log(response)
    let showd = document.querySelector("#main_frame");
    showd.innerHTML = "";
response.then((result) => {

    showdata(result , showd)
    console.log(result)
}).catch((err) => {
    console.log(err)
});
}
search.oninput=()=>{
   deBounce(show,1000);
   
}
function deBounce(fun,delay){
    if(waiting){
        clearTimeout(waiting);
    }
  waiting=setTimeout(()=>{
         fun();
     },delay);
}
