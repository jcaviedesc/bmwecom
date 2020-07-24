import axios from 'axios'

const init = () => {
  const requestApi = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 30000,
    headers: {
      "Access-Control-Allow-Origin": '*'
    }
  })

  const getProducts = filters => requestApi.get('/products', {params:filters})
  return {
    getProducts
  }
}

export default { init }
