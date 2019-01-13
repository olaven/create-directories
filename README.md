# make-directories
Micro-library for easy directory creation. 

## TODO: 
- [ ] Make the API work
- [ ] Spice up readme 
- [ ] Make repo public 
- [ ] Publish module 
- [ ] Typescript-definition, use dts-gen
- [ ] Refactoring and clean-up
- [ ] Build in custom directory

## Usage 
```javascript 
directory()
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
```

Will (when package is finished) produce the following directory structure: 
* school
  * programming
  * algorithms
  * databases
* hobbies
  * books
    * fiction
    * non-fiction
  * movies
  * cooking
* other
