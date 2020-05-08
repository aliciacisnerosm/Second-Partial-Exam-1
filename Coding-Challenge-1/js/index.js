
function fetchForm(name){
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  let searchResults = document.querySelector('.js-search-results');
  let settings = {
    method: 'GET'
  }
  fetch(url, settings).then(obj =>{
    if(obj.ok){
      return obj.json();
    }
    throw new Error(err); //pendiente xd
  }).then(jsonObj =>{
    if(jsonObj.length == undefined){
      searchResults.innerHTML = "Meal not found"
    }else{
      for(let i = 0; i < jsonObj.meals.length; i++){
        searchResults.innerHTML = `<div>Name: ${jsonObj.meals[i].strMeal}</div>
        <div>Cousine: ${jsonObj.meals[i].strArea}</div>
        <div>Cousine: ${jsonObj.meals[i].strInstructions}</div>
        <img src="${jsonObj.meals[i].strMealThumb}">`
      }
    }
   
  }).catch(err =>{
    console.log(err);
  })
}


function watchform(){
  let mealForm = document.querySelector('.js-search-form');
  mealForm.addEventListener('submit', event =>{
    event.preventDefault();
    let mealName = document.getElementById('query').value;
    fetchForm(mealName);
  });
}

function init(){
  watchform();
}
init();