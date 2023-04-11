import { createContext, useEffect, useState } from 'react';
import { api } from '../lib/api';

export const AuthContext = createContext({});
const AuthProvider = ({children}) => {
  const [username , setUsername] = useState("");
  const [done, setDone] = useState(false);
    useEffect(() =>{
        setUsername(localStorage.getItem("@dhOdonto_user_name"))
    },[username])

    const saveData = (user_name,token) =>{
        localStorage.setItem("@dhOdonto_user_name", user_name );
        localStorage.setItem("@dhOdonto_token",token);
    }

    const removeData = () =>{
        localStorage.removeItem("@dhOdonto_user_name")
        localStorage.removeItem("@dhOdonto_token");
    }
    async function auth(username, password) {
      try {
        const {data} = await api.post('/auth', {
          username,
          password
        })
        setDone(true)
  
        saveData(username, data.token)
      } catch (error) {
        setDone(false)
      }
      
    }

 
    return(
        <AuthContext.Provider value={{ username, saveData, removeData, auth, done}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider