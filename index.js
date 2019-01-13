const mkdirp = require('mkdirp'); 

let path = []; 
const mkdir = (structure) => {
    for(key of Object.keys(structure)) {
        path.push(key); 
        mkdirp(path.join("/")); 
        mkdir(structure[key]); 
    }
    path.pop(); 
}

module.exports = mkdir; 