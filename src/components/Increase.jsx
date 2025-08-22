import React from "react";

export default function Increase(props){

     return(

     <>
         <button onClick={()=> props.SetTem(props.tem+1)}>☝️</button>
     </>

     );


}