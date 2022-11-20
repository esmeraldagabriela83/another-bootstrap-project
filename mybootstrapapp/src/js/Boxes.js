import React from 'react';
import Box from "./Box.js";

//-----------------------------

const title1="Virtual";

const text1="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.";

//--------------------------------

const title2="Hybrid";

const text2="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.";

//--------------------------------

const title3="In person";

const text3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.";

//--------------------------------


function Boxes(){

return(

<section className="p-5">

<div className="container">

<div className="row text-center justify-content-center align-items-center g-4">







<div className="col-md">

<div className="card bg-dark text-light">

<div className="card-body text-center">

<div className="h1 mb-3"><i className="bi bi-laptop"></i></div>


<Box propTitle={title1} propText={text1}/>


<a href="#" className="btn btn-primary">Read more</a>

</div>

</div>

</div>









<div className="col-md">

<div className="card bg-secondary text-light">

<div className="card-body text-center">

<div className="h1 mb-3"><i className="bi bi-person-square"></i></div>

<Box propTitle={title2} propText={text2}/>

<a href="#" className="btn btn-dark">Read more</a>

</div>

</div>

</div>




<div className="col-md">

<div className="card bg-dark text-light">

<div className="card-body text-center">

<div className="h1 mb-3"><i className="bi bi-people"></i></div>

<Box propTitle={title3} propText={text3}/>

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
