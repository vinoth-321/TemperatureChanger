// Import the components
import { use, useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/Header';
import Converter from './components/Converter';
import Input from './components/Input';
function App() {

    const [tem,SetTem]=useState(25);
     return(
        <>
           <Header head="Temperature Converter"/>
           <div className='container'>
                <div className='converter'>
                 <Converter tem={tem} SetTem={SetTem}/>
                 
                </div >
                   
                  <div>
                     <Input  tem={tem} SetTem={SetTem} />
                  </div>
               
            
               
           </div>
        </>
     );
}

export default App
