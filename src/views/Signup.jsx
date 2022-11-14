const React = require('react');
const Layout = require('./Layout');

module.exports = function Signup() {
  return (
    <Layout>
       <link rel="stylesheet" href="/styles/signup.css" />
     <div id="mainContainer">
  <div className="">
  <div className="row align-items-center">
    <div className="col-lg-6 col-md-6 col-xs-12 d-none d-lg-block d-md-block">
      <div id="mainBgn"></div>
    </div>
    <div className="col-lg-6 col-md-6 col-xs-12">
      <div className="p-4 centerOnMobile" >
        <div className="formContainer">
          <h2 className="p-2 h4 text-center"><i class="fas fa-lock me-2"></i> Sign up</h2>
        <form action="/signup" method="POST">
          <div className="form-floating my-3">
              <input name="login" type="text" class="form-control" id="floatingInput" placeholder="login" />
              <label for="floatingInput">Login</label>
            </div>
            <div className="form-floating my-3">
              <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="mt-3">
              <input type="checkbox" /> Remember me
            </div>
            <div id="btnHolder">
              <button type='submit' class="btn btn-lg btn-primary mt-3 w-100">Done</button>
            </div>
        </form>
        </div>
        <div class="mt-2 text-center">
          <a className="sing-up" href="#">New? signup</a><br />
          <a className="sing-up" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    </Layout>
  );
};
