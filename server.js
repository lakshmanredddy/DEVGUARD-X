const express = require("express");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 4000;

// INTENTIONAL HACKATHON DEFECT:
// Files larger than 10 MB trigger Multer's LIMIT_FILE_SIZE error.
// The error is not handled explicitly, so Express returns a generic 500.
// DEVGUARD-X should diagnose this, implement a controlled policy,
// and add regression tests.
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "file is required" });
  }

  res.json({
    message: "Upload accepted",
    filename: req.file.originalname,
    size: req.file.size
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Target app running at http://localhost:${PORT}`);
});

module.exports = app;
