import { createContext, useContext, useState } from "react";

const UserContext = createContext();


export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const setUserData = (userData) => {
    setUser(userData);
  }

  const clearUserData = () => {
    setUser(null);
  }

  return(
    <UserContext.Provider value={{user, setUserData, clearUserData}}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext);
}