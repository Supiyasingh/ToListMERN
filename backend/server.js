// import express from 'express';
// import dotenv from 'dotenv';
// import todoRoutes from "./routes/todo.route.js";
// import { connectDB } from "./config/db.js";


// dotenv.config();


// const app = express();

// app.use(express.json());

// app.use("/api/todos", todoRoutes);
// app.listen(5000, () => {
//     connectDB();
//   console.log('Server started at http://localhost:5000');
// });
import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Use Render’s port

app.use(express.json());

app.use("/api/todos", todoRoutes);

// Connect DB before starting server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Database connection failed:", err);
  process.exit(1); // Stop app if DB fails
});

