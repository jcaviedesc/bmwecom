import axios from 'axios'

const init = () => {
  const requestApi = axios.create({
    baseURL: 'https://my-json-server.typicode.com/jcaviedesc/bmwecom',
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
