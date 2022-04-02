const { assert } = require("console");

const VendingMachine = artifacts.require("VendingMachine");

contract("VendingMachine", (accounts) => {
  before(async () => {
    instance = await VendingMachine.deployed();
  });

  it("ensures that the start balance of the vending machine is 100", async () => {
    let balance = await instance.getVendingMachineBalance();
    assert.strictEqual(
      balance,
      100,
      "The initial balance should be 100 donuts."
    );
  });
});
