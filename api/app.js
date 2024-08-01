const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json('ok');
});


app.get("/login", (req, res) => {});

app.listen(8081, (err,res) => {
  console.log("server started");
});