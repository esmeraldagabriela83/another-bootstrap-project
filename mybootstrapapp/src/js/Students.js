import React from 'react';
import Student from "./Student.js";

//--------------------------students variables---------------------------------------------------

const student1Img="https://randomuser.me/api/portraits/men/15.jpg";

const studentOneName="Popescu Ionel";

const studentOneDetails="It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.";

//-----------------

const student2Img="https://randomuser.me/api/portraits/women/19.jpg";

const studentTwoName="Aco Mirela";

const studentTwoDetails="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";


//-----------------

const student3Img="https://randomuser.me/api/portraits/men/19.jpg";

const studentThreeName="Ionescu George";

const studentThreeDetails="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";


//-----------------

const student4Img="https://randomuser.me/api/portraits/women/25.jpg";

const studentFourName="Tanase Alexandra";

const studentFourDetails="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.";

//------------------------------------------------------------------------------



//------------------------------------------------------------------------------


function Students(){

return(


<section id="students" className="p-5 bg-primary">

<div className="container">

<h2 className="text-center text-white">Students</h2>

<p className="lead text-center text-white" style={{fontWeight:"bold"}}>
Our students do not have any experience in  working as a web developer in the industry, <span className="text-warning">but they are eager to learn.</span>
</p>


<div className="row g-4  text-center justify-content-center align-items-center">








<div className="col-md-6 col-lg-3">

<div className="card bg-light">

<Student  propImg={student1Img} propName={studentOneName} propDetails={studentOneDetails}/>

</div>

</div>






<div className="col-md-6 col-lg-3">

<div className="card bg-light">

<Student  propImg={student2Img} propName={studentTwoName} propDetails={studentTwoDetails}/>



</div>

</div>






<div className="col-md-6 col-lg-3">

<div className="card bg-light">

<Student  propImg={student3Img} propName={studentThreeName} propDetails={studentThreeDetails}/>

</div>

</div>








<div className="col-md-6 col-lg-3">

<div className="card bg-light">

<Student  propImg={student4Img} propName={studentFourName} propDetails={studentFourDetails}/>

</div>

</div>







</div>

</div>

</section>


);

}

export default Students;
