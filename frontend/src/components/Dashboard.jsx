
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-orange-500 text-3xl">2500</p>
          <p className="text-gray-500">Welcome</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-blue-500 text-3xl">123.50</p>
          <p className="text-gray-500">Average Time</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-green-500 text-3xl">1,805</p>
          <p className="text-gray-500">Collections</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-pink-500 text-3xl">54</p>
          <p className="text-gray-500">Comments</p>
        </div>
      </div>

      {/* Social stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-800 p-4 rounded shadow text-white text-center">
          <FaFacebookF className="mx-auto mb-2" />
          <p>35k Friends</p>
          <p>128 Feeds</p>
        </div>
        <div className="bg-sky-500 p-4 rounded shadow text-white text-center">
          <FaTwitter className="mx-auto mb-2" />
          <p>584k Followers</p>
          <p>978 Tweets</p>
        </div>
        <div className="bg-blue-700 p-4 rounded shadow text-white text-center">
          <FaLinkedinIn className="mx-auto mb-2" />
          <p>758+ Contacts</p>
          <p>365 Feeds</p>
        </div>
        <div className="bg-red-600 p-4 rounded shadow text-white text-center">
          <FaGoogle className="mx-auto mb-2" />
          <p>450 Followers</p>
          <p>57 Circles</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded shadow">
        <div className="h-64 flex items-center justify-center text-gray-400">
          {/* You can integrate Chart.js or Recharts here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
