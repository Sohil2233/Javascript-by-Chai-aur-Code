

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// explicit semicolon for stop the excution and to stop the execution
//iImmediately return 
//global variable k polltion ko hatane k iife ka use



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')//arguments                    


// ()()
// first bracket for function decleration
// secoond for execution