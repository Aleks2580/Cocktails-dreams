const allCards = document.querySelector('.cardsAll');
console.log(allCards);
allCards.addEventListener('click', async(e) => {
  if (e.target.tagName === "A" && e.target.innerHTML === "Delete") {
     const {id} = e.target;
     const response = await fetch('/deleterecipe', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
     })
     const result = await response.json();

    if(result.destroy === 'OK') {
      allCards.removeChild(e.target.parentNode.parentNode);
    }
  }
})