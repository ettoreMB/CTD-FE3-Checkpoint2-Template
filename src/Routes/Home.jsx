import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import { api } from "../lib/api";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";

const Home = () => {
  const [dentistas, setDentistas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const context = useContext(AuthContext)
  
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
    } catch {

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
      {!isLoading &&
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
