# 📝 MERN To-Do List App

A simple and powerful To-Do List application built with the **MERN stack (MongoDB, Express, React, Node.js)**. Users can create, update, and delete tasks in a fast and responsive interface.

---

## 🚀 Features

- ✅ Add new tasks
- 📝 Edit existing tasks
- ❌ Delete tasks
- 🎯 Mark tasks as completed
- 🗃️ MongoDB database integration
- 🔐 Environment variables support
--------------------------------------------*************--------------------------------------------------------------------------------------------------------------------------------------
🚀 How to Run the Project Locally
⚙️ Prerequisites

Node.js and npm: Ensure Node.js and npm are installed on your system. You can download them from nodejs.org.
MongoDB: Have MongoDB running locally or provide a MongoDB Atlas connection string.
Git: Ensure Git is installed to clone the repository. Download it from git-scm.com.


🔧 Setup Instructions
Step 1: Clone the Repository
Clone the project repository to your local machine and navigate to the project directory:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Step 2: Backend Setup

Navigate to the backend directory and install dependencies:
cd backend
npm install


Create a .env file in the backend directory with the following environment variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


Start the backend server:
npm start

The server will run on http://localhost:5000.


Step 3: Frontend Setup

Navigate to the frontend directory and install dependencies:
cd ../frontend
npm install


Start the frontend development server:
npm run dev

The frontend will run on http://localhost:5173.



📝 Notes

Ensure MongoDB is running locally or replace MONGO_URI with a valid MongoDB Atlas connection string.
The JWT_SECRET should be a secure, unique string for your application.
If you encounter issues, verify that ports 5000 (backend) and 5173 (frontend) are not in use by other applications.


🛠️ Tech Stack

Backend: Node.js, Express.js, MongoDB
Frontend: [React, Vite + TailWind CSS]
Authentication: JWT (JSON Web Tokens)


🤝 Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.

📧 Contact
For any questions or issues, please open an issue on the GitHub repository or contact [manojpipare05@gmail.com].
