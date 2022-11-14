const React = require('react');
const Layout = require('./Layout');

module.exports = function Saved({newUser, data}) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="/styles/accountsaved.css" />
      <script defer src="/js/delete.js" />
 <div className="savedBackground">
  <section>
  
      <div className="cardsAll">
         {data?.map((cocktail) => (
            <div className="card">
            <img src={cocktail.image} className="card-img-top" alt="cocktail-pic" />
         <div className="card-body">
           <h5 className="card-title">{cocktail.name}</h5>
           <a className="card-text">{cocktail.ingredients} </a>
           <p id="measure">{cocktail.measure}</p>
           <p id="recipe">{cocktail.recipe}</p>
           {/* <p id="glass">{cocktail.glass}</p>
           <p id="video-link">{cocktail.video}</p> */}
          
           
           <a id={cocktail.id}  className="btn btn-primary">Delete</a>
           
         </div>
          </div>

   
))}
    </div>
    </section>
</div>

    </Layout>
  );
};


