let match_opcode = function (opcode) {
    let match = opcode.replace(/(?<=.+)(_.*)/, "");

    return match;
}

module.exports = match_opcode;