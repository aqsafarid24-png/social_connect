const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//nsole.log(process.env.MONGO_URI);

//mongoose.connect(process.env.MONGO_URI)
//.then(() => console.log("MongoDB Connected Successfully"))
//.catch((err) => console.log(err));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Views
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

// Home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "profile.html"));
});

app.get("/friends", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "friends.html"));
});

app.get("/notifications", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "notifications.html"));
});

app.get("/messages", (req,res)=>{

res.sendFile(path.join(__dirname,"views","messages.html"));

});


app.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "settings.html"));
});

// Start Server




app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
