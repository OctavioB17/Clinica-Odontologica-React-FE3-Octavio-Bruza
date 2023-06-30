import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/ContextGlobalProvider"



const CardFull = () => {

    const { id } = useParams();

    const { contextValue } = useContext(ContextGlobal);

    const dentist = contextValue.data[id]


  return (
        <div className="WrapperCardFull">
          <div className={`CardFull`}>
            <img
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
            <div className={`Card`}>
                <p>Nombre: {dentist.name} </p>
                <p>Nombre de usuario: {dentist.username} </p>
                <p>Ciudad: {dentist.address.city}</p>
                <p>Calle: {dentist.address.street}</p>
                <p>Suite: {dentist.address.suite}</p>
                <p>Codigo ZIP: {dentist.address.zipcode}</p>
                <p>Telefono: {dentist.phone}</p>
                <p>Email: {dentist.email}</p>
                <p>Website: {dentist.website}</p>
            </div>
          </div>
        </div>
  );
};

export default CardFull;
