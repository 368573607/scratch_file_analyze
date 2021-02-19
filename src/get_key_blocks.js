/*
* 返回一个带 key 的 blocks 数组
*/

module.exports = function (obj) {
    let targets = obj.targets;
    let blocksCollection = [];

    for (sprite in targets) {
        let blocks = targets[sprite].blocks;

        for (let block in blocks) {
            blocksCollection.push({
                key:block,
                value:blocks[block]
            });
        }
    }

    return blocksCollection;
}