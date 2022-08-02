import {useState} from "react";

export const User = () => {
    let [user,setUser] = useState('')
    const deletedUser = () => {
      setUser('user Oleg')
    }
    const saveUser = () => {
        setUser('user Darya')
    }
  return<div>
      {user}
      <button onClick={deletedUser}>Oleg</button>
      <button onClick={saveUser}>Darya</button>
  </div>
}