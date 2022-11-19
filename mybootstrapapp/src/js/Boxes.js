import React from 'react';

function Boxes(){

return(

<section className="p-5">

<div className="container">

<div className="row text-center justify-content-center align-items-center g-4">




<div className="col-md">

<div className="card bg-dark text-light">

<div className="card-body text-center">

<div className="h1 mb-3"><i className="bi bi-laptop"></i></div>

<h3 className="card-title mb-3">Virtual</h3>

<p className="card-text">
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
making it over 2000 years old. Richard McClintock.
</p>

<a href="#" className="btn btn-primary">Read more</a>

</div>

</div>

</div>





<div className="col-md">

<div className="card bg-secondary text-light">

<div className="card-body text-center">

<div className="h1 mb-3"><i className="bi bi-person-square"></i></div>

<h3 className="card-title mb-3">Hybrid</h3>

<p className="card-text">
All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.
</p>

<a href="#" className="btn btn-dark">Read more</a>

</div>

</div>

</div>




<div className="col-md">

<div className="card bg-dark text-light">

<div className="card-body text-center">

<div className="h1 mb-3"><i className="bi bi-people"></i></div>

<h3 className="card-title mb-3">In person</h3>

<p className="card-text">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
</p>

<a href="#" className="btn btn-primary">Read more</a>

</div>

</div>

</div>



</div>

</div>

</section>

);

}

export default Boxes;
