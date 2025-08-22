import React from "react";

export default function Dicrease(props){

     return(

     <>
         <button onClick={()=> props.SetTem(props.tem-1)}>👇</button>
     </>

     );


}