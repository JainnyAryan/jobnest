import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();


export const UserProvider = (props) => {
  const [user, setUser] = useState(null);


  const setUserData = (userData) => {
    setUser(userData);
  }

  const clearUserData = () => {
    setUser(null);
  }

  // useEffect(() => {
  //   console.log("from provider")
  //   const storedUserData = localStorage.getItem('userData');
  //   if (storedUserData) {
  //     setUserData(JSON.parse(storedUserData));
  //   }
  // }, []);

  return (
    <UserContext.Provider value={{ user, setUserData, clearUserData }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext);
}