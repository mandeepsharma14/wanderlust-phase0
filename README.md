# 🌍 Wanderlust

An Airbnb-inspired travel listing web application built with **Node.js**, **Express**, **MongoDB**, and **EJS**.

Browse, create, edit, and delete property listings from around the world.

---

## 📸 Features

- View all travel listings in a responsive card grid
- View full listing details including image, price, and location
- Create new listings with image URL, price, and location info
- Edit existing listings
- Delete listings with a confirmation prompt
- Default image fallback for listings without a custom image
- Seed the database with 29 sample listings from across the globe

---

## 🗂️ Project Structure

```
wanderlust/
├── app.js                  # Main Express application & routes
├── package.json
├── .gitignore
├── LICENSE
├── models/
│   └── listing.js          # Mongoose schema & model
├── views/
│   └── listings/
│       ├── index.ejs       # All listings page
│       ├── show.ejs        # Single listing detail page
│       ├── new.ejs         # Create new listing form
│       └── edit.ejs        # Edit listing form
├── public/
│   └── css/
│       └── style.css       # Application styles
└── init/
    ├── index.js            # Database seed script
    └── data.js             # Sample listing data
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [MongoDB](https://www.mongodb.com/) running locally on port `27017`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure your local MongoDB instance is running:
   ```bash
   mongod
   ```

4. **Seed the database** *(optional but recommended for first run)*
   ```bash
   npm run seed
   ```
   This inserts 29 sample listings into the `wanderlust` database.

5. **Start the server**
   ```bash
   npm start
   ```
   Or, for auto-reload during development:
   ```bash
   npm run dev
   ```

6. **Open the app**
   Visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🛣️ Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/listings` | Show all listings |
| GET | `/listings/new` | Show create listing form |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Show a single listing |
| GET | `/listings/:id/edit` | Show edit form |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Template Engine | EJS |
| HTTP Method Override | method-override |
| Styling | Custom CSS |

---

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the production server |
| `npm run dev` | Start with nodemon (auto-reload) |
| `npm run seed` | Seed the database with sample data |

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
