import axios from 'axios'

export const GET_DATA_CORONA = () => {
  return {
    type: 'GET_ALL_DATA',
    payload: new Promise((resolve, reject) => {
      axios.get(`${process.env.REACT_APP_API}/summary`).then((response) => {
        resolve(response.data.Global)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}