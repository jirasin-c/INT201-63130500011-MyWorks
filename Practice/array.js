// let per1 = {id:1, name:'Joe'}; 
// //per1 is an object variable, store memory address that points to object properties
// let per2 = per1;

// doSomething(per2); //hoisting, use only var scope
// function doSomething(p){ //p=per2 (memory address of per2 to p)
//     p.name = 'Mary'; //per2.name = 'Mary'
// }
// console.log(per1);
// per2.id = 3;
// console.log(per1);

// let num1 = 10 //num1 is a primitive variablem store value 10
// let num2 = num1 //num2=10
// doSomething(num2)
// function doSomething(num){//num=num2=10
//     num=20 //num=20
// }
// console.log(num1); //num1=10
// console.log(num2); //num2=10

// //textValue, numValue, booleanValue are primitive variable
// let textValue = 'ABC' //'ABC'
// let numValue = 10 //10
// let booleanValue = true //true
// let value = textValue //value = 'ABC'
// value = 'XYZ'

// //student, arr , greeting are object variables
// let student={stdId:1, stdName: "Umaporn"}// new Student()
// let arr=["A", 10, 50.5] //array is an object
// let greeting = function () { //greeting is an object
//     return "Hello, JS"
// }



// let arr1 =[];
// console.log(typeof arr1);
// console.log(arr1.length);

// arr1 = [5, 2, 10, 'student']; //untyped & unsized
// console.log(arr1.length); //4
// console.log(arr1[0]); //first element
// console.log(arr1[arr1.length-1]); //last element

// console.log(arr1[arr1[1]]); //[integer expression]

// //arrat of objects
// let arr2 =[
//     {id:1, name:"Adam"},
//     {id:1, name:"Joe"}
// ];
// console.log(arr2[1].name);
// let arr3=[
//     [1, 3, 5, 7],
//     [2, 4, 6, 8]
// ];
// // console.log(arr3);
// // console.log(arr3[1][1]);
// let arr4 = [...arr3, 0.5, 100, ...arr2];
// // console.log(arr4);
// arr4[arr4.length-1].id=999;
// // console.log(arr4);
// // console.log(arr2);

// for (let item of arr4) {
//     console.log(item);
// }
// let letters = [... 'Hello world'];
// let value = '';

// for (let [index, letter] of letters.entries()) {
//     console.log(`index: ${index}`);
//     console.log(`letter: ${letter}`);
    
// }

// let arr1 = []; //array

// let obj = {}; //object

// console.log(typeof arr1);

// console.log(arr1.length);

// arr1 = [10, true, 1, 'unknown', ['A', 'B', 'C'], { id: 1, name: 'Adam' }]; //array is untyped

// console.log(arr1[arr1.length - 1]);

// console.log(arr1[arr1[2]]); // [integer expression]
// console.log(arr1[4][2],arr1[5]['name']);



const arr1=[5,4,3,2,1];
arr1[0] = 10; //ได้
console.log(arr1);
// arr1 = [10]; //ไม่ได้

//function expression
const doSomething = function(n1, n2, n3){
    return n1 + n2 + n3
};
//named function expression
console.log(doSomething(5, 2, 1)); //8
const findSum = function sum(n){
    if ( n <= 1) {
        return 1;
    }else{
        return n + sum(n-1); //5+sum(4)+sum(3)+sum(2)+sum(1)
    }
};
console.log(findSum(5)); //15

function area(width, height){
    return width * height
}
console.log(area(5,4));

const helloSomeone = name => {
    `Hello, ${name}`;
}

const areas = (width, height) => {
    width * height;
}
const evenNum = num => {
    (num%2 === 0)
}


// const orders=[
//     {productTitle: 'Product 1', amount: 2, price: 5},
//     {productTitle: 'Product 2', amount: 10, price: 5},
//     {productTitle: 'Product 3', amount: 4, price: 5},
//     {productTitle: 'Product 4', amount: 1, price: 5}
// ]
// let totalAmount = orders.reduce((totAmt, cur) => totAmt + cur.amount,0);
// console.log(totalAmount);
// let totalPrice = orders.reduce(
//     (totAmt, cur) => totAmt + cur.amount * cur.price,
//     0
// );
// console.log(totalPrice);
