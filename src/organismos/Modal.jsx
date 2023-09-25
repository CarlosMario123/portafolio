
import { BotonForm } from "../moleculas/BotonForm";
import { Form } from "../moleculas/form";
export function Modal({see,evento}){
       
      if(see == false){
        return null;
      }
      
      return (
        <div className = "absolute top-0 z-50 flex flex-col items-center justify-center w-full h-full bg-black opacity-90">
          <Form/>
           <BotonForm evento={evento} />
        </div>
      )
}