import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const socketAuthMiddleware = async (socket, next) => {
  try {
    const cookieHeader = socket.handshake.headers.cookie;

    if (!cookieHeader) {
      console.log("No cookies in socket handshake");
      return next(new Error("Unauthorized - No Cookie"));
    }

    // safer cookie parsing
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [key, ...v] = c.split("=");
        return [key, v.join("=")];
      })
    );

    const token = cookies.jwt;

    if (!token) {
      console.log("Socket rejected: No JWT token");
      return next(new Error("Unauthorized - No Token"));
    }

    // verify token
    const decoded = jwt.verify(token, ENV.JWT_SECRET);

    // find user
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      console.log("Socket rejected: User not found");
      return next(new Error("User not found"));
    }

    // attach to socket
    socket.user = user;
    socket.userId = user._id.toString();

    console.log(`Socket auth success: ${user.fullName}`);

    next();
  } catch (error) {
    console.log("Socket auth error:", error.message);
    next(new Error("Unauthorized - Authentication failed"));
  }
};