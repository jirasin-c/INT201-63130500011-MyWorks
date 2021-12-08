const question = {
    q1:{
        q: "ไก่กับไข่อะไรเกิดก่อนกัน",
        c: { 1:"ไก่", 2:"ไข่", 3:"ไดโนเสาร์", 4:"ไม่รู้"},
        a: 4
    },
    q2:{
        q: "ระหว่างกินข้าวกับนอน คำถามคือพรุ่งนี้วันอะไร",
        c: { 1:"กะเพราหมูกรอบ", 2:"นอน", 3:"กินข้าว", 4:"วัน ทู ทรี โฟร์ ไฟต์ ไอเลิฟยู"},
        a: 4
    },
    q3:{
        q: "1+1 เท่ากับเท่าไหร่",
        c: {1:"0", 2:"100", 3:"2" , 4:"14"},
        a: 3
    },
    q4:{
        q:"ใครหล่อที่สุด",
        c:{1:"คิว",2:"คิว",3:"คิว",4:"ถูกทุกข้อ"},
        a: 4
    },
    q5:{
        q:""
    }
};
const student ={
    s1:{
        name: "qq",
        point: 0
    },

};

quiz = (student, question, numOfAns,) =>{
    let ans = numOfAns

    console.log(
        `\nคำถาม: ${question.q} 
            1.${question['c']['1']} 
            2.${question['c']['2']} 
            3.${question['c']['3']} 
            4.${question['c']['4']} \nYour Answer: ${numOfAns}. ${question['c'][ans]}`);
    if (ans == question.a) {
        student.point ++;
        return `!!!Correct!!! \n${student.name} Your point: ${student.point}`;
    }else{
        return `!!!Incorrect!!! \nThe correct answer is ${question.a}. ${question['c'][question.a]}`;
    }
}

console.log(quiz(student.s1, question.q1, 4));
console.log(quiz(student.s1, question.q2, 4));
console.log(quiz(student.s1, question.q3, 4));
console.log(student.s1.point);
// class question{
//     constructor(name){
//             this._name = name;
//             this._point = 0;
//     }
//     get name(){
//             return this._name;
//     }
//     get question(){
//             const question = {
//                     question1 : "วันนี้วันเป็นวันอะไร",
//                     question2 : "ไก่ออกลูกเป็นอะไร",
//                     question3 : "ปลาโลมา หรือ โลมา",
//                     question4 : "วันนี้สดใสไหม",
//                     question5 : "กินข้าวยังงับ"
//             }
//             return question;
//     }
//     get choice(){
//             const getchoice = {
//                     choice1 : {
//                             "1." : "monday",
//                             "2." : "friday"
//                     },
//                     choice2 : {
//                             "1." : "ตัว",
//                             "2." : "ไข่"
//                     },
//                     choice3 : {
//                             "1." : "ตัว",
//                             "2." : "ไข่"
//                     },
//                     choice4 : {
//                             "1." : "สดใส",
//                             "2." : "ไม่เลย"
//                     },
//                     choice5 : {
//                             "1." : "กินเเล้ว",
//                             "2." : "ยังเลยหิวมาก"
//                     }
//             }
//             return getchoice;
//     }
//     get answer(){
//             const answer = {
//                     answer1 : "friday",
//                     answer2 : "ไข่",
//                     answer3 : "ตัว",
//                     answer4 : "สดใส",
//                     answer5 : "ยังเลยหิวมาก",
//             }
//             return answer;
//     }
//     get point(){
//             return this._point;
//     }
//     selectquestion(selectquestion){
//             let proposition = {};
//             switch (selectquestion) {
//                     case "question1" : proposition = Object.assign(this.choice.choice1);
//                             break;
//                     case "question2" : proposition = Object.assign(this.choice.choice2);
//                             break;
//                     case "question3" : proposition = Object.assign(this.choice.choice3);
//                             break;
//                     case "question4" : proposition = Object.assign(this.choice.choice4);
//                             break;
//                     case "question5" : proposition = Object.assign(this.choice.choice5);
//                             break;
//                     default:
//                             break;
//             }
//             return proposition;
//     }
//     checkmyanswer(selectquestion, myanswer){
//             let answers;
//             switch (selectquestion) {
//                     case "question1" : answers = Object.assign(this.answer.answer1);
//                             break;
//                     case "question2" : answers = Object.assign(this.answer.answer2);
//                             break;
//                     case "question3" : answers = Object.assign(this.answer.answer3);
//                             break;
//                     case "question4" : answers = Object.assign(this.answer.answer4);
//                             break;
//                     case "question5" : answers = Object.assign(this.answer.answer5);
//                             break;
//                     default:
//                             break;
//             }
//             if(myanswer == answers){
//                     this._point++;
//                     return "correct!";
//                 }
//             else{
//                 return "incorrect!"
//             }
//     }
    
// }

// let paul = new question("Paul");
// console.log(paul.name);
// console.log(paul.question);

// console.log(paul.selectquestion("question1"));
// console.log(paul.checkmyanswer("question1" , "friday"));

// console.log(paul.selectquestion("question2"));
// console.log(paul.checkmyanswer("question2" , "ไข่"));

// console.log(paul.selectquestion("question4"));
// console.log(paul.checkmyanswer("question4" , "ไม่เลย"));
// console.log(paul.point);










