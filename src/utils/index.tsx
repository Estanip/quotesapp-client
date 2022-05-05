import axios from 'axios'

const API_DEV = 'http://localhost:3008/api'
const API_PROD = 'https://pluggy-api-challenge.herokuapp.com/api'

export const api = (method: string, endpoint: string) =>
  new Promise((resolve, reject) => {
    axios({
      method,
      url: `${API_PROD}/${endpoint}`
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })

