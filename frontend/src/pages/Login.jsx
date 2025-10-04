
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "";

  const { login } = useAuth();
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

  // try {
  //   const response = await axios.post("http://localhost:3000/api/auth/login", {
  //     email,
  //     password,
  //   });
   try {
      // ✅ Use environment variable URL, not localhost
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

    if (response.data.success) {
      // Save user + token in context
      await login(response.data.user, response.data.token);

      // Redirect by role
      if (response.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (response.data.user.role === "customer") {
        navigate("/customer/dashboard");
      }
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};
  return (
    <>
   <Navbar/>
 <div className="flex items-center justify-center min-h-screen bg-gray-900"> 

  <form
    onSubmit={handleSubmit}
    className="bg-gray-800 shadow-xl rounded-3xl p-10 w-96 relative overflow-hidden"
  >
    {/* Decorative Gradient Circles */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-40 blur-2xl"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-40 blur-2xl"></div>

    <h2 className="text-3xl font-bold text-center text-white mb-8">Login</h2>

    <div className="mb-5">
      <label className="block text-gray-300 mb-2 font-medium">Email</label>
      <div className="flex items-center border border-gray-700 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition">
       
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-gray-900 text-white placeholder-gray-400 outline-none" required/>
      </div>
    </div>
        <div className="mb-6">
      <label className="block text-gray-300 mb-2 font-medium">Password</label>
      <div className="flex items-center border border-gray-700 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-700 text-white placeholder-gray-400 outline-none"
          required        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-400 hover:text-white ml-2 transition"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>


    {error && (
      <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
    )}

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-2xl hover:scale-105 transform transition duration-300 disabled:opacity-50 shadow-lg"
    >
      {loading ? "Logging in..." : "Login"}
    </button>

    <p className="text-center text-gray-400 mt-4">
      Don't have an account?{" "}
      <span className="text-purple-400 font-semibold hover:underline cursor-pointer">
        Sign up
      </span>
    </p>
  </form>
</div>

</>

  );
}

export default Login;
