import React, {useState,useEffect} from 'react';
//import './App.css';

//pedro course
//https://www.youtube.com/watch?v=f55qeKGgB_M&t=616s

function App() {

const name="Mihaela";
const secondName=<h1>hello Gabriela</h1>;
const myObj={
  catName:"micu",
  catAge:5,
  friends:"firutu"
};


  return (
    <div className="App">
  <h1> hello {name} </h1>
  <h1> hello {name} </h1>
  <h1> hello {name} </h1>
  {secondName}
  <h3>my cat is named : {myObj.catName} , it has {myObj.catAge} and one friend called {myObj.friends}</h3>
    </div>
  );
}

export default App;
