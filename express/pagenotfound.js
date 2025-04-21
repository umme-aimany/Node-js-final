const express = require('express');
const path = require('path'); 
const app = express();

const publicPath = path.join(__dirname, "public");


app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(publicPath, "home.html"));
});


app.get("/about", (req, res) => {
  res.sendFile(path.join(publicPath, "about.html"));
});


app.use((req, res) => {
  res.status(404).sendFile(path.join(publicPath, "pagenotfound.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
