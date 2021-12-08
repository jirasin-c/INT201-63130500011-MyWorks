// function digital_root(n){
//     let sum = 0
//     let arrNum = [n.length-1];
//     for (let index = 0; index < arrNum.length; index++) {
//         arrNum[index] = n.charAt(${index});
//         sum += arrNum[index];
//     }
//     return sum;
// }

// console.log(digital_root(12));

// let isIsogram = (str) => {
//     let arrStr = Array.from(str.toString())
//     for (let i = 0; i < arrStr.length; i++) {
//         const thisStr = arrStr[i].toLowerCase();
//         for (let j = i+1 ; j < arrStr.length; j++) {
//             if (thisStr === arrStr[j].toLowerCase()) {
//                 return false
//             }
//         }
//     }
//     return true
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));

let friend = (friends) =>{
    let realFriend = [];
    for (let i = 0; i < friends.length; i++) {
        const friendStr = friends[i];
        const friendCheckArr = Array.from(friendStr.toString());
        if (friendCheckArr.length === 4) {
            realFriend.push(friendStr);
        }
    }
    return realFriend;
}
let friends = ["Ryan", "Kieran", "Mark", "Jirasin", "qq" , "qqqq"];

console.log(friend(friends));

// let g = 12345;
// const v = g.toString().split("").map(Number);
// console.log(v);