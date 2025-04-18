const express = require('express');
const app = express();

app.get('/', (request, response) => {
   const name = request.query.name;
   if(name){
    response.send(`Welocome${name}`)
   }
   else{
    response.send("Routing params in express.js");

   }

});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});