const anlyze = require("../src/index");
const testjson = require("./test.json");

anlyze.get_analyze(testjson).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

anlyze.get_blocks_quantity(testjson).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

anlyze.get_block(testjson, "event").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});