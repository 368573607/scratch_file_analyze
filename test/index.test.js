const anlyze = require("../src/index");
const testjson = require("./test.json");

anlyze(testjson).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.error(new Error(err));
});