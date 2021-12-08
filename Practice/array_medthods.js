// every()
// เป็น method ที่จะทดสอบว่าข้อมูลทั้งหมดใน Array ที่เราต้องโดยเรียกใช้ผ่าน Function 
// ว่าข้อมูลทุกๆตัวใน Array ถูกต้องตามเงื่อนไขของ Function หรือไม่
// โดยค่า Return จะเป็น Boolean ถ้าถูกต้องทั้งหมดจะ Return เป็น True ถ้าไม่จะเป็น False 

// isBelow40 เป็น Function ที่เช็คว่าค่าที่รับมานั้นมากกว่าก 40 หรือไม่
const isBelow40 = (values) => values < 40;
// bananaCheck เป็น Fucntion ที่เช็คว่าคำที่รับมานั้นเป็นคำว่า banana หรือไม่โดยไม่สนใจตัวพิมพ์เล็กพิมพ์ใหญ่
const bananaCheck = (allBanana) => allBanana.toLowerCase() == "banana"; // toLowerCase() เป็น method ที่ทำการเปลี่ยนตัวอักษรทุกตัวเป็นพิมพฺ์เล็กทั้งหมด

const array1 = [1, 30, 39, 29, 10, 13];
const array2 = [1, 20, 7, 10, 43];
const array3 = ["Banana", "BaNanA", "bAnAnA", "banana"];

console.log(array1.every(isBelow40)); // true เพราะค่าทุกตัวใน Array ต่ำกว่า 40 หมด
console.log(array2.every(isBelow40)); // false เพราะค่าของตัวสุดท้ายใน Array นั้น มากกว่า 40 
console.log(array3.every(bananaCheck)); // true เพราะข้อมูลทุกๆตัวใน Array นั้นคือคำว่า banana

// indexOf()
// เป็น method ที่ใช้หาว่าตำแหน่งของข้อมูลที่เราต้องการจะหานั้นอยู่ตำแหน่งที่เท่าไหร่
// ถ้าหากสิ่งที่หานั่นเจอใน Array จะ Return เป็นตำแหน่ง Index
// แต่ถ้าไม่เจอจะ Return เป็น -1
const a =['red' , 'green' , 'blue' , 'yellow']

console.log(a.indexOf('green')); // green อยู่ตำแหน่งที่ 1
console.log(a.indexOf('blue')); // blue อยู่ตำแหน่งที่ 2
console.log(a.indexOf('Red')); // -1 เพราะ Red ไม่มีข้อมูลอยุ่ใน Array
console.log(a.indexOf('Blue') >= 0 ? "เจอ!" : "ไม่เจอ!"); //ไม่เจอ!
