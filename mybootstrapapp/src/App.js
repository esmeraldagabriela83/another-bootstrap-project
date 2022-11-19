import React, {useState,useEffect} from 'react';

import Navbar from "./js/Navbar.js";
import SectionShowcase from "./js/SectionShowcase.js";
import Newsletter from "./js/Newsletter.js";
import Boxes from "./js/Boxes.js";
import LearnSection from "./js/LearnSection.js";
import LearnSectionSecond from "./js/LearnSectionSecond.js";
import QuestionAccordion from "./js/QuestionAccordion.js";
import Instructors from "./js/Instructors.js";
import ContactAndMap from "./js/ContactAndMap.js";
//import './App.css';

//pedro course
//https://www.youtube.com/watch?v=f55qeKGgB_M&t=616s

//this project after
//https://www.youtube.com/watch?v=4sosXZsdy-s&list=RDLVeow125xV5-c&index=3
//Bootstrap 5 Crash Course | Website Build & Deploy

function App() {
  return (<>
    <div className="App">

<Navbar />
<SectionShowcase />
<Newsletter />
<Boxes />
<LearnSection />
<LearnSectionSecond />
<QuestionAccordion />
<Instructors />
<ContactAndMap />

    </div>
  </>);
}

export default App;
