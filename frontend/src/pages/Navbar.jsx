const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 shadow-xl  px-8 py-4 relative overflow-hidden flex justify-between items-center">

      {/* Decorative Gradient Circles */}
      <div className="absolute -top-5 -right-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute -bottom-5 -left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-30 blur-2xl"></div>

      {/* Logo */}
      <div className="text-white text-2xl font-bold z-10">
        Login Dashboard
      </div>

      {/* Links */}
      <div className="space-x-4 z-10">
        <a
          href="/customer/dashbord"
          className="text-gray-300 hover:text-white font-medium transition"
        >
          User
        </a>
        <a
          href="/signup"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-2xl hover:scale-105 transform transition duration-300 shadow-lg"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
