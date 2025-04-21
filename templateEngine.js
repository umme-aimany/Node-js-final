const express = require("express");
const app = express();

// Correct view engine setup
app.set("view engine", "ejs");

app.get("/Welcome", (req, res) => {
    const empInfo = {
        name: "Aiman",
        id: 255,
        courses: ["HTML", "CSS", "REACT", "Nodejs"]
    };
    
    // Correct variable usage
    res.render("Welcome", { empInfo });
});

app.listen(2000, () => {
    console.log("Server is running on http://localhost:2000/Welcome");
});
