import { Input } from "../atomos/input"
export function Form(){

    return (
        <div className="flex flex-col gap-y-5">
        <Input texto={"ingrese su nombre"}/>
        <Input texto={"Ingrese un numero de telefono"}/>
        <Input texto={"ingrese su correo"}/>
        
        </div>
    )
}