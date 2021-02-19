const getFullBlocks = require("../get_key_blocks");

const rules = [
    "event_whenkeypressed",
    "event_whenthisspriteclicked",
    "event_whenbackdropswitchesto",
    "event_whengreaterthan",
    "event_whenbroadcastreceived",
    "control_start_as_clone",
    "event_whenflagclicked"
];

let screen = (obj) => {
    let blocks = getFullBlocks(obj);
    let list = [];

    for (let block of blocks) { //parent 级的冗余代码
        const opcode = block.value.opcode;
        const parent = block.value.parent;
        const next = block.value.next;
        const key = block.key;

        if (((rules.indexOf(opcode) !== -1) && (next === null)) || (parent === null)) {
            list.push(key);
        }
    }

    for (let block of blocks) { //如果 parent 指向的代码是冗余代码，则该段代码也属于冗余代码
        const parent = block.value.parent;
        const key = block.key;

        if (list.indexOf(key) !== -1) { //已在 list 里的则忽略
            if (list.indexOf(parent) === -1) { //前一段代码为冗余代码
                list.push(key);
            }
        }

        return list;
    }
}

let remove = (obj) => {
    let list = screen(obj);

    let targets = obj.targets;

    for (let sprite in targets) {
        let Blocks = targets[sprite].blocks;

        for (let block in Blocks) {
            if (list.indexOf(block) !== -1) { //如果该 block 存在于 list 中则从全局中移除
                delete obj.targets[sprite].blocks[block];
                console.log(`!!!!!! ${obj.targets[sprite].blocks[block]}`);

                let _sObj = JSON.stringify(obj);
                _sObj = _sObj.replace(`"${block}"`, "null");
                obj = JSON.parse(_sObj);
            }
        }
    }

    return obj;
}

module.exports = {
    screen,
    remove
};