const { useCallback } = require("react");

console.log("js testing");
var x = 10;
var x = 20; // redeclaration
console.log(x);

let a = 30
a = "hello" // reassign
const b = 40;
console.log(typeof a);
let c = 22
{
    let c = 30
    console.log(c);
}
console.log(c);

let obj = {
    name: "test",
    age: 20
}
console.log(obj.name);
let obj2 = obj
obj2.age = 33
console.log(obj.age);

let num = 30;
let num1 = num;
num1 = 40;
console.log(num);

console.log(4 == '4');
console.log(5 === '5');

function add(a, b) {
    return a + b;
}
console.log(add(99, 88));

console.log(add(25, 26));
const add1 = (a, b, c) => {
    return a + b + c;
}

const cal = (a, b, c, callback) => {
    return callback(a, b, c);
}
console.log(cal(9, 9, 9, add1));

let arr = [1, 2, 3, 4, 5]

const doubledArr = arr.map((n) => { return n * 2 })
console.log(doubledArr);

const reduceArr = arr.reduce((total, n) => { return total + n }, 10)
console.log(reduceArr);

const evenNum = arr.filter((n) => { return n % 2 == 0 })
console.log(evenNum);
let details = [
    { name: 'A', age: 30, marks: 90 },
    { name: 'B', age: 33, marks: 95 },
    { name: 'C', age: 45, marks: 80 }
]
const marklist = details.filter((details) => details.marks > 90);
console.log(marklist);
const nameList = details.map((details) => details.name)
console.log(nameList);

let name = 'Pia'
let marks = 99
console.log(`I am ${name} have scored ${marks}`);

const foodorder = new Promise((resolve, reject) => {
    let ready = false;
    if (ready) {
        resolve("Food is ready");
    } else {
        reject("Food not ready")
    }
})
foodorder
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

async function getuser() {
    console.log("fetch the data from user");
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    const emails = data.map((n) => n.email)
    console.log(emails);
}
getuser()