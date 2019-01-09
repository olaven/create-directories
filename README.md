# make-directories
Node abstraction for easy directory creation. 

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
            .create("books")
            .create("movies")
            .create("cooking")
    })
    .create("other")
    .now(); 
```