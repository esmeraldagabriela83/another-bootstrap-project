import React from 'react';




function Student(props){

  const {propImg , propName , propDetails}=props;

  //----------------------------------------------------------------------------

return(

<div className="card-body text-center">

<img src={propImg} className="rounded-circle mb-3" alt="userApiImg"  />

<h3 className="card-title mb-3">{propName}</h3>

<p className="card-text">{propDetails}</p>

<a href="#"><i className="bi bi-twitter text-black-50 mx-1"></i></a>
<a href="#"><i className="bi bi-facebook text-black-50 mx-1"></i></a>
<a href="#"><i className="bi bi-linkedin text-black-50 mx-1"></i></a>
<a href="#"><i className="bi bi-instagram text-black-50 mx-1"></i></a>

</div>

);

}

export default Student;
