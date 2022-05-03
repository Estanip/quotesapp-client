import axios from 'axios'

export const api = (method: string, endpoint: string) =>
  new Promise((resolve, reject) => {
    axios({
      method,
      url: `http://localhost:3008/api/${endpoint}`
    })
      .then(({ data }) => {
        resolve(data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })

