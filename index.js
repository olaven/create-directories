const mkdirp = require('mkdirp'); 

const assign = array => {
    return (array ? array : []);
}


const directory = () => {

    //callback receives directory 
    this.create = (name, callback) => {
        // create structure if this is first `create`
        this.structure = assign(this.structure);

        //i.e. has parent-create with name 
        if (this.superdir) { // TODO: Add support for more than one subdir (use tree or similar, I think. Has to be searchable to enter at correct place)
            this.structure[this.superdir] = assign(this.structure[this.superdir]); 
            this.structure[this.superdir].push(name); 
        } else {
            this.structure[name] = []; 
        }  
        
        if (callback) {
            this.superdir = name;
            callback(this)
        } else {
            this.superdir = undefined;
        }

        return this;  
    }

    this.now = () => {
        console.log("creating dir with:", this.structure); 
    }

    return this; 
}

directory()
    .create("hello")
    .create("super", (directory) => {
        directory
            .create("subsuper", (directory) => {
                directory 
                    .create("subsub")
            })
    })
    .now(); 



