// const Player = {
//     P1:{
//     firstName: "unknow",
//     lastName: "unknow",
//     name: () => {
//         return this._firstName + " " + this._lastName
//     }}
// };

// console.log(Player.P1.name());
// console.log(Player.P1.firstName = "Jirasin");
// console.log(Player.P1.lastName = "Chatbanyong");
// console.log(Player.P1.name());

// let player = (firstname, lastname) => {

//     return player = {

//         firstname: firstname ? firstname : "unknown",

//         lastname: lastname ? lastname : "unknown",

//         name: () => {

//             return `${firstname} ${lastname}`;

//         }

//     }

// }

class Song{
     constructor(title, artist){
        this._title = title;
        this._artist = artist;
     }
     get title(){
         return this._title;
     }
     get artist(){
         return this._artist;
     }
     howMany(listener){
        // let arrListener = [];
        let count = 0;
        // let lower = arrListener.map(name => name.toLowerCase());
        for (let i = 0; i < listener.length; i++) {
            const listenStr = listener[i].toLowerCase();
                if (listener.includes(listenStr) == false){
                    count ++
                    // arrListener.push(listenStr);
                    // if (listener.includes(arrListener) == false){
                    //     count ++;
                    // }
                }
        }
        return count;
     }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.title);
console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']));
console.log(mountMoose.howMany(['John', 'joHN', 'carl']));
// console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));