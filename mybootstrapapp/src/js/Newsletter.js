import React , {useState} from 'react';

function Newsletter(){

  const [userEmail , setUserEmail] = useState("");



  //--------------------------take value from the input-------------------

  const handleTakeUserVal=(event) =>{
    setUserEmail(event.target.value);
  }

  //--------------show user`s value--------------------------

const handleBtnShowUserValue=(event)=>{

event.preventDefault();

console.log(" user`s val from input is :" , userEmail);

//----------------------

const displayEmail=document.getElementById('displayEmail');
displayEmail.innerText=userEmail;

}

//-----------------------------------

return(

<section className="bg-primary text-light p-5">

<div className="container">

<div className="d-md-flex justify-content-between align-items-center">

<h3 className="mb-3 mb-md-0">Sign up for more information</h3>

<div className="input-group mb-md-3 mt-md-3 my-news-input">
  <input type="email" id="newsLetterInput" type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTakeUserVal}/>
  <button className="btn btn-dark btn-lg" type="button" id="button-addon2" onClick={handleBtnShowUserValue}>Show email</button>
</div>

</div>
  <p id="displayEmail"></p>
</div>

</section>

);

}

export default Newsletter;


////////////--------------------------------------------------------------------
