import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth-context"

function useConfirmAuth() {
  const context =  useContext(AuthContext)
  const navigate =  useNavigate()
  return  useEffect(()=> {
    if(!context.done) {
      navigate('/login')
    }
   },[context.done, ])
     
}

export default useConfirmAuth