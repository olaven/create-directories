const mkdirp = require('mkdirp'); 
const Arboreal = require('arboreal'); 

const tree = new Arboreal(); 



/**
 * Returns the first node that matches 
 * the regex pattern 
 * @param {string} pattern 
 */
const find = (pattern) => {
    return tree.find(node => {
        const regex = new RegExp(pattern); 
        return regex.test(node.data); 
    })
}

/**
 * Returns the last element in array
 */
Array.prototype.peek = function() {
    if (this.length <= 0) return null; 
    return this[this.length - 1]; 
}

/**
 * Returns true if the array contains 
 * all node in given array based on their data 
 */
Array.prototype.containsAllIn = function(array) {

    return array.filter(node => 
        this.find(n => n.data === node.data) !== undefined
    ).length === array.length; 
}


// The tree generation is faulty! 
const directory = () => {
    this.currentPath = []; 
    //callback receives directory 
    this.create = (name, callback) => {
        // create structure if this is first `create`
        this.tree = (this.tree? this.tree: tree) 

        //i.e. is going down in a path 
        if (this.currentPath.length > 0) { 
            // find location of currentPath int tree 
            // add name under that 
            let currentSuperDir = this.currentPath.peek(); 
            let node = find(currentSuperDir);
            node.appendChild(name); 
        } else {
            // append on root in tree 
            tree.appendChild(name); 
        }  
        
        if (callback) {
            this.currentPath.push(name); 
            callback(this)
        } else {
            // FIXME: This happens too often. 
            this.currentPath.pop(); 
        }

        return this;  
    }

    this.now = () => {
        console.log(this.tree); 
        let path = [];
        const iterator = (node) => {
            // dersom chlidren.length == 0 -> bunn, bygg path med parent-linker 
            // Fortsett (gjøres automatisk gjennom iterator) 
            if (node.children.length === 0) {
                let current = node; 
                while(current !== undefined && current !== null) {
                    path.push(current.data); 
                    current = current.parent; 
                }
                path.pop(); // remove top-object
                let pathString = path.reverse().join("/"); 
                mkdirp(pathString);
                path = []; 
            }
        } 

        this.tree.traverseDown(iterator); 
        
    }

    return this; 
}

// CALLING FOR TESTING
directory()
    .create("super", (directory) => {
        directory
            .create("school", (directory) => {
                directory
                    .create("programming")
                    .create("algorithms")
                    .create("databases")
            })
            .create("hobbies", (directory) => {
                directory
                    .create("books", (directory) => {
                        directory
                            .create("fiction")
                            .create("non-fiction")
                    })
                    .create("movies")
                    .create("cooking")
            })
            .create("other")
    })
    .now(); 

module.exports = directory; 