const mkdirp = require('mkdirp'); 

const directoryv1 = () => {
    
    this.create = (name) => {
        
        if (!this.names) {
            this.names = []; 
        }
        
        this.names.push(name); 
        return this; 
    }

    this.now = () => {
        let dir = __dirname; 
        for (let name of this.names) {
            dir += "/" + name; 
        }

        mkdirp(dir, result => console.log(result)); 
    } 
    
    return this
}

const directory = () => {

    //callback receives directory 
    this.create = (name, callback) => {
        
        if (!this.structure) {
            this.structure = [];
        }

        this.structure[name] = [];

        callback(this); 
        return this;  
    }

    this.now = () => {

    }
}

/**
 * objekt -> string-idnexed-array / array[string-indexed-array]
 *                      string - idnexed - array / array[string - indexed - array]
 *              
 */

/*
directory()
    .create("school", (directory) => {
        directory
            .create("programming")
            .create("algorithms")
            .create("databases")
    })
    .create("hobbies", (directory) => {
        directory
            .create("books")
            .create("movies")
            .create("cooking")
    })
    .create("andanother")
    .now(); 
// module.exports = create;

*/
