# 💬 QuickChat - Full Stack Real-Time Chat App

A full-stack real-time chat application built completely from scratch. It lets users chat instantly, share images and videos, see who's online, and customize the app with different themes.

## 📖 About This Project

QuickChat is a real-time messaging app where users can send messages instantly, share media, and see live online status of other users. It has a custom-built WebSocket server (no Firebase or Supabase used), secure authentication, and a clean, customizable interface with dark/light mode support.

## ✨ Features

- ⚛️ **Frontend** built with React, Tailwind CSS & Hero UI
- 🔑 **Authentication** handled with Clerk
- 📡 **Real-time messaging** using Socket.io
- 🟢 **Online user presence tracking** — see who's active right now
- 🍃 **MongoDB** database integration for storing users and messages
- 🧩 **Backend** powered by Node.js & Express.js
- 🎞️ **Image & video sharing** support in chats
- 🌗 **Dark/Light mode** plus multiple themes and wallpapers
- 🔊 **Optional keyboard sound effects** for a fun typing experience
- 🛰️ **Custom WebSocket server** built from scratch (no Firebase/Supabase)
- 📸 **Media uploads & transformations** using ImageKit
- ⏰ **Webhooks, Cron Jobs & Middleware** used for background tasks and automation

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Hero UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Clerk
- **Real-Time Communication:** Socket.io (custom WebSocket server)
- **Media Handling:** ImageKit

## 🧠 What I Learned Building This

- How to build a WebSocket server from scratch instead of relying on third-party real-time services
- Handling webhooks and cron jobs for background processes
- Managing authentication securely using Clerk
- Uploading and transforming media efficiently with ImageKit
- Structuring middleware for cleaner backend code

## 🚀 How to Run This Project Locally

1️⃣ Clone this repository
```bash
git clone https://github.com/Sushmita-2701/QuickChat.git
```

2️⃣ Go into the project folder
```bash
cd QuickChat
```

3️⃣ Install backend dependencies
```bash
cd backend
npm install
```

4️⃣ Install frontend dependencies
```bash
cd ../frontend
npm install
```

5️⃣ Add your environment variables in a `.env` file (MongoDB URL, Clerk keys, ImageKit keys, etc.)

6️⃣ Run the backend server
```bash
npm start
```

7️⃣ Run the frontend app
```bash
npm run dev
```

8️⃣ Open your browser and go to `http://localhost:3000`


## 📬 Contact

- 📧 **Email:** mauryasushmita9422@gmail.com
- 💼 **LinkedIn:** [Sushmita Maurya](https://linkedin.com/in/sushmita-maurya-a86120325)
