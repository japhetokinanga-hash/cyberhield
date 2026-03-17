# 🛡 CyberShield Technologies — Website & Backend

## Project Structure
```
cybershield-app/
├── server.js          ← Express server (entry point)
├── package.json
├── .env.example       ← Copy to .env and fill in your values
├── routes/
│   ├── contact.js     ← POST /api/contact  (contact form)
│   └── demo.js        ← POST /api/demo     (demo request form)
└── public/
    └── index.html     ← Full landing page (served statically)
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Landing page |
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Contact form submission |
| POST | `/api/demo` | Demo request submission |

---

## ⚡ Deploy in 2 Minutes (Railway — Recommended)

1. Go to **https://railway.app** and sign up (free)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Upload this folder to a new GitHub repo first:
   - Go to https://github.com/new
   - Create a repo called `cybershield-website`
   - Upload all files from this folder
4. In Railway, connect your GitHub repo
5. Railway auto-detects Node.js and deploys
6. Click **"Generate Domain"** → you get your live link!

**Optional — Add email notifications:**
In Railway dashboard → Variables, add:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@cybershield.co.ke
```

---

## 🚀 Alternative: Render (also free)

1. Go to **https://render.com** and sign up
2. Click **"New Web Service"**
3. Connect your GitHub repo
4. Build command: `npm install`
5. Start command: `npm start`
6. Deploy → get your `https://cybershield-website.onrender.com` link

---

## 💻 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Copy and configure environment
cp .env.example .env
# Edit .env with your SMTP credentials

# 3. Start the server
npm start

# Open: http://localhost:3000
```

---

## 📧 Setting Up Gmail (for contact form emails)

1. Go to your Google Account → Security → 2-Step Verification (enable it)
2. Go to **App Passwords**: https://myaccount.google.com/apppasswords
3. Create a new app password for "Mail"
4. Use that 16-character password as `SMTP_PASS` in your `.env`

---

*CyberShield Technologies Ltd — Secure · Protect · Defend*
