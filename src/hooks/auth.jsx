import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState("")

  async function signIn({ email, password }){
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocket-notes:user", JSON.stringify(user))
      localStorage.setItem("@rocket-notes:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({user, token})

    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@rocket-notes:token");
    localStorage.removeItem("@rocket-notes:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocket-notes:token");
    const user = localStorage.getItem("@rocket-notes:user");

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
       }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };