const get_blocks = require("./get_blocks");

let getopcode = function (obj) {
    let blocks = get_blocks(obj);
    let opcode_set = [];

    for (opcode_friend in blocks) {
        opcode_set.push(blocks[opcode_friend].opcode);
    }

    return opcode_set;
}

module.exports = getopcode;