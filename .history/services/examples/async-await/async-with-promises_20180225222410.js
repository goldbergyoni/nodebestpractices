const main = async () => {

  let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First done");
      resolve()
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

main()