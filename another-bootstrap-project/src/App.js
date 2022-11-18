import React, {useState,useEffect} from 'react';
//import './App.css';

function App() {

const name="Mihaela";
const secondName=<h1>hello Gabriela</h1>;

  return (
    <div className="App">
  <h1> hello {name} </h1>
  <h1> hello {name} </h1>
  <h1> hello {name} </h1>
  {secondName}
    </div>
  );
}

export default App;
