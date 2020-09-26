module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            result.push('--d');
            i++;
        } else if (arr[i] === '--discard-prev') {
            result.pop();
        } else if (arr[i] === '--double-next') {
            if ((i + 1) < arr.length) {
                result.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if ((i - 1) >= 0) {
                result.push(result[i - 1]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result.filter((el) => el !== '--d' && el !== undefined);
}
