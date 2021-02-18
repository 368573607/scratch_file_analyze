const getBlocks = require("./get_blocks");

let getOpcode = function (obj) {
    let blocks = getBlocks(obj);
    let opcodeSet = [];

    for (let opcodeFriend in blocks) {
        opcodeSet.push(blocks[opcodeFriend].opcode);
    }

    return opcodeSet;
}

module.exports = getOpcode;