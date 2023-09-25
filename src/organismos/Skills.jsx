import { TituloMd } from "../atomos/TituloMd";
import { ContainSkills } from "../moleculas/ContainSkills";

export function Skills(){

    return (<div className="w-9/12 px-8 py-6 mt-32 rounded-lg " id="skills">
        <TituloMd name = "Skills"/>
        <ContainSkills/>
    </div>)
}