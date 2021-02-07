const matchs = require("./match");

const block_english_and_chinese = {
    "event": "事件",
    "motion": "运动",
    "looks": "外观",
    "sound": "声音",
    "control": "控制",
    "sensing": "侦测",
    "operator": "运算",
    "data": "变量和列表"
};

let add = function (bgtAdd) {
    let returnList = {
        "event": 0,
        "motion": 0,
        "looks": 0,
        "sound": 0,
        "control": 0,
        "sensing": 0,
        "operator": 0,
        "data": 0
    }

    for (bgtMatch of bgtAdd) {
        let match = matchs(bgtMatch);

        returnList[match] += 1;
    }

    return returnList;
}

module.exports = add;