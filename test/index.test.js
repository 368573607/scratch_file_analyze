const anlyze = require("../src/index");
const testjson = require("./test.json");

anlyze.getAnalyze(testjson).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

anlyze.getBlocksQuantity(testjson).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

anlyze.getBlock(testjson, "event").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});