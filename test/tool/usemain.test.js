const usemin = require("../../src/tool/usemin");
const testjson = require("../test.json");
const fs = require("fs");

const min = JSON.stringify(usemin(testjson));
fs.writeFile("./result.json", min, { encoding: "utf8" }, (err) => {
    if (err)
        console.err(err);
});