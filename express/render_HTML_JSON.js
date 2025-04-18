const express = require('express');
const app = express();

app.get('/api', (request, response) => {
    const people = [
        { name: "Aiman", age: 19},

        { name: "Abdullah", age: 22},

        { name: "Ali", age: 20 }
    ];
    
    response.json(people);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
