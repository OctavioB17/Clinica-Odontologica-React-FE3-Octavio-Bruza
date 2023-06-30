import React from "react";
import {Link} from "react-router-dom"


const Card = ({ name, username, id }) => {

    const removeFav = (id) => {
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
            return;
          }
        }
      
        const updatedDataArray = dataArray.filter((user) => user.id !== id);
      
        localStorage.setItem("apiData", JSON.stringify(updatedDataArray));
      };

  return (
        <div className={`Card`}>
        <img
          className="CardBody"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`Card`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={{
            pathname: `/dentist/${id - 1}`,
           }
          }>
            <h5 className={`card-title`}>{name}</h5>
          </Link>
          <p>Nombre: {name}</p>
          <p>Nombre de usuario: {username}</p>
          <button onClick={() => removeFav(id)}>Eliminar dentista de favoritos</button>
        </div>
      </div>
  );
};

export default Card;
