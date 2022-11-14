const React = require('react');
const Layout = require('./Layout');

module.exports = function Search({newUser, newUserId, newUserEmail }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="/styles/search.css" />
      <script defer src="/js/search.js" />
      <script defer src="/js/saved.js" />
<div className="searchBackground">
  <section className="search-sec">
    <div className="container">
        <form  novalidate="novalidate" className="searchForm">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt enter-search" placeholder="Enter Search" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select className="form-control search-slt search-by">

                                <option>
                                  <p>Search cocktails by name</p>
                                </option>
                                
                                <option>
                                  <p>Search cocktails by first letter</p>
                                </option>
                                <option>
                                  <p>Search  ingredients</p>
                                </option>

                            </select>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="submit" className="btn btn-dark wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
       
    </div>
   
    
    
  </section>
  <div id="spinner"></div>
    <div class="cardsAll">
    </div>

</div>



    </Layout>
  );
};


"Strawberry schnapps"