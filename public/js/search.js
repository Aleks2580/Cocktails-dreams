const searchForm = document.querySelector(".searchForm");
const enterSearch = document.querySelector(".enter-search")
const searchBy = document.querySelector(".search-by");
const searchCards = document.querySelector(".cardsAll")


searchForm.addEventListener('submit', async (e) => {
  
  if (enterSearch.value === '') {
    alert('Search value cannot be empty');
    return;
  }

  e.preventDefault();
  searchCards.innerHTML = '';
  spinner.style.visibility = 'visible';

  if (searchBy.value === 'Search cocktails by name') {

    try {

      const topic = enterSearch.value;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${topic}`
      const response = await fetch(url);
      const result = await response.json();
      //console.log(result);

      result.drinks.forEach((cocktail) => {

  
  
        let videoLink;
        if(!cocktail.strVideo) {
          videoLink =  `No video yet`
        } else {
          videoLink = `<a href=${cocktail.strVideo}>Video</a>`
        }

        let filterArr = Object.entries(cocktail).slice(17,31);
        let filterArr1 = filterArr.filter((arr) => !arr.includes(null));
        let ingredientsArr = [];
        filterArr1.map((el) => {
        ingredientsArr.push(el[1]);
         return ingredientsArr
    })
     let ingredientsStr = ingredientsArr.join(', ')
  

     let filterArrMeasure = Object.entries(cocktail).slice(32,45);
     let filterArrMeasure1 = filterArrMeasure.filter((arr) => !arr.includes(null) &&!arr.includes("") );
     let measureArr = [];
     filterArrMeasure1.map((el) => {
      measureArr.push(el[1]);
      return measureArr
 })
  let measureStr = measureArr.join(', ')



        const cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card');
         cardDiv.innerHTML = `
       
        
         <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="cocktail-pic">
         <div class="card-body">
           <h5 class="card-title">${cocktail.strDrink}</h5>
           <p class="card-text">Ingredients: ${ingredientsStr} </p>
           <a  class="btn btn-primary">Add</a>
           <p id="video-link">${videoLink}</p>
           <p id="recipe">${cocktail.strInstructions}</p>
           <p id="glass">${cocktail.strGlass}</p>
           <p id="measure">${measureStr}</p>
         </div>
      
        
           
          
    `;
     searchCards.appendChild(cardDiv);
     enterSearch.value = '';
     spinner.style.visibility = 'hidden';
      })
    } catch (error) {
      console.log(error);
    }

  }



  if (searchBy.value === 'Search cocktails by first letter') {

    try {

      const topic = enterSearch.value;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${topic}`
      const response = await fetch(url);
      const result = await response.json();
     console.log(result);

      result.drinks.forEach((cocktail) => {

  
  
        let videoLink;
        if(!cocktail.strVideo) {
          videoLink =  `No video yet`
        } else {
          videoLink = `<a href=${cocktail.strVideo}>Video</a>`
        }

        let filterArr = Object.entries(cocktail).slice(17,31);
        let filterArr1 = filterArr.filter((arr) => !arr.includes(null));
        let ingredientsArr = [];
        filterArr1.map((el) => {
        ingredientsArr.push(el[1]);
         return ingredientsArr
    })
     let ingredientsStr = ingredientsArr.join(', ')
  

     let filterArrMeasure = Object.entries(cocktail).slice(32,45);
     let filterArrMeasure1 = filterArrMeasure.filter((arr) => !arr.includes(null) &&!arr.includes("") );
     let measureArr = [];
     filterArrMeasure1.map((el) => {
      measureArr.push(el[1]);
      return measureArr
 })
  let measureStr = measureArr.join(', ')



        const cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card');
         cardDiv.innerHTML = `
       
        
         <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="cocktail-pic">
         <div class="card-body">
           <h5 class="card-title">${cocktail.strDrink}</h5>
           <p class="card-text">Ingredients: ${ingredientsStr} </p>
           <a  class="btn btn-primary">Add</a>
           <p id="video-link">${videoLink}</p>
           <p id="recipe">${cocktail.strInstructions}</p>
           <p id="glass">${cocktail.strGlass}</p>
           <p id="measure">${measureStr}</p>
         </div>
      
        
           
          
    `;
     searchCards.appendChild(cardDiv);
     enterSearch.value = '';
     spinner.style.visibility = 'hidden';
      })
    } catch (error) {
      console.log(error);
    }

  }

})

