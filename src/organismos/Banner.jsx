import { Presentacion } from "../moleculas/Presentacion"
import { CuadroImg } from "../moleculas/cuadroImg"
export function Banner(){
   return <div className="flex items-center justify-center w-full h-full px-12 py-5 mt-24">
      <Presentacion/>
      <CuadroImg/>
   </div>
}