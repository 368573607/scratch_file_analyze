const matchs = require("./match");

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