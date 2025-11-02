Login Page

A modern and responsive login page built with a clean UI and secure authentication system.
This project demonstrates how frontend and backend work together to create a seamless user login experience.

🚀 Features
```
✨ User Authentication — Secure login system using backend verification.
🎨 Responsive Design — Works smoothly across all screen sizes.
⚙️ Frontend + Backend Integration — Real-time connection between UI and server.
🧠 Clean & Modular Codebase — Easy to understand and extend.
```
🧩 Tech Stack

```
💻 Frontend	HTML, CSS, JavaScript 
🧠 Backend	Node.js, Express
🔑 Auth	JWT / Session-based Authentication
```
🏗️ Project Structure
```
Login-Page/
│
├── backend/        
├── frontend/     
├── .gitignore
├── package.json
└── README.md
```
⚙️ Setup Instructions
```
1️⃣ Clone the repository
git clone https://github.com/tulsishuka/Login-Page.git
cd Login-Page

2️⃣ Install dependencies
# For backend
cd backend
npm install
nodemon server.js

# For frontend
cd frontend
npm install
npm run dev
```
3️⃣ Add environment variables
Create a .env file inside the backend folder and include:
```
PORT=3000
MONGO_URI=your_database_url
JWT_SECRET=your_secret_key
```





💡 Usage
```
Open the login page.
Enter credentials (email + password).
System validates the user and redirects them securely.
Errors (like wrong credentials) are displayed clearly.


💬 Contributing
Contributions are welcome! 🎉
If you’d like to improve the UI, fix bugs, or add features like signup or forgot password —
just fork the repo and submit a pull request 🚀
```
