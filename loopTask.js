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

let firstName = "Ali";
let lastName = null;

const setLastName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Khan");
    }, 2000);
});

const displayFullName=async()=> {
    lastName = await setLastName;
    console.log(`${firstName} ${lastName}`);
}

displayFullName();


