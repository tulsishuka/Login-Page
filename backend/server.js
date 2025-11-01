
import express from 'express'
import cors from 'cors'

import connectDB from './db/connection.js';
import authRouter from './routes/auth.js';
import dotenv from 'dotenv';

const app = express()
dotenv.config();
connectDB()

// app.use(cors())
app.use(cors({
  origin: "https://login-page-bk2r.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json())
app.use('/api/auth',authRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    connectDB()
    console.log(`Example app listening on port ${port}`)
});
