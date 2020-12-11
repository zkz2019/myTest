
function fun(obj) {
    let k = Object.values(obj);
    if (k.length == 0) return 0
    let total = k.reduce((total, val) => {
        return total + val;
    }, 0)
    return total
}
let obj = { a: 200, b: 300, c: 400 };
let k = fun(obj)
console.log('k', k);
// let arr = [1, 2, 3, 4, 5]
// let k = arr.reduce(function (total, currentValue) {
//     return total + currentValue
// }, 0)
// console.log('k', k);