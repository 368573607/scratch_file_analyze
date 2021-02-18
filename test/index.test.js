const analyze = require("../src/index");
const testjson = require("./test.json");

analyze.getAnalyze(testjson).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

analyze.getBlocksQuantity(testjson).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

analyze.getBlock(testjson, "event").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

