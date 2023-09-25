import React, { useEffect, useState } from "react";

export function TitleMotion({ textos }) {
  const [indiceTexto, setIndiceTexto] = useState(0);
  const [indiceLetra, setIndiceLetra] = useState(0);
  const [textoActual, setTextoActual] = useState("");
  const [direccion, setDireccion] = useState("adelante"); // Adelante o atrás

  useEffect(() => {
    const palabraActual = textos[indiceTexto];

    const intervalo = setInterval(() => {
      if (direccion === "adelante") {
        // Escritura hacia adelante
        if (indiceLetra < palabraActual.length) {
          setTextoActual((prevTexto) => prevTexto + palabraActual[indiceLetra]);
          setIndiceLetra((prevIndice) => prevIndice + 1);
        } else {
          // Cambiar dirección a atrás una vez que se completa la escritura hacia adelante
          setDireccion("atras");
        }
      } else {
        // Escritura hacia atrás
        if (indiceLetra > 0) {
          setTextoActual((prevTexto) =>
            prevTexto.slice(0, prevTexto.length - 1)
          );
          setIndiceLetra((prevIndice) => prevIndice - 1);
        } else {
          // Cambiar a la siguiente palabra una vez que se completa la escritura hacia atrás
          setDireccion("adelante");
          setIndiceTexto((prevIndice) => (prevIndice + 1) % textos.length);
        }
      }
    }, 200); // Velocidad de escritura (puedes ajustarla según tus preferencias)

    return () => {
      clearInterval(intervalo);
    };
  }, [indiceTexto, indiceLetra, direccion, textos]);

  return (
    <h2 className="text-5xl font-black text-white">
      {textoActual}
    </h2>
  );
}
