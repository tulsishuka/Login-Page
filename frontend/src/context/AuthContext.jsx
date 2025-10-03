// import { createContext, useState, useContext } from "react";
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {``
//     const storedUser = localStorage.getItem("pos-user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   const login = (userData, token) => {
//     setUser(userData);
//     localStorage.setItem("pos-user", JSON.stringify(userData));
//     localStorage.setItem("pos-token", token);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("pos-user");
//     localStorage.removeItem("pos-token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth = ()=>useContext(AuthContext)


// export default AuthProvider






























import { createContext, useState, useContext, useEffect } from "react";
import * as jwt_decode from "jwt-decode"; // ✅ works with Vite

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("pos-token");
    if (token) {
      try {
        const decoded = jwt_decode(token); // decode token
        setUser({ id: decoded.id, role: decoded.role });
      } catch {
        localStorage.removeItem("pos-token");
        localStorage.removeItem("pos-user");
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("pos-user", JSON.stringify(userData));
    localStorage.setItem("pos-token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pos-user");
    localStorage.removeItem("pos-token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
export default AuthContext;
