
// Promise //

        // # A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully

        // * A JavaScript Promise object contains both the producing code and calls to the consuming code:
        // * "Producing code" is code that can take some time
        // * "Consuming code" is code that must wait for the result


        let myPromise = new Promise(function(myResolve, myReject) {
          
            // "Producing Code" (May take some time)
          
            let x = 0;
            if (x == 0) {
              myResolve("OK");
            } else {
              myReject("Error");
            }
          });
          
          // "Consuming Code" (Must wait for a fulfilled Promise)
          myPromise.then(

                // Promise.then() takes two arguments, a callback for success and another for failure.

                // Both are optional, so you can add a callback for success or failure only.
                
                function(value) {console.log(value);},
                function(error) {console.log(error);}
          );

        // A JavaScript Promise object can be:

        // Pending
        // Fulfilled
        // Rejected

        // The Promise object supports two properties: *state and *result.

        // While a Promise object is "pending" (working), the result is "undefined".

        // When a Promise object is "fulfilled", the result is a "value".

        // When a Promise object is "rejected", the result is an "error object".

// Async Syntax //

        // # async and await make promises easier to write
        // * The keyword async before a function makes the function return a promise


        async function myFunction() {return "Hello";}

            myFunction().then(
            function(value) {console.log(value);},
            function(error) {console.log(error);}
            );

// Await Syntax //

            // # The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
                
            // * The await keyword can only be used inside an async function.


            async function myDisplay() {
                let myPromise = new Promise(function(resolve) {
                  setTimeout(function() {resolve("I love Javascript !!");}, 3000);
                });

                console.log(await myPromise)
              }
              
            myDisplay();


              //-----------------------------  Promise.all started ----------------------------------

// promise.all 
          // * The Promise.all() method accepts a list of promises and returns a new promsie that resolve to an array of results of the input promises if all the input promises resolved; or reject with an error of the first rejected promise.
          // * Use the Promise.all() method to aggregate results from multiple asynchronous operations.
          // * If no list of input promise then no output.
          // * sequence of the output is same as input and result is produced at completion of all the promises
            


        const p1 = new Promise((resolve, reject) => {
          setTimeout(() => {
            //console.log('The first promise has resolved');
            resolve(10);
          }, 1 * 1000);
        });
        const p2 = new Promise((resolve, reject) => {
          setTimeout(() => {
           // console.log('The second promise has resolved');
           resolve(20);
          }, 2 * 1000);
        });
        const p3 = new Promise((resolve, reject) => {
          setTimeout(() => {
           // console.log('The third promise has resolved');
            resolve(30);
          }, 3 * 1000);
        });

        Promise.all([p1, p2, p3]).then((results) => {
         // const total = results.reduce((p, c) => p + c);
          console.log(results);
         // console.log(`Results ********************: ${results}`);
        //  console.log(`Total: ${total}`);
        });

        // promise.all live eg

        // 1 . Concurrent API requests: If you need to make multiple API requests and wait for all of them to complete before performing further actions, Promise.all can be used. 

        const fetchUser = fetch('https://api.example.com/user');
        const fetchOrders = fetch('https://api.example.com/orders');
        const fetchProducts = fetch('https://api.example.com/products');
        
        Promise.all([fetchUser, fetchOrders, fetchProducts])
          .then(([userResponse, ordersResponse, productsResponse]) => {
            // Process the responses
          })
          .catch((error) => {
            // Handle errors
          });
        
        // 2. Parallel processing: If you have multiple time-consuming tasks that can be executed independently, Promise.all can be used to run them in parallel. This can improve overall performance by utilizing the available resources efficiently.

        const processImage = (image) => {
          // Process the image (e.g., resize, apply filters, etc.)
          return processedImage;
        };
        
        const images = [image1, image2, image3];
        
        const imageProcessingPromises = images.map((image) => processImage(image));
        
        Promise.all(imageProcessingPromises)
          .then((processedImages) => {
            // Handle the processed images
          })
          .catch((error) => {
            // Handle errors
          });

        // Combining multiple asynchronous operations: If you have several independent asynchronous operations that need to be completed before moving forward, Promise.all can be used to wait for all of them to finish. This could include operations like reading files, performing database queries, or executing any other asynchronous tasks.


        const readFile = (file) => {
          return new Promise((resolve, reject) => {
            // Read the file asynchronously
            // ...
          });
        };
        
        const file1 = 'file1.txt';
        const file2 = 'file2.txt';
        const file3 = 'file3.txt';
        
        const readFilesPromises = [readFile(file1), readFile(file2), readFile(file3)];
        
        Promise.all(readFilesPromises)
          .then((fileContents) => {
            // Handle the file contents
          })
          .catch((error) => {
            // Handle errors
          });
        


              //-----------------------------  Promise.all ended ----------------------------------



              //-----------------------------  Promise.race started ----------------------------------


// promise.race

        // * The Promise.race(iterable) method returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.
        // * The output will be the first promise that is resolved or rejected.



        const r1 = new Promise((resolve, reject) => {
          setTimeout(() => {
            //  console.log('The first race-promise has resolved');
            console.log("Promise Race :-")
              reject(10);
          }, 2 * 1000);
      
      });
      
      const r2 = new Promise((resolve, reject) => {
          setTimeout(() => {
            //  console.log('The second race-promise has resolved');
              resolve(20);
          }, 1 * 1000);
      });
      
      
      Promise.race([r1, r2])
          .then(value => console.log(`race-Resolved: ${value}`))
          .catch(reason => console.log(`race-Rejected: ${reason}`));

    // promise.race.eg

         // Let's say you have a web application that makes API requests to fetch data from multiple sources. You want to display the data as soon as possible, but you also want to handle cases where a particular API request takes too long to respond.

         // 1. In this example, Promise.race is used to race the timeout promise with the three API requests. Whichever promise (either a successful response or the timeout) settles first will determine the outcome. If one of the API requests resolves before the timeout, the response will be handled in the then block. If the timeout promise wins the race, the catch block will be executed, allowing you to handle the timeout scenario.

        
          const fetchUserrace = fetch('https://api.example.com/user');
          const fetchOrdersrace = fetch('https://api.example.com/orders');
          const fetchProductsrace = fetch('https://api.example.com/products');
          
          // Set a timeout of 5 seconds
          const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error('Request timeout'));
            }, 5000);
          });
          
          Promise.race([timeoutPromise, fetchUserrace, fetchOrdersrace, fetchProductsrace])
            .then((response) => {
              // One of the promises resolved
              if (response instanceof Response) {
                // Handle the successful response
              } else {
                // Handle the timeout case
              }
            })
            .catch((error) => {
              // Handle errors from the fastest promise or the timeout
            });
          

          //2. Network request fallback: Promise.race is used to race between the primary API request and a backup API request. Whichever request responds first will be handled, allowing you to provide a fallback option if the primary request fails or takes too long.



          //-----------------------------  Promise.race ended ----------------------------------



// promise.allSettled() 
          // * The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise
          // * The fulfillment value is an array of objects, each describing the outcome of one promise in the iterable

Promise.allSettled([p1, p2, p3]).
  then((results) => 
  console.log(results)
 // results.forEach((result) => console.log(result.status, result))
  );



// Promise.any()

          // * The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

          // * when any of the promises in the given iterable fulfills. The fulfillment value is the fulfillment value of the first promise that was fulfilled.


          Promise.any([p1, p2, p3]).then((value) => console.log("Promise any :-",value));

// Promise.finally()
          // * The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

          function checkMail() {
            return new Promise((resolve, reject) => {
              if (Math.random() > 0.5) {
                resolve('Mail has arrived');
              } else {
                 reject(new Error('Failed to arrive'));
              }
            });
          }
          
          checkMail()
            .then((mail) => {
              console.log(mail);
            })
            .catch((err) => {
              console.error(err);
            })
            .finally(() => {
              console.log('Experiment completed');
            });

            
//Promise.catch()
       // * The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. It is a shortcut for Promise.prototype.then(undefined, onRejected).

      const promiseCatch = new Promise((resolve, reject) => {
        throw new Error('Uh-oh!');
      });
      
      promiseCatch.catch((error) => {
        console.error(error);
      });
