import { proyectos } from "../js/proyectos";
import { CardProyecto } from "../moleculas/CardProyect";
export function Cards(){
    return (<div className="flex flex-wrap justify-center gap-4 mt-8 gap-x-7" id="cards">
         {
            proyectos().map((e,i)=>{
                return  <CardProyecto texto={e.tech} dir={e.url} name={e.name} key={i}/>
            })
         }
    </div>)

}