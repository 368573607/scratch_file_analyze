module.exports = function (obj) { //此函数返回 json 中的所有 block ，类型为数组
    let targets = obj.targets; //获取 .sb3 || project.json 中存储角色信息的 targets 数组对象
    let blocks_set = [];

    for (sprite in targets) {
        let blocks = targets[sprite].blocks;

        for (block in blocks) {
            blocks_set.push(blocks[block]);
        }
    }

    return blocks_set;
}