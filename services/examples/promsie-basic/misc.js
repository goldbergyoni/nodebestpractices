const main = async () => {
    let firstPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("First done");
        resolve();
      }, 10);
    });
    let secondPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Second done");
        resolve();
      }, 5);
    });
    console.log("Before await");
    let first = await firstPromise;
    console.log("First");
    let second = await secondPromise;
    console.log("Second");
    console.log("Finish");
  };
  
  const main2 = async () => {
    let firstPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("First done");
        resolve();
      }, 10);
    });
    let secondPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Second done");
        resolve();
      }, 5);
    });
  
    Promise.all([firstPromise, secondPromise]).then(() => {
      console.log("All done");
    });
  
    console.log("Finish");
  };
  
  function callbackToPromise(method, ...args) {
    return new Promise(function(resolve, reject) {
      return method(...args, function(err, result) {
        return err ? reject(err) : resolve(result);
      });
    });
  }
  