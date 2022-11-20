import React , {useState} from 'react';




function Footer(){

const [users , setUsers]=useState([]);

const [myForm , setMyForm]=useState({
  name:"",
  surname:"",
  email:"",
  phone:""
});

//--------------

const handleChangeForm=(event) =>{
 event.preventDefault();

//destructurare obiect
// setMyForm({...myForm, [event.target.name]: event.target.value});

const newCopyMyForm={...myForm, [event.target.name]: event.target.value};
setMyForm(newCopyMyForm);

}

//--------------------

const handleSubmit=(event) =>{
 event.preventDefault();

console.log("myForm is : " , myForm);

//destructurare array
const newCopyUsers=[...users , myForm ];

setUsers(newCopyUsers);

}

//-------------------------

// console.log("users arr is : " , users);

// console.log("users.length is : " , users.length);

  //----------------------------------------------------------------------------

return(<>


<footer className="p-5 bg-dark text-white text-center position-relative">

<div className="container">

<p className="lead">Copyright &copy; 2022 Frontend Portfolio App</p>

<a href="#" className="position-absolute bottom-0 end-0 p-5"><i className="bi bi-arrow-up-circle h1"></i></a>

</div>

</footer>


<div className="modal fade" id="enrollment" tabIndex="-1" aria-labelledby="enrollmentLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="enrollmentLabel">React portfolio app with bootstrap</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">




 <p className="lead">Fill out this form and show your data</p>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label htmlFor="name" className="col-form-label">First Name:
<input type="text" className="form-control" id="name" name="name" required="required" placeholder="Enter a name..."  onChange={handleChangeForm}/>
</label>

</div>



<div className="mb-3">

<label htmlFor="surname" className="col-form-label">Last Name:
<input type="text" className="form-control" id="surname" name="surname" required="required"  placeholder="Enter a surname..."   onChange={handleChangeForm}/>
</label>

</div>



<div className="mb-3">

<label htmlFor="email" className="col-form-label">Email:
<input type="email" className="form-control" id="email" name="email" required="required"  placeholder="Enter an email..."   onChange={handleChangeForm}/>
</label>

</div>



<div className="mb-3">

<label htmlFor="phone" className="col-form-label">Phone:
<input type="tel" className="form-control" id="phone" name="phone" required="required"  placeholder="Enter a tel..."   onChange={handleChangeForm}/>
</label>

</div>



<div className="modal-footer">
  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>




</form>



{users.map((user,index) =>{
//map are intotdeauna return
  return(

<>
<ul key={index}  className="list-group list-group-flush lead border">

<li className="list-group-item border">Name is : {user.name}</li>
<li className="list-group-item border">Surname is : {user.surname}</li>
<li className="list-group-item border">Email is : {user.email}</li>
<li className="list-group-item border">Phone is : {user.phone}</li>

</ul>
</>

  );
})}


      </div>

    </div>
  </div>
</div>





</>);

}

export default Footer;
