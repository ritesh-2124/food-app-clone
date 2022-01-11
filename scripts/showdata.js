async function getData(url){
try{
     let res = await fetch(url);
    let data = await res.json();
    return data.meals;
}
catch(err){
    console.log(err)
}
}


function showdata(data , location){
    data.map(function(elem){
        let childDiv= document.createElement("div");
    childDiv.setAttribute("class","childDiv");
    let title=document.createElement("p");
    let meal_type=document.createElement("h4");
    let img= document.createElement("img");
    img.src=elem.strMealThumb;
    title.textContent=elem.strMeal;
     meal_type.textContent=elem.strArea;
    childDiv.append(img,title , meal_type);
    location.append(childDiv);
    })
}


export {showdata , getData}