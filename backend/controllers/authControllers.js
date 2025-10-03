

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const login = async (req, res) => {
  try {
    // 1️⃣ Check if data is coming from frontend
    console.log("📩 Request body:", req.body);

    const { email, password } = req.body;

    // 2️⃣ After finding the user
    const user = await User.findOne({ email });
    console.log("👤 User from DB:", user);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'User not found' });
    }

    // 3️⃣ Before password check
    console.log("🔑 Plain password:", password);
    console.log("🗝️ Hashed password in DB:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("✅ Password match result:", isMatch);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid credentials' });
    }


    const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET, 
  { expiresIn: '2d' }
);

    console.log("🎫 Generated token:", token);

    return res.status(200).json({
      success: true,
      message: 'Login successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
    
  } catch (error) {
    console.error("❌ Login error:", error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
};
export default login;