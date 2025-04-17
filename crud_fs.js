const fs = require("fs");
const path = require("path");
const crudPath = path.join(__dirname, "CRUD");
const myFile = `${crudPath}/CRUD.txt`;
// console.log(crudPath);
////////////create file/////////////
// fs.writeFileSync(`${crudPath}/crudPath.txt`, 'Create read update delete');
///////////read file//////////////
// fs.readFile(myFile, 'utf-8', (err, data) => { 
//         console.log(data);
    
// });
///////////////update file//////////////
fs.appendFile(myFile, ' this is an update ', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File updated successfully!');
    }
});


