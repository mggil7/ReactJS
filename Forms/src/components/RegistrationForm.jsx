import { useState, useEffect } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState('');
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    login:"",
  });

  const loginGit = values.login;

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

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.github.com/users/${loginGit}`)
        .then((res) => res.json())
        .then((res) => setData([res]))
        .catch((e) => console.error(e));
    };

    const timer = setTimeout(() => {
      fetchData();
      console.log('data:', data);
      console.log('loginGit:',loginGit);
      console.log("dados inseridos com sucesso")
    }, 60000);

    return () => clearTimeout(timer);
  }, [data, loginGit]);


  return (
    <div>
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

        <div>
          <p>github login:</p>
          <input
            type="login"
            name="login"
            value={values.login}
            onChange={handleChange}
          />
        </div>
        <button type="submit" >Enviar</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
