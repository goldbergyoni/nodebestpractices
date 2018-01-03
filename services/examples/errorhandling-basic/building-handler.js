class someBusinessLogicThatThrowsErrors {
  a() {
    try {
      throw "Error as string";
    } catch (error) {
      console.log(error);
    }
  }

  b() {
    return new Promise((resolve, reject) => {
      reject("Error as reject");
    }).catch(error => {
      console.log(error);
    });
  }
  c() {
    try {
      throw {
        message: "Error as object",
        code: "500"
      };
    } catch (error) {
      console.log(error);
    }
  }
  d() {
    try {
      throw new Error("Error as... well Error");
    } catch (error) {
      console.log(error);
    }
  }

}

const aClassThatThrowsErrors = new someBusinessLogicThatThrowsErrors();
aClassThatThrowsErrors.a();
aClassThatThrowsErrors.b();
aClassThatThrowsErrors.c();

