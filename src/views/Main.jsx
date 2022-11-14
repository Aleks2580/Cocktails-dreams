const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({newUser, newUserId, newUserEmail }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="/styles/mainBackground.css" />
      
  <div id="mainBackground"></div>
    
     
    </Layout>
  );
};
