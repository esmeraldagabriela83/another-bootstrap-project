import React from 'react';

function Newsletter(){

return(

<section className="bg-primary text-light p-5">

<div className="container">

<div className="d-md-flex justify-content-between align-items-center">

<h3 className="mb-3 mb-md-0">Sign up for our newsletter</h3>

<div className="input-group mb-md-3 mt-md-3 my-news-input">
  <input type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-dark btn-lg" type="button" id="button-addon2">Button</button>
</div>


</div>

</div>

</section>

);

}

export default Newsletter;
