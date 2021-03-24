import axios from 'axios'

export const GET_ALL_USERS = () => {
  return {
    type: 'GET_ALL_USERS',
    payload: new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        resolve(response.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}