import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import { api } from "../lib/api";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";


const Home = () => {
  const [dentistas, setDentistas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const context = useContext(AuthContext)
  const navigate = useNavigate()
  async function getData() {
    try {
      setIsLoading(true)
      const { data } = await api('/dentista', {
        headers: {
          Authorization: {
            Authorization: localStorage.getItem('@dhOdonto_token')
          }
        }
      })
      setDentistas(data)
    } catch (error){
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {

    getData()
  }, [context.done]);

  return (
    <>
      <Spinner loading={isLoading} />
      {error && (
        <>
        <h1>Erro ao carreagar a pagina</h1>
        <button className={`btn btn-light`}onClick={navigate(0)}>Recarregar pagina</button>
      </>
      )}
      {(!isLoading && !error) &&
        (
          <>
            <h1>Home</h1>
            <div className="card-grid container">
              {dentistas.map(dentista => (
                <Card dentista={dentista} key={dentista.matricula} />
              ))}
            </div>
          </>
        )
      }
    </>
  );
};

export default Home;
