import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "customer") {
        navigate("/customer/dashboard");
      } else {
        navigate("/unauthorized"); 
      }
    } else {
      navigate("/login"); 
    }
  }, [user, navigate]);

  return null;
};

export default Root;
