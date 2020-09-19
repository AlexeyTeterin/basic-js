module.exports = function repeater(str, options) {
    let result = '';

    (options.repeatTimes===undefined) ? options.repeatTimes=1 : null;
    (options.addition===null) ? options.addition='null' : null;

    for (let i = 0; i < options.repeatTimes; i++) {
        result += str;

        if (options.addition != undefined) {
            if (options.additionRepeatTimes != undefined) {
                for (let j = 0; j < options.additionRepeatTimes; j++) {
                    (j == options.additionRepeatTimes - 1) ?
                        result += options.addition :
                        result += options.addition + options.additionSeparator;
                }
            } else {
                result += options.addition;
            }
        }

        (options.separator == undefined) ? options.separator="+" : null;
        (i < options.repeatTimes - 1) ? result += options.separator : null;
    }
    return result;
};
