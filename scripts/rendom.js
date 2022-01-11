
import navbar from "./nav.js";
import { getData} from  "./showdata.js";
document.querySelector("#navbarid").innerHTML = navbar()

let response = getData(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);

console.log(response);
let showhere = document.querySelector("#main_frame");
response.then((result) => {
     showdata(result , showhere)
     console.log(result)
}).catch((err) => {
    console.log(err)
});


function showdata(data , location){
    data.map(function(elem){
        let childDiv= document.createElement("div");
    childDiv.setAttribute("class","childDiv");
    let title=document.createElement("p");
    let meal_type=document.createElement("h4");
    let img= document.createElement("img");
    let make = document.createElement("p");
    make.textContent = elem.strInstructions;
    img.src=elem.strMealThumb;
    title.textContent=elem.strMeal;
     meal_type.textContent=elem.strArea;
     let div =  document.createElement("div");
     div.append(title , meal_type ,make)
    childDiv.append(img,div);
    location.append(childDiv);
    })
}

