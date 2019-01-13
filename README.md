# make-directories
Micro-library for easy directory creation. 

## Usage 
```javascript 
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

mkdir(structure); 
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
- [ ] Make repo public 
- [ ] Publish module 
- [X] Refactoring and clean-up
- [ ] Build in custom directory