
import { TextBg } from "../atomos/textbg";
import { EnlacesExt } from "../atomos/EnlacesExt";

export function CardProyecto({texto,dir,name}){

     return <div className="flex flex-col items-center justify-center py-4 bg-black border border-white rounded-md w-72 gap-y-2">
    <EnlacesExt dir={dir} name={name}/>
       <TextBg texto={texto}/>
    
     </div>  
}