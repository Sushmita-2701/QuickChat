import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const PORT = ENV.PORT || 3000;
const __dirname = path.resolve();

/* ---------------- MIDDLEWARE ---------------- */

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: [ENV.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
  })
);

/* ---------------- HEALTH CHECK ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ---------------- API ROUTES ---------------- */

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/* ---------------- SOCKET + SERVER START ---------------- */

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected successfully ✅");

    server.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("DB Connection Failed ❌", error);
  }
};

startServer();