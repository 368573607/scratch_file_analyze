let matchOpcode = function (opcode) {
    let match = opcode.replace(/(?<=.+)(_.*)/, "");

    return match;
}

module.exports = matchOpcode;