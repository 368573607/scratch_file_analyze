const add = require("../src/add");
const get_opcode = require("../src/get_opcode");
const match = require("../src/match");


const testjson = require("./test.json");

let opcodes = get_opcode(testjson);

console.log(add(opcodes));