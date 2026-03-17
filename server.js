require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const contactRouter = require('./routes/contact');
const demoRouter   = require('./routes/demo');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Security middleware ──────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false  // disabled so inline styles/scripts in HTML work
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Rate limiting ────────────────────────────────────────
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // 15 minutes
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' }
});
app.use('/api/', apiLimiter);

// ── Serve static front-end ───────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ── API routes ───────────────────────────────────────────
app.use('/api/contact', contactRouter);
app.use('/api/demo',    demoRouter);

// ── Health check ─────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'CyberShield Technologies Ltd',
    timestamp: new Date().toISOString()
  });
});

// ── Catch-all → serve index.html (SPA fallback) ──────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── Start ─────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🛡  CyberShield server running on http://localhost:${PORT}`);
  console.log(`    ENV: ${process.env.NODE_ENV || 'development'}\n`);
});

module.exports = app;
