const mkdirp = require('mkdirp'); 

let path = []; 
const mkdir = (structure, root) => {
    if (root) path.push(root); 
    for(key of Object.keys(structure)) {
        path.push(key); 
        mkdirp(path.join("/")); 
        mkdir(structure[key]); 
    }
    path.pop(); 
}

module.exports = mkdir; 