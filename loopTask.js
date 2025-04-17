const fs = require("fs");
const path = require("path");

const fullpath = path.join(__dirname, "files");

// for (let i = 1; i <= 3; i++) {
//     fs.writeFileSync(`${fullpath}/file${i}.txt`, "this is node.js");
// }

fs.readdir(fullpath, (err, files) => {
    if (err) {
        return console.error("Error reading directory:", err);
    }

    files.forEach((data) => {
        console.log(data);
    });
});


////variable task 

let name1 = "Ali"; 
let name2 = null;    


setTimeout(() => {
    name2 = "Aiman";
    let fullName = name1 + " & " + name2;
    console.log("Full Name:", fullName);
}, 2000);


