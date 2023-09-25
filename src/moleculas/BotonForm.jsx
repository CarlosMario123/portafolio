import { Danger } from "../atomos/Danger"
import { BotonPrimary } from "../atomos/BotonPrimary"
export function BotonForm({evento}){

    return <div className="flex justify-between w-64 mt-5 ">
        <Danger texto={"Cerrar"} evento={evento}/> 
        <BotonPrimary texto={"enviar"}/>
    </div>
}