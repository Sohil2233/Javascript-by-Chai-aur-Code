const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map automatic return values
// const newNums = myNumers.map( (num) => { return num + 10})


//  chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)     // it takes value from above line
                .filter( (num) => num >= 40)     // it takes value from above line

console.log(newNums);