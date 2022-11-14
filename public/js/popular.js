const mainDivPopular = document.querySelector('.row');
const cocktails = ['11003','11001', '11005', '11007', '11006', '178325', '17212', '11008', '11000' ];



const displayPopular =  function() {
  spinner.style.visibility = 'visible';
  cocktails.forEach( async (cocktail) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`
    const response = await fetch(url);
    const result = await response.json();

    //console.log(result.drinks[0].strVideo);
    let videoLink
    if(!result.drinks[0].strVideo) {
      videoLink =  `Sorry, no video yet`
    } else {
      videoLink = `<a href=${result.drinks[0].strVideo}>Video</a>`
    }

    const filterArr = Object.entries(result.drinks[0]).slice(17,31);
    const filterArr1 = filterArr.filter((arr) => !arr.includes(null));
    const ingredientsArr = [];
    filterArr1.map((el) => {
      ingredientsArr.push(el[1]);
      return ingredientsArr
    })
    const ingredientsStr = ingredientsArr.join(', ')
  


    const divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-xs-12 col-sm-6 col-md-4');
    divCol.innerHTML = 
    `
    
    <div class="image-flip" >
    <div class="mainflip flip-0">
        <div class="frontside">
            <div class="card">
                <div class="card-body text-center">
                    <p><img class=" img-fluid" src="${result.drinks[0].strDrinkThumb}" /></p>
                    <h4 class="card-title">${result.drinks[0].strDrink}</h4>
                    <p class="card-text">Ingredients: ${ingredientsStr}</p>
                    
                   
                </div>
            </div>
        </div>
        <div class="backside">
            <div class="card">
                <div class="card-body text-center mt-4">
                    <h4 class="card-title">Recipe</h4>
                    <p class="card-text">${result.drinks[0].strInstructions}</p>
                    <h6>Glass</h6>
                    <p class="card-text">${result.drinks[0].strGlass}</p>
                   
                        <p>${videoLink}</p>
                      
                       
                    
                </div>
            </div>
        </div>
    </div>
</div>
    
    
    `

    mainDivPopular.appendChild(divCol);
    spinner.style.visibility = 'hidden';
    
   
  })

 
}
  
displayPopular();








