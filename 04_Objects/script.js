// let person = {}; //let person = new Object();
// console.log(typeof person);
// person.id = 12345678;
// person.name = 'Somchai';
// console.log(person);
// person.email = 'somchai@gmail.com';
// console.log(person);
// delete person.email;
// console.log(person);
class Person{
    constructor(id,name){
        if (id.length != 13)
            this._id = 'unknow';
        else
            this._id = id;
            this._name = name;
        }
    //
    get id(){
        return this._id;
    }

    //setter
    set id(id){
        this._id = id;
    }

    get name(){
        return this._name
    }
    set name(name){
        this._name = name;
    }
    // method
    // getProsonIdLength(){
    //     return this._id.length
    // }
    getPerson(){
        return `person id = ${this._id}, person name = ${this._name}`
    }
}
let per1 = new Person('1234567', 'Somsri');
console.log(per1.getPerson());
let per2 = new Person('1234567891234', 'Somsak');
console.log(per2.getPerson());

// per2.getFirsNametLetter = function(){
//     return this._name.charAt(0);
// };
// console.log(per2.getFirsNametLetter());
// Person.prototype.getFirstNameLetter = function (){
//     return this._name.charAt(0);
// }
// console.log(per2.getFirstNameLetter());
class Student{
    constructor(stdId){
        studentId = stdId;
    }
}
console.log(Object.prototype.isPrototypeOf(per1));
console.log(Person.prototype.isPrototypeOf(per1));
console.log(Student.prototype.isPrototypeOf(per1));