import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/ContextGlobalProvider";
import "./Card.css";

const Card = ({ name, username, id }) => {
  const { contextValue } = useContext(ContextGlobal);

  const addFav = (id) => {
    const existingData = localStorage.getItem("apiData");
    let newData = [];

    if (existingData) {
      try {
        newData = JSON.parse(existingData);
        if (!Array.isArray(newData)) {
          throw new Error("Los datos existentes no son un array válido.");
        }
      } catch (error) {
        console.error("Error al parsear los datos existentes del localStorage:", error);
        return;
      }
    }

    const exists = newData.some((item) => item.id === contextValue.data[id - 1].id);
    if (exists) {
      return;
    }

    newData.push(contextValue.data[id - 1]);

    localStorage.setItem("apiData", JSON.stringify(newData));
  };

  return (
    <div className="Card">
      <img
        className="CardBody"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
      />
      <div className="CardContent">
        <Link to={`/dentist/${id - 1}`} className="CardTitle">
          <h5>{name}</h5>
        </Link>
        <p>Nombre: {name}</p>
        <p>Nombre de usuario: {username}</p>
        <button onClick={() => addFav(id)}>Agregar dentista a favoritos</button>
      </div>
    </div>
  );
};

export default Card;