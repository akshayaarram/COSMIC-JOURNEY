
"use strict";

require("dotenv").config();

const express = require("express");
const supabase = require("./supabase");
const topicsRouter = require("./routes/topics");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// API routes
app.use("/api/topics", topicsRouter);

// Check whether the backend is running
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Cosmic Journey API is running!"
  });
});

// Check the Supabase database connection
app.get("/api/db-health", async (req, res) => {
  try {
    const { error } = await supabase
      .from("topics")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Supabase query error:", error.message);

      return res.status(500).json({
        success: false,
        message: "Database query failed."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Supabase connection successful!"
    });
  } catch (error) {
    console.error("Database connection error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Could not connect to Supabase."
    });
  }
});

// Handle unknown API routes
app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found."
  });
});

// Handle unexpected errors
app.use((err, req, res, next) => {
  console.error("Server error:", err.message);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    success: false,
    message: "An unexpected server error occurred."
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `Cosmic Journey API running at http://localhost:${PORT}`
  );
});

