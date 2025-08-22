import React from "react";

export default function Button(props){



const HandleCel=()=>{

     if(props.c==="F"){
          const newTemp = ((props.tem - 32) * 5) / 9;
          props.SetTem(newTemp);
          props.SetC("C");
     }

}

const Handlefah=()=>{

     if(props.c==="C"){
          const newTemp = ((props.tem *9) / 5) +32;
          props.SetTem(newTemp);
          props.SetC("F");
     }

}


return(
    
    <>
       <button onClick={HandleCel} >C</button>
       <button onClick={Handlefah}>F</button>
    </>
);

}