import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/DatabaseConfig";
import profileRoutes from "./api/v1/routers/ProfileRoutes";
import authRoutes from "./api/v1/routers/AuthRoutes";
import userRoutes from "./api/v1/routers/UserRoutes";
import AiCallRoutes from "./api/v1/routers/AiCallRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use("/api/v1", profileRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

app.use("/api/v1", AiCallRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
