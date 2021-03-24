import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_USERS } from './action'

const User = () => {
  
  const dispatch = useDispatch()
  const dataUser = useSelector((state) => state.users)
  
  useEffect(() => {
    dispatch(GET_ALL_USERS())
  }, [])

  return (
    <div className="container mt-5 text-center">
      <h1>USER</h1>
      {JSON.stringify(dataUser)}
    </div>
  )
}

export default User