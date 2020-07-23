import axios from 'axios'

const createApi = () => {
  const requestApi = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      Accept: 'application/json'
    }
  })

  const getProducts = filters => requestApi.get('/products', filters)
  return {
    getProducts
  }
}

export default createApi
