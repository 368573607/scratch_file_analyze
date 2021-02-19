const analyze = require("../src/index");
const testjson = require("./test.json");

analyze.getAnalyze(testjson).then((result) => {
    console.log("Analyze: "+JSON.stringify(result));
}).catch((err) => {
    console.error(err);
});

analyze.getBlocksQuantity(testjson).then((result) => {
    console.log("Quantity: "+JSON.stringify(result));
}).catch((err) => {
    console.error(err);
});

analyze.getBlock(testjson, "event").then((result) => {
    console.log("Block: "+JSON.stringify(result));
}).catch((err) => {
    console.error(err);
});

analyze.getBlocks(testjson).then((result) => {
    console.log("Blocks: "+JSON.stringify(result));
}).catch((err) => {
    console.error(err);
});

(async () => {
    try {
        const result = await analyze.tools(testjson).usemin();
        console.log(`Tools | usemin: ${JSON.stringify(result)}`);
    } catch (err) {
        console.error(err);
    }
})();