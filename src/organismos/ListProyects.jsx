import { TituloMd } from "../atomos/TituloMd";
import { Cards } from "./Cards";

export function ListProyectos(){

    return <div className="w-9/12 px-8 py-6 mt-16 ">
        <TituloMd name = "Lista de proyectos realizados"/>
        <Cards/>
    </div>
}