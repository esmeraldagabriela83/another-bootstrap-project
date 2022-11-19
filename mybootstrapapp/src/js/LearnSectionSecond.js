import React from 'react';

function LearnSectionSecond(){

return(

<section className="p-5 bg-dark text-light">

<div className="container">
     <div className="row align-items-center justify-content-between">
       <div className="col-md p-5">
         <h2>Learn React</h2>
         <p className="lead">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Similique deleniti possimus magnam corporis ratione facere!
         </p>
         <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
           reiciendis eius autem eveniet mollitia, at asperiores suscipit
           quae similique laboriosam iste minus placeat odit velit quos,
           nulla architecto amet voluptates?
         </p>
         <a href="#" className="btn btn-light mt-3">
           <i className="bi bi-chevron-right"></i> Read More
         </a>
       </div>
       <div className="col-md">
         <img src="./images/learnSectionSecondImg.jpg" className="img-fluid" alt="react-img-section"  style={{borderRadius:"0.5em"}}/>
       </div>
     </div>
   </div>

</section>

);

}

export default LearnSectionSecond;


//https://www.pexels.com/ro-ro/fotografie/html-ecran-scenariu-script-2061168/
