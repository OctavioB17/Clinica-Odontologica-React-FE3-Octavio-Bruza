import React from "react";
import CardFav from "../Components/CardFav";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const showData = () => {
    const existingData = localStorage.getItem("apiData");
    let dataArray = [];

    if (existingData) {
      try {
        dataArray = JSON.parse(existingData);
        if (!Array.isArray(dataArray)) {
          throw new Error("Los datos existentes no son un array válido.");
        }
      } catch (error) {
        console.error("Error al parsear los datos existentes del localStorage:", error);
        return [];
      }
    }

    return dataArray;
  };

  const parsedData = showData();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {parsedData.map((user) => (
          <CardFav key={user.id} id={user.id} name={user.name} username={user.username} />
        ))}
      </div>
    </>
  );
};

export default Favs;