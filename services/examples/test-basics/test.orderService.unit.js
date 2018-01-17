const orderServiceUnderTest = require("./orderService").orderService;
const orderDAL = require("./orderService").orderDAL;

it("Under 1000 order, expect to be approved", () => {
  const result = new orderServiceUnderTest().add({});
  if (!result.approved) throw new Error("Test failed");
});

it("Price is higher than 1000, expect not approved", () => {
  const result = new orderServiceUnderTest().add({
    price: 1500
  });
  if (result.approved) throw new Error("Test failed");
});

it("Proving empty order, expect an error", () => {
    let errorFound = false;
  try {
    const result = new orderServiceUnderTest().add();
  } catch (e) {
    errorFound = true;
  }
  finally{
    if(!errorFound)
        throw new Error("Test failed");
  }
});