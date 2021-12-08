import { players } from "./players.js"

let fs = document.querySelector("#full_sense");

list()
function list() {
    for (let p of players) {
        let ele = document.createElement("div");
        ele.setAttribute("class", "col-4");
        ele.id = `${p.id}`;
        let list = document.createElement("ul");
        list.setAttribute("class", "list-unstyled");
        list.innerHTML += `<li><img src="./assets/img/${p.img}" class ="img-fluid rounded mx-auto d-block m-3"></li>`
        list.innerHTML += `<li class="fs-3" id=${p.ign}>${p.ign}`;
        list.innerHTML += `<li>${p.name}</li>`;
        list.innerHTML += `<li><b>Join Date: </b>${p.date}</li>`; 
        list.innerHTML += `<a href="${p.twitch}"><img src="./assets/img/twitch.png" alt="twitch" width="32" height="32"></a>`
        ele.appendChild(list);
        fs.appendChild(ele);

    }
    let cap = document.querySelector("#PTC");
        cap.innerHTML += `<img src="./assets/img/Captain_Icon.png" width="10%" height="10%" style="padding: 5px;">`
}