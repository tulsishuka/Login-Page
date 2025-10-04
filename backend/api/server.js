
// import express from 'express'
// import cors from 'cors'

// import authRouter from '../routes/auth.js'
// import connectDB from '../db/connection.js'
// import dotenv from 'dotenv';

// const app = express()
// dotenv.config();

// app.use(cors())
// app.use(express.json())
// app.use('/api/auth',authRouter)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     connectDB()
//     console.log(`Example app listening on port ${port}`)
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../db/connection.js';
import authRouter from '../routes/auth.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to DB
connectDB();

// Export app for Vercel serverless function
export default app;
