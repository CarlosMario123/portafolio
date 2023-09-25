import { Banner } from "./organismos/Banner"
import { Headers } from "./organismos/Header"
import { ListProyectos } from "./organismos/ListProyects"
import { Modal } from "./organismos/Modal"
import { Skills } from "./organismos/Skills"
import { useState } from "react"

function App() {
  const [vista,setvista] = useState(false);

  const dontSee = ()=>{
     setvista(false);
     
  }
  const see = ()=>{
    setvista(true);
    window.location.href = "#head"
    console.log("dd")
  }

  return (<div className="flex flex-col items-center">
      <Headers evento={see}/>
      <Banner/>

      
         {
          !vista ?  <><Skills/>
          <ListProyectos/> </> : (<div></div>)
         }
         
        
          <div></div> 
      
      
    
       <Modal see={vista} evento={dontSee}/>
    </div>)
  
}

export default App
