import React, { useState } from "react";
import styles from "./Form.module.css"

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    login: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.login.length > 5 && formData.email.includes("@")) {
      setError("");
      setSuccess(true);
    } else {
      setError("Por favor, ingrese un email válido y un nombre de usuario con más de 5 caracteres.");
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
<>

      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Nombre de usuario"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">Gracias {formData.login}, te contactaremos cuando antes vía mail.</p>}
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
