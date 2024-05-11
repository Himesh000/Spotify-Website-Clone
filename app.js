let arr = [1,2,3,4,5,6,7];
let sum = 0;

function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }
    return sum;
}

console.log(func);