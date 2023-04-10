import { useContext, useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const LoginForm = () => {
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await context.auth(username, password)
      navigate('/home')
    } catch (error) {
      alert(error.response.data.message)
      //Lembre-se de usar um alerta para dizer se  ou ocorreu um erro
    }
    

  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              value={username}
              onChange={handleUsername}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePassword}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
