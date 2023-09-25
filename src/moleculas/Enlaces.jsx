import { Enlace } from "../atomos/Enlace"
export function Enlaces({informacion}){

    return (
        <nav className="flex w-1/2 justify-evenly">
             {
                informacion.map((e,i)=>{
                        return <Enlace name={e.texto} key={i} dir={e.dir}/>
                })
             }
        </nav>
    )
}