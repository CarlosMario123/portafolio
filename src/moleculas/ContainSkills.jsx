import { useEffect, useState } from "react";
import { Skill } from "../atomos/skill";
import { tech } from "../js/tech.js";
import html from "../assets/html.png";
import tai from "../assets/tailwind.svg"
export function ContainSkills(){
    const [datos,setdatos] = useState(tech());

    useEffect(()=>{
        setdatos(tech())
       
    },[])
    return (<div className="flex flex-wrap w-full mt-14 justify-evenly">
        {
            datos.map((e,i)=>{
               return <Skill url={e} key={i}/>
            })
        }
        <Skill url={html}/>
        <Skill url = {tai}/>
    </div>)
}