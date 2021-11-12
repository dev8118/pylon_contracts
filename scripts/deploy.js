async function main() {
    const PYLON = artifacts.require("PYLONToken");
    PYLON.deploy();
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});