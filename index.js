Array.prototype.Filter = function (cb){

    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i));
}
return result
}
const testFilter = [1,2,3,4,5,6,7,8].filter((number) => number >= 4)


console.log(testFilter)

// =========================2==============================

Array.prototype.some = function (cb){

    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i]));
}
return result
}
const testSome = [1,2,3,5,6,7,8].some((number) => number  === 4)

console.log(testSome)


// =========================3==============================
Array.prototype.every = function (cb){
const result = [];
for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
}
return result
}
const testEvery = [1,2,3,5,6,7,8].every((number) => number >= 1)

console.log(testEvery)
