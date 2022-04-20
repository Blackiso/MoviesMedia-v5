const fs = require('fs');

let name = new Date().getTime() + '.json';
fs.writeFile(name, name, () => {
    console.log('File is created successfully.');
})