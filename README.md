# make-directories
Micro-library for easy directory creation. 

## Usage 
```javascript 
const mkdir = require("create-directories"); 

const structure = {
    "books": {
        "fiction": {}
        "non-fiction": {}
    }, 
    "school": {
        "programming": {
            "notes": {}, 
            "examples": {}
        }, 
        "databases": {}, 
        "alorithms": {}
    }, 
    "other": {}
}

// creates directories in current directory 
mkdir(structure); 

// creates directory in other root
mkdir(structure, "/path/to/other/root"); 
```

Will produce the following directory structure: 
* books
  * fiction
  * non-fiction
* school
  * programming
    * notes
    * examples
  * databases
  * algorithms
* other


## TODO: 
- [X] Make the API work
- [ ] Spice up readme 
- [X] Make repo public 
- [X] Publish module 
- [X] Refactoring and clean-up
- [X] Build in custom directory