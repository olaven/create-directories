const mkdirp = require('mkdirp'); 
const Arboreal = require('arboreal'); 

const tree = new Arboreal(); 


tree
    .appendChild("super1")
    .appendChild("super2")
    .children[0]
        .appendChild("sub1sup2")
        .appendChild("sub2sup2"); 
   

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




const directory = () => {

    //callback receives directory 
    this.create = (name, callback) => {
        // create structure if this is first `create`
        this.tree = (this.tree? this.tree: tree) 

        //i.e. has parent-create with name 
        if (this.superdir) { // TODO: Add support for more than one subdir (use tree or similar, I think. Has to be searchable to enter at correct place)
            // find location of superdir int tree 
            // add name under that 
            let node = find("sub2sup2");
            node.appendChild(name); 
        } else {
            // append on root in tree 
            tree.appendChild(name); 
        }  
        
        if (callback) {
            this.superdir = name;
            callback(this)
        }/* else { I believe this is a mistake -> when in sub, I do just have the same superdir 
            this.superdir = undefined;
        }*/

        return this;  
    }

    this.now = () => {
        // console.log("creating dir with:", this.tree);
        /*
        const iterator = (node) => {
            // console.log(node);  
        }

        tree.traverseDown(iterator);  */
    }

    return this; 
}

directory()
    .create("hello")
    .create("school", (directory) => {
        directory
            .create("algorithms", (directory) => {
                directory 
                    .create("notes")
            })
            .create("programming")
    })
    .now(); 



