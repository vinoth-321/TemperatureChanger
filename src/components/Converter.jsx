import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

export default function Converter(props){
   const [c,SetC]=useState("C");
   
   return(
    <>
         <Display  tem={props.tem} c={c}  />
         <Button tem={props.tem} c={c}  SetC={SetC} SetTem={props.SetTem}/>
    
    </>
   );

}