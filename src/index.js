const add = require("../src/add");
const get_opcode = require("../src/get_opcode");

let analyze = function (json) {
    return new Promise((resolve, reject) => {
        try{
        let opcodes = get_opcode(json);
        resolve(add(opcodes));
        }catch(e){
            reject(e);
        }
    })

}

module.exports = analyze;