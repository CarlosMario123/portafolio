export function Danger({texto,evento}){

    return <button className="p-1 px-3 text-white bg-red-500" onClick={evento}>{texto}</button>
}