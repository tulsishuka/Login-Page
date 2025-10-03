// import { useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";


// const ProctectRoutes = ({children,requireRole}) => {
//     const {user} = useAuth();
//     const navigate = useNavigate();

//     useEffect(()=>{
//         if (!user) {
//             navigate("/login")
//             return
//         }
//         if (!requireRole.includes(user.role)) {
//             navigate("/unauthorized")
//             return
//         }
//     },[user,navigate, requireRole])
//     if (!user) return null ;
//     if(!requireRole.includes(user.role)) return null;
//   return children
// }

// export default ProctectRoutes
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProctectRoutes = ({ children, requireRole }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!requireRole.includes(user.role)) {
      navigate("/unauthorized");
      return;
    }
  }, [user, navigate, requireRole]);

  // If user is not logged in or role not allowed, render nothing
  if (!user || !requireRole.includes(user.role)) return null;

  return children;
};

export default ProctectRoutes;
