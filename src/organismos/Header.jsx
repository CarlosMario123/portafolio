import { LogoGit } from "../atomos/LogoGit";
import { TituloMd } from "../atomos/TituloMd";
import { Navegacion } from "../moleculas/Navegacion";

export function Headers({evento}){
    

    return (
        <header className="fixed z-30 flex items-center justify-between w-full p-5 px-12" id  = {"head"}>
          <LogoGit/>
             <Navegacion evento={evento}/>
        </header>
    )
}