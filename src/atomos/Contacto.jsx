export function Contacto({texto,evento}){

    return <a className="p-2 px-4 text-white border-2 border-white cursor-pointer" onClick={evento}>{texto}</a>
}