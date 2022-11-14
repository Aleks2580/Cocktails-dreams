const React = require('react');
const Layout = require('./Layout');

module.exports = function Popular( { newUser, newUserId, newUserEmail }) {
  return (
    <Layout newUser={newUser}>
        <link rel="stylesheet" href="/styles/popular.css" />
        <script defer src="/js/popular.js" />
        
      <section id="team" class="pb-5">
    <div class="container">
        <h5 class="section-title h1">The World's Best-Selling Classic Cocktails 2022</h5>
        <div id="spinner"></div>
        <div class="row">
          
            
         

        </div>
    </div>
</section>

    </Layout>
  );
};
