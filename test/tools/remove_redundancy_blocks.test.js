//const getBlocks = require("../../src/tools/remove_redundancy_blocks");
const remove = require("../../src/tools/remove_redundancy_blocks");
const testjson = require("../test.json");

const fs = require("fs");

fs.writeFile("./result.json",JSON.stringify(remove.remove(testjson)),{encoding:"utf8"},(err,data)=>{
    if(err){
        console.error("出错了!");
    }
});