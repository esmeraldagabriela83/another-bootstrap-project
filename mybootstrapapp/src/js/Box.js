import React from 'react';




function Box(props){

  const {propTitle , propText}=props;

  //----------------------------------------------------------------------------

return(


<>

<h3 className="card-title mb-3">{propTitle}</h3>

<p className="card-text">{propText}</p>

</>



);

}

export default Box;
