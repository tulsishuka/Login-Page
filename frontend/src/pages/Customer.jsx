import React from "react";
import { useNavigate } from "react-router-dom";
const Customer = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
     <header className="w-full max-w-6xl flex justify-between items-center "> 
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Customer!</h1>
      
    <button
  onClick={() => {
    localStorage.removeItem("token");
    navigate("/login");
  }}
  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
>
  Logout
</button>
      </header>

      {/* Welcome Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 mt-8 w-full max-w-4xl flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Hello! Ready to explore your dashboard?
          </h2>
          <p className="text-gray-600 mb-6">
            Here you can view your orders, manage your profile, and enjoy personalized recommendations.
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition">
              View Orders
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-xl hover:bg-indigo-50 transition">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=80"
            alt="Customer"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full max-w-6xl mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition">
          <h3 className="text-xl font-semibold mb-2">Orders</h3>
          <p className="text-gray-600">Check your order history and track deliveries.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition">
          <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <p className="text-gray-600">Update your personal info and settings easily.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition">
          <h3 className="text-xl font-semibold mb-2">Support</h3>
          <p className="text-gray-600">Contact support if you need help with anything.</p>
        </div>
      </div>
    </div>
 
  );
};

export default Customer;
