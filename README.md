
# 🧩 Microservices ToDo App

A full-stack microservices-based ToDo application built with:
- 🧑‍💻 **React.js** (Frontend)
- 🛠️ **Node.js** + **Express** (Backend)
- 🧬 **MongoDB** (UserService)
- 💾 **MySQL** (TaskService)
- 🔐 **gRPC** communication for secure token verification between services

---

## 📦 Project Structure

```
📁 Frontend          → React.js frontend app  
📁 UserService       → Node.js + Express + MongoDB (handles user auth & token validation)  
📁 TaskService       → Node.js + Express + MySQL (handles task CRUD operations)  
📁 protoFiles        → gRPC proto definitions  
📁 DataBase-MongoDb  → MongoDB user collection sample  
📁 DataBase-MySql    → MySQL task table sample  
```

---

## 🚀 How to Run the Project

### 🔹 Frontend (React.js)

1. Navigate to the `Frontend` folder:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

---

### 🔸 Backend Services

#### 🧾 UserService (MongoDB)

1. Navigate to the `UserService` folder:
   ```bash
   cd UserService
   ```

2. Install dependencies and start the server:
   ```bash
   npm install
   npm start
   ```

3. **MongoDB Connection**:
   - Use [MongoDB Compass](https://www.mongodb.com/products/compass) to connect.
   - Database name: `UserService`
   - Collection: `users`
   - Sample data is available in the folder `DataBase-MongoDb`

---

#### ✅ TaskService (MySQL)

1. Navigate to the `TaskService` folder:
   ```bash
   cd TaskService
   ```

2. Install dependencies and start the server:
   ```bash
   npm install
   npm start
   ```

3. **MySQL Connection**:
   - Database name: `Todo_tasks`
   - Table: `task`
   - SQL script for the table is available in `DataBase-MySql`

---

## 🔒 Authentication Flow

- When a user logs in, a JWT token is generated and stored in `localStorage`.
- For every task operation, the frontend sends the token to the TaskService.
- TaskService sends the token via gRPC to the UserService to verify it.
- If valid, TaskService proceeds with the requested operation.

---

## 🛡 Tech Stack Highlights

- ✅ **JWT Auth**
- ☁️ **REST** + **gRPC**
- 🧪 **Modular Microservices**
- 💾 **MongoDB** & **MySQL** integration
- ⚛️ **React** with fetch API and `localStorage` token management

---

## 📸 Screenshot

![Preview](https://i.postimg.cc/K8k4XMCD/TODO-App.png) <!-- Replace with your image link if available -->

---

## 🤝 Contributions

PRs and suggestions are welcome! Feel free to fork this project and build on top of it.

---

## 📄 License

MIT
