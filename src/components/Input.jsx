import React from "react";
import Dicrease from "./Dicrease";
import Increase from "./Increase";
export default function Input(props){
      return(
     <>
       <Dicrease tem={props.tem} SetTem={props.SetTem}/>
       <Increase tem={props.tem} SetTem={props.SetTem}/>
     </>
       
      );
}