const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Root Route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// Index Route
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching listings.");
  }
});

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found.");
    }
    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching listing.");
  }
});

// Create Route
app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating listing.");
  }
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found.");
    }
    res.render("listings/edit.ejs", { listing });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading edit form.");
  }
});

// Update Route
app.put("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true, runValidators: true });
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating listing.");
  }
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting listing.");
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(8080, () => {
  console.log("Wanderlust server is running on http://localhost:8080");
});
