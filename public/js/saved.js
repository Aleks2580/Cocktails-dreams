const mainDiv = document.querySelector('.cardsAll');
;

mainDiv.addEventListener('click', async (e) => {
  if(e.target.tagName === 'A' && e.target.innerHTML === "Add") {
    const closestParent = e.target.closest(".card");
    const image = closestParent.children[0].currentSrc;
    const name = closestParent.children[1].children[0].innerText;
    const ingredients = closestParent.children[1].children[1].innerText;
    const recipe = closestParent.children[1].children[4].innerText;
    const glass = closestParent.children[1].children[5].innerText;
    const measure = closestParent.children[1].children[6].innerText;
    let video;
  if (closestParent.children[1].children[3].children.length === 1){
    video = closestParent.children[1].children[3].children[0].href
    } else {
    video = 'No video yet'
  }


  const response = await fetch('/saved' , {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, image, ingredients, recipe, glass, measure, video  }),
  })

    const result = await response.json();
    //console.log(result);
  }
})