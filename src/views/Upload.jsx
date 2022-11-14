const React = require('react');
const Layout = require('./Layout');

module.exports = function Upload({newUser, newUserId, newUserEmail}) {
  return (
    <Layout newUser = {newUser}>
     <link rel="stylesheet" href="/styles/upload.css" />
      <script defer src="/js/upload.js" />
     <div className='uploadBackground'>
     <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Upload your recipe</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation" method='POST' action='/myrecipe' >

                            <div class="col-md-12">
                               <input class="form-control" type="text" name="name" placeholder="Name" required />
                               <div class="valid-feedback">Name</div>
                               <div class="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div class="col-md-12">
                                <input class="form-control" type="text" name="ingredients" placeholder="Ingredients" required />
                                 <div class="valid-feedback">Ingredients field is valid!</div>
                                 <div class="invalid-feedback">Ingredients field cannot be blank!</div>
                            </div>


                            <div class="col-md-12">
                               <input class="form-control" type="text" name="measure" placeholder="Measurments" required />
                               <div class="valid-feedback">Measurments field is valid!</div>
                               <div class="invalid-feedback">Measurments field cannot be blank!</div>
                            </div>
                            <div class="col-md-12">
                               <input class="form-control" type="text" name="recipe" placeholder="Recipe" required />
                               <div class="valid-feedback">Recipe field is valid! </div>
                               <div class="invalid-feedback">Recipe field cannot be blank!</div>
                            </div>
                            <div class="col-md-12">
                               <input class="form-control" type="text" name="glass" placeholder="Glass" required />
                               <div class="valid-feedback">Glass field is valid! </div>
                               <div class="invalid-feedback">Glass field cannot be blank!</div>
                            </div>
                           
                            <div class="col-md-12">
                               <input class="form-control" type="text" name="video" placeholder="Video link" required />
                               <div class="valid-feedback">Video field is valid! </div>
                               <div class="invalid-feedback">Video field cannot be blank!</div>
                            </div>
                            <div class="col-md-12">
                               <input class="form-control" type="text" name="image" placeholder="Image link" required />
                               <div class="valid-feedback">Image field is valid! </div>
                               <div class="invalid-feedback">Image field cannot be blank!</div>
                            </div>

                            {/* <div class="col-md-12 image-input">
                               <input class="form-control" type="file"   name="image" placeholder="Image"  />
                               <div class="valid-feedback">Video field is valid! </div>
                               <div class="invalid-feedback">Video field cannot be blank!</div>
                            </div> */}



                            <div class="form-button mt-3">
                              <button id="submit" type="submit" class="btn btn-primary">Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
     
    </Layout>
  );
};
