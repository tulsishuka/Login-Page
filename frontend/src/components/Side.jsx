
import { FaHome, FaTable, FaChartBar, FaCog, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // import navigation hook
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate(); // initialize navigate
const { logout } = useAuth(); // get logout function from context

  const menuItems = [
        { name: "Profile", icon: <FaUsers />, path: "/customer/dashboard" },

    { name: "Main Page", icon: <FaHome />, path: "/" },
    { name: "Charts", icon: <FaChartBar />, path: "/admin/dashboard" },
    { name: "Settings", icon: <FaCog />, path: "/admin/dashboard" },
    { name: "Logout", icon: <FaSignOutAlt />, color: "red", },
  ];

 
  const handleClick = (item) => {
  setActive(item.name);

  if (item.name === "Logout") {
    logout(); // clear user from context + localStorage
    navigate("/login"); // redirect to login page
  } else {
    navigate(item.path); // normal navigation for other items
  }
};
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col shadow-lg">
      
      {/* Profile Section */}
      <div className="p-4 flex items-center space-x-4 bg-blue-800 rounded-b-lg">
        <img
          src="https://i.pinimg.com/originals/85/58/29/85582987f7125e4868fdcb28661e934f.png"
          alt="profile"
          className="rounded-full w-12 h-12 border-2 border-white object-cover"
        />
        <div>
          <p className="font-bold text-lg">Admin</p>
          <p className="text-green-400 text-sm">Online</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 mt-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item)}
            className={`flex items-center space-x-3 p-3 rounded-lg w-full transition-all duration-200 
              ${active === item.name ? "shadow-lg " + (item.color === "red" ? "bg-red-600" : "bg-blue-600") : item.color === "red" ? "hover:bg-red-500" : "hover:bg-blue-700"}
              hover:scale-105`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 mt-auto text-center text-gray-300 text-sm">
        © 2025 Your Company
      </div>
    </div>
  );
};

export default Sidebar;
