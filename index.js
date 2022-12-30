const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Blaze media server is running");
});

app.listen(port, () => {
  console.log(`Blaze media server is running on ${port}`);
});