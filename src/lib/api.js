import axios from "axios";

export const api =  axios.create({
  baseURL: 'https://dhodonto.ctdprojetos.com.br'
})