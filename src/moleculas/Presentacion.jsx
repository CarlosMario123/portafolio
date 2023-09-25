import { Bienvenida } from "../atomos/Bienvenida";
import { TituloXL } from "../atomos/TituloXL";
import { TitleMotion } from "../atomos/TittleMotion";
import { Descrip } from "../atomos/descripcion";
import { useState } from "react";
export function Presentacion(){
     const [textos,setTextos] = useState(["Programador web","20 años","Frontend Dev"])
    return <div className="flex flex-col w-1/2 gap-y-5">
    <Bienvenida name = "Bienvendido visitante"/>
   <TituloXL name = "Hola soy Carlos Mario"/>
   <TitleMotion textos={textos}/>
   <Descrip/>
    </div>
}