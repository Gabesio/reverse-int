module.exports = function reverse (n) {
    let i = 0;
    let result = '';
    let num = n.toString();

    while (i < num.length) {
        if (num[0] !== '-') {
            result = num[i] + result;
            i = i + 1;
        } else {
            num = num.slice(1);
            result = num[i] + result;
            i = i + 1;
        }
    }
    return result;
}
