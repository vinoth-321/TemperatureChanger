import React from "react";

export default function Display(props){
  
 
 
  return(
    <>


      <div>
          <h2>Temperature</h2>
          <h2>{props.tem} &deg; {props.c}</h2>
      </div>
    
    </>
  );
}