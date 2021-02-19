module.exports = function (obj) {
    let targets = obj.targets

    for (let sprite in targets) {
        let blocks = targets[sprite].blocks;

        for (let block in blocks) {
            let Block = obj.targets[sprite].blocks[block];
            if (Block.x && Block.y) {
                Block.x = 0;
                Block.y = 0;
            }
        }
    }

    return obj;
}