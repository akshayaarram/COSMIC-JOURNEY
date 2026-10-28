
"use strict";

const express = require("express");
const router = express.Router();
const supabase = require("../supabase");

// Get all astronomy topics
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("topics")
      .select("slug, title, category, summary, content, fact")
      .order("title");

    if (error) {
      console.error("Error loading topics:", error.message);
      return res.status(500).json({
        success: false,
        message: "Could not load topics."
      });
    }

    res.json({
      success: true,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("Topics API error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while loading topics."
    });
  }
});

// Get one topic by its slug
router.get("/:slug", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("topics")
      .select("slug, title, category, summary, content, fact")
      .eq("slug", req.params.slug)
      .maybeSingle();

    if (error) {
      console.error("Error loading topic:", error.message);
      return res.status(500).json({
        success: false,
        message: "Could not load this topic."
      });
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Topic not found."
      });
    }

    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error("Topic API error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while loading this topic."
    });
  }
});

module.exports = router;
