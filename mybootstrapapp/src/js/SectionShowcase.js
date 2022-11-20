import React from 'react';




function SectionShowcase(){


  


  //----------------------------------------------------------------------------

return(

<section className="bg-dark text-light p-5 p-lg-0  text-center text-md-start">

<div className="container">

<div className="d-md-flex align-items-center justify-content-between">

<div>
<h1 style={{paddingTop:"115px"}}>Become a <span className="text-warning">web developer</span></h1>

<p className="lead pt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
<p className="lead pb-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>

 <button className="btn btn-primary btn-lg mb-3" data-bs-toggle="modal" data-bs-target="#enrollment">Enrollment form</button>
</div>


<img src="./images/reactOne.svg" alt="learning-react" className="img-fluid w-50 d-none d-md-block" style={{paddingTop:"115px"}}/>

</div>

</div>

</section>

);

}

export default SectionShowcase;
