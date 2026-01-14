import { createContext, useState } from "react";
export const authContext = createContext();
//we will wrap the app with this provider ,so the children represents the app components
export const Authprovider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const saveToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  const removeToken=()=>{
    localStorage.clear()
    setToken(null)
  }
  //for connecting auth context and auth provider
  //this means we will wrap authprovider with app.jsx and app can access the authContext which provides the values
  return (
    <authContext.Provider value={{token,saveToken,removeToken}}>
        {children}

    </authContext.Provider>
  )

};
