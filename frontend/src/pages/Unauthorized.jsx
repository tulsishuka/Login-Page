
import React from "react";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-600 to-purple-700 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 text-center"
        role="dialog"
        aria-labelledby="unauth-title"
        aria-describedby="unauth-desc"
      >
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-red-500 grid place-items-center shadow-lg">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 1.8C9.243 1.8 7 4.043 7 6.8v2.4H6.2A2.2 2.2 0 0 0 4 11.4v7.4A2.4 2.4 0 0 0 6.4 21.2h11.2A2.4 2.4 0 0 0 20 18.8v-7.4a2.2 2.2 0 0 0-2.2-2.2H17V6.8C17 4.043 14.757 1.8 12 1.8z" fill="white"/>
              <path d="M12 15.2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z" fill="#FFF9C4"/>
            </svg>
          </div>
        </div>

        <h2 id="unauth-title" className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Unauthorized Access
        </h2>
        <p id="unauth-desc" className="text-gray-100 mb-6">
          You do not have permission to view this page. Please login to access your account.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-white text-red-600 font-semibold rounded-xl shadow hover:scale-105 transition-transform"
        >
          Go to Login
        </button>
      </motion.div>
    </div>
  );
}