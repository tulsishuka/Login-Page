import bcrypt from 'bcrypt'
import User from './models/User.js'
import connectDB from './db/connection.js'

const registerCustomer = async () => {
  try {
    await connectDB();

    const hashPassword = await bcrypt.hash("customer123", 10); // customer password

    const newUser = new User({
      name: "Customer ",
      email: "customer@gmail.com",
      password: hashPassword,
      address: "Customer Address",
      role: "customer"
    });

    await newUser.save();
    console.log(" Customer user created successfully");
  } catch (error) {
    console.log(" Error creating customer user:", error);
  }
};

registerCustomer();
