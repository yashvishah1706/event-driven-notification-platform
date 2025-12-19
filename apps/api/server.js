require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👇 ADD IT RIGHT HERE (global request logger)
app.use((req, res, next) => {
  console.log("INCOMING:", req.method, req.url);
  next();
});

// ✅ Health check
app.get("/healthz", (req, res) => {
  res.status(200).json({ ok: true });
});

// ✅ Root route
app.get("/", (req, res) => {
  res.status(200).send("API is up");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on http://localhost:${PORT}`);
});
