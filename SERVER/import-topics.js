
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

const supabase = require("./supabase");

async function importTopics() {
  try {
    // 1. Locate and read the astronomy data file.
    const dataFile = path.join(
      __dirname,
      "../PUBLIC/js/topics-data.js"
    );

    if (!fs.existsSync(dataFile)) {
      throw new Error(
        "Cannot find PUBLIC/js/topics-data.js"
      );
    }

    const source = fs.readFileSync(dataFile, "utf8");

    // 2. Load the cosmicTopics array.
    const cosmicTopics = vm.runInNewContext(
      source + "\n;cosmicTopics;",
      {}
    );

    if (!Array.isArray(cosmicTopics)) {
      throw new Error(
        "cosmicTopics is not an array."
      );
    }

    console.log("Topics found in source:", cosmicTopics.length);

    // 3. Validate and prepare database records.
    const rows = [];

    cosmicTopics.forEach((topic, index) => {
      if (
        !topic ||
        typeof topic !== "object" ||
        Array.isArray(topic)
      ) {
        console.warn(
          `Skipping invalid topic at array index ${index}.`
        );
        return;
      }

      const requiredFields = [
        "id",
        "title",
        "category",
        "summary",
        "content"
      ];

      const missingFields = requiredFields.filter(
        (field) =>
          typeof topic[field] !== "string" ||
          topic[field].trim() === ""
      );

      if (missingFields.length > 0) {
        console.warn(
          `Skipping topic at index ${index}; missing: ` +
          missingFields.join(", ")
        );
        return;
      }

      rows.push({
        slug: topic.id.trim(),
        title: topic.title.trim(),
        category: topic.category.trim(),
        summary: topic.summary.trim(),
        content: topic.content.trim(),
        fact:
          typeof topic.fact === "string" &&
          topic.fact.trim() !== ""
            ? topic.fact.trim()
            : null
      });
    });

    if (rows.length === 0) {
      throw new Error(
        "No valid topics were found to import."
      );
    }

    console.log("Valid topics to import:", rows.length);

    // 4. Import one record at a time.
    let imported = 0;
    let failed = 0;

    for (const row of rows) {
      console.log("Importing:", row.slug);

      try {
        const { error } = await supabase
          .from("topics")
          .upsert(row, {
            onConflict: "slug"
          });

        if (error) {
          failed++;
          console.error(
            `Failed topic "${row.slug}":`,
            JSON.stringify(error, null, 2)
          );
          continue;
        }

        imported++;
        console.log("Imported successfully:", row.slug);
      } catch (error) {
        failed++;
        console.error(
          `Unexpected error for "${row.slug}":`,
          error.message
        );
      }
    }

    // 5. Check the final database count.
    const { count, error: countError } = await supabase
      .from("topics")
      .select("id", {
        count: "exact",
        head: true
      });

    console.log("\n========== IMPORT SUMMARY ==========");
    console.log("Valid topics:", rows.length);
    console.log("Imported or updated:", imported);
    console.log("Failed:", failed);

    if (countError) {
      console.error(
        "Could not verify database count:",
        countError.message
      );
    } else {
      console.log("Total topics in database:", count);
    }

    if (failed > 0) {
      process.exitCode = 1;
      console.log("Some topics failed; see errors above.");
    } else {
      console.log("All valid topics imported successfully!");
    }

    console.log("====================================");
  } catch (error) {
    console.error(
      "IMPORT ERROR:",
      error.stack || error.message
    );
    process.exitCode = 1;
  }
}

importTopics();
