module.exports = function reverse (n) {
    let string = Math.abs(n).toString();
    let array = string.split('');
    let number = array.reverse().join('');
    return number;

}
