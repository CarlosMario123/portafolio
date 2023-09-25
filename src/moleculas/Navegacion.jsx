import { Enlaces } from "./Enlaces";
import { Contacto } from "../atomos/Contacto";
import { useState } from "react";
export function Navegacion({evento}){
    const [texto,setTexto] = useState(
        [{texto:"Inicio",dir:"#"},
       {texto:"Skills",dir:"#skills"},{texto:"Proyectos",dir:"#cards"}])
        ;
    
    return <div className="flex items-center justify-end w-1/2 gap-x-3">
             <Enlaces informacion={texto}/>
             <Contacto texto={"Contactar"} evento={evento}/>
    </div>
}