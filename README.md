# Fullstack-Test-Factored

## 📌 Project Overview

This repository contains the Fullstack Test for Factored. It showcases backend and frontend integration, authentication, protected routes, Dockerization, and data visualization with charts.


---

## 🛠 Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Chart.js
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Containerization:** Docker, Docker Compose
- **Database Initialization:** Custom script (`scriptdb.js`)

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Fullstack-Test-Factored.git
cd Fullstack-Test-Factored
````

2. Build and run the containers:

```bash
docker-compose up --build
```

---

## 🌐 Usage

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## 📁 Folder Structure

```
client/     → React frontend
server/     → Express backend
└── scriptdb.js → Seeds the DB with employee data
```

---

## 🔐 Environment Variables

The backend expects a `.env` file in `server/`:

```
MONGO_URI=mongodb://mongo:27017/employeeDB
JWT_SECRET=your_jwt_secret
PORT=5000
```

> In Docker, these are handled automatically. You don't need to set them manually.



