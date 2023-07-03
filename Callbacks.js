// Callbacks //
        // # Callbacks lets us pass functions as arguments to another function which will be executed later within the outer function

        function divide(x,y){
            return x/y
        }
        
        function multiply(x,y){
            return x*y
        }
        
        function compute(callBack, x, y){
            return callBack(x,y)
        }
        
        console.log(compute(divide, 10, 5))    // 2
        console.log(compute(multiply, 10, 5))   // 50



// problems arise with callbacks //


        // Two Types of problems arise with Callback.

            // 1. Callback Hell
            // 2. Inversion of Control


        // # Callback Hell 
                //  * The phenomenon which happens when we nest multiple callbacks within a function is called a    callback hell
                // * The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”.
                // * Instead of growing verticle our code grows horizontaly which makes the code less readable and complex.


             //   firstFunction(args, function() {
             //       secondFunction(args, function() {
             //         thirdFunction(args, function() {
             //           // And so on…
             //         });
             //       });
             //     });



        //Solutions to callback hell
            // # There are four solutions to callback hell:

                // 1. Write comments
                // 2. Split functions into smaller functions
                // 3. Using Promises
                // 4. Using Async/await



        // Inversion of Control - handing over control of invoking future callbacks to a function you never wrote or perhaps even know how it works.

// why use promises insted of callback
              // # just used for neet and clean code