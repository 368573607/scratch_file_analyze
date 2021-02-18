const add = require("./add");
const getOpcode = require("./get_opcode");

let getAnalyze = (json) => {
    return new Promise((resolve, reject) => {
        try {
            let opcodes = getOpcode(json);
            resolve(add(opcodes));
        } catch (e) {
            reject(e);
        }
    })
}

let getBlocksQuantity = (json) => {
    return new Promise((resolve, reject) => {
        getAnalyze(json).then((result) => {
            let blocks = result;
            resolve(Object.keys(blocks).length);
        }).catch((err) => {
            reject(err);
        });
    })
}

let getBlock = (json, block) => {
    return new Promise((resolve, reject) => {
        let allquantity = getBlocksQuantity(json);

        getAnalyze(json).then((result) => {
            resolve(result[block]);
        }).catch((err) => {
            reject(err);
        });
    });
}

let getBlocks = (json) => { //使用 Promise 封装 get_blocks.js
    const getBlocksTool = require("./get_blocks");
    return new Promise((resolve, reject) => {
        try {
            resolve(getBlocksTool(json));
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    getAnalyze: getAnalyze,
    getBlocksQuantity: getBlocksQuantity,
    getBlock: getBlock,
    getBlocks: getBlocks
};