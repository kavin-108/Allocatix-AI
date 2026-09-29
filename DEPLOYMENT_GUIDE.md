# 🚀 Deployment Guide - Smart Campus Ops (Elegant Cream & Obsidian Black)

This full-stack application is production-ready and configured to run as a **unified single-server application** (Express serving Vite production assets directly) or as separate decoupled services.

---

## ⚡ Option 1: Instant Live Public URL (No Signup Needed - Ideal for Hackathon Demos)

You can share a live public HTTPS URL with judges or team members directly from your computer right now:

### Step 1: Make sure the production server is running
```bash
# In backend folder
node server.js
```
*(Running on `http://localhost:5000`)*

### Step 2: Open a new terminal and run LocalTunnel
```bash
npx localtunnel --port 5000
```
This will instantly give you a live public HTTPS URL like:
`https://smart-campus-ops.loca.lt`

---

## ☁️ Option 2: Free Cloud Deployment on Render.com (Recommended)

Render hosts full-stack Node applications completely free:

1. Push this folder to your **GitHub** account.
2. Go to **[render.com](https://render.com)** and log in.
3. Click **"New +"** → **"Web Service"**.
4. Select your GitHub repository.
5. Render will automatically detect the settings from `render.yaml` or fill in:
   - **Environment:** `Node`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
6. Click **"Create Web Service"**.
7. In ~2 minutes, your live URL will be active at:
   `https://smart-campus-ops.onrender.com`

---

## 🚂 Option 3: Railway.app (Instant 1-Click Deploy)

1. Go to **[railway.app](https://railway.app)**.
2. Click **"Deploy from GitHub repo"**.
3. Railway automatically builds with our root `package.json` and runs `npm start`.
4. Click **"Generate Domain"** to get your public HTTPS link.

---

## 🐳 Option 4: Docker Container Deployment

If you want to run or deploy via Docker:

```bash
# 1. Build the production Docker image
docker build -t smart-campus-ops .

# 2. Run the container
docker run -d -p 5000:5000 --name campus-system smart-campus-ops
```
Access at `http://localhost:5000` or on your cloud VPS IP.
