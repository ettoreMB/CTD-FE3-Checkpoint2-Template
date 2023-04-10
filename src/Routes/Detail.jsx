import { useCallback, useEffect, useState } from "react";
import DetailCard from "../Components/DetailCard/DetailCard";
import { useParams } from "react-router-dom";
import { api } from "../lib/api";
import Spinner from "../Components/Spinner/Spinner";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true)
  const {matricula} = useParams()
  
  const [denstista, setDentista] = useState(null)
  
  const getData = useCallback(async () => {
    try {
      const {data} = await api.get(`/dentista?matricula=${matricula}`, {
        headers: {
          Authorization: localStorage.getItem('@dhOdonto_token')  
        }
      })
  
      setDentista(data)
    } catch (error) {
      
    } finally {
      setIsLoading(false)
    }
  },[matricula]) 

  useEffect(() => {
    if(matricula) {
      getData()
    }
    return () => {}
  }, [getData, matricula]);
  return (
    <>
      <Spinner loading={isLoading} />
      {!isLoading && ( <DetailCard dentista={denstista}/>)}
    </>
  )
}

export default Detail