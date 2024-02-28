import { useState } from "react";

const RegistrationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("values:", values);
  };

  return (
    <div>
      <h2>1.Formulário Básico</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <p>nome:</p>
          <input
             type="text"
             name="name"
             value={values.name} 
             onChange={handleChange} />
        </div>
        <div>
          <p>email:</p>
          <input 
            type="email"
            name="email" 
            value={values.email} 
            onChange={handleChange} />
        </div>
        <div>
          <p>password:</p>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" >Enviar</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
