import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

/* ---------------- SOCKET SETUP ---------------- */

const io = new Server(server, {
  cors: {
    origin: ENV.CLIENT_URL,
    credentials: true,
  },
});

/* ---------------- ONLINE USERS MAP ---------------- */

const userSocketMap = {}; // { userId: socketId }

/* ---------------- HELPER FUNCTION ---------------- */

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

/* ---------------- AUTH MIDDLEWARE ---------------- */

io.use(socketAuthMiddleware);

/* ---------------- CONNECTION ---------------- */

io.on("connection", (socket) => {
  try {
    const userId = socket.userId;

    if (!userId) {
      console.log("Socket connected without userId ❌");
      return;
    }

    userSocketMap[userId] = socket.id;

    console.log("User connected:", userId);

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("User disconnected:", userId);

      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  } catch (err) {
    console.error("Socket error:", err);
  }
});

export { io, app, server };
