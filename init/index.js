/**
 * Database Seed Script
 * Run with: node init/index.js
 * This will clear all existing listings and insert fresh sample data.
 */

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("Cleared existing listings.");
    await Listing.insertMany(initData.data);
    console.log(`Inserted ${initData.data.length} sample listings.`);
  } catch (err) {
    console.error("Error initializing database:", err);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
};

initDB();
