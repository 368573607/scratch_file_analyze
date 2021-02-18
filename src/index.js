const add = require("./add");
const get_opcode = require("./get_opcode");

let get_analyze = (json) => {
    return new Promise((resolve, reject) => {
        try {
            let opcodes = get_opcode(json);
            resolve(add(opcodes));
        } catch (e) {
            reject(new Error(e));
        }
    })
}

let get_blocks_quantity = (json) => {
    return new Promise((resolve, reject) => {
        get_analyze(json).then((result) => {
            let blocks = result;
            resolve(Object.keys(blocks).length);
        }).catch((err) => {
            reject(new Error(err));
        });
    })
}

let get_block = (json, block) => {
    return new Promise((resolve, reject) => {
        let allquantity = get_blocks_quantity(json);

        get_analyze(json).then((result) => {
            resolve(result[block]);
        }).catch((err) => {
            reject(new Error(err));
        });
    });
}

module.exports = {
    get_analyze: get_analyze,
    get_blocks_quantity: get_blocks_quantity,
    get_block: get_block
};