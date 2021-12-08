import { product } from "./product.js" //import product.js

let foodlist = document.querySelector("#food-list"); //ให้ foodlist เก็บค่า element ที่มี ID เป็น food-list 
let cart = { items: [], totalPrice: 0, itemIdIncart: [], totalQty: 0 }; //สร้าง obj ที่เก็บข้อมูลสินค้า ยอดราคารวม สินค้าในตระกร้า และจำนวนของสินค้า
let countEle = document.getElementById("count-el"); //ให้ countEle เก็บค่า element ที่มี ID เป็น count-el
let countPriceEle = document.getElementById("countPrice-el"); //ให้ countPriceEle เก็บค่า element ที่มี ID = countPrice-el
countEle.textContent = cart.totalQty; //กำหนดให้ countEle มีค่าเท่ากับ จำนวนสินค้าใน cart obj
countPriceEle.textContent = cart.totalPrice; //กำหนดให้ countPriceEle มีค่าเท่ากับ ยอดรวมราคาใน cart obj
let searchIcon = document.querySelector("#search"); //ให้ searchIcon เก็บค่า element ที่มี ID search
let boolSearch = false; 
let product1 = product;
list();

//set event handle ของ searchIcon เป็น click โดนจะทำการเรียกใช้ function ที่เมื่อเรากดที่ icon จะทำการแสดงและซ่อน search panel 
searchIcon.addEventListener("click", () => {
    //function จะเปลี่ยนค่าของ boolSearch จะเปลี่ยนเป็น true เพื่อให้เข้าเงื่อนไข if และแสดงแถบ searchbar ขึ้นมา
    //และถ้ากดอีกครั้ง searchbar จะหายไปเพราะเข้าเงื่อนไข else 
    boolSearch = !boolSearch;
    if (boolSearch) {
        //หา element ที่มี id เป็น searchbar 
        //และใช้คำสั่ง innerHTML สร้าง element input เพื่อสร้างแถบ searchbar
        document.querySelector("#searchbar").innerHTML += `<input type="text" id="searchValue" placeholder="ชื่ออาหาร เช่น กะเพราไก่ไข่ลูกเขย"  class="form-control"></input>`;

        //ให้ searchValue เก็บค่าที่ถูกพิมพ์ลงใน searchbar ที่เราสร้างขึ้น
        let searchValue = document.querySelector("#searchValue");

        //set event handle ของ searcValue เป็น keyup โดยจะเป็นการเรียกใช้ function หลังจากที่กดปุ่มบนคีย์บอร์ดและยกนิ้วขึ่น
        searchValue.addEventListener("keyup", () => {
            console.log(searchValue.value);

            //ให้ value ทำการนำคำที่พิมพ์ลงไปใน searchbar หรือก็คือ Value ของ searchValue มาเทียบกับสินค้า ถ้าหากมีสินค้าที่ตรงกันจะแสดงผลลัพท์เป็นรายการสินค้ามีชื่อตรงกัน
            //RegExp เป็นการเปลี่ยนคำเป็นกลุ่ม ตัวอย่างเช่นเราพิมพ์ กะ จะทำการแปลงเป็น /กะ/g เพื่อให้ RegExp นำไปเปรียบเทียบได้
            //โดยค่า g ข้างหลังหมายถึง global หรือก็คือจะทำการเปรียบเทียบกับข้อมูลทุกตัว ถ้าหากเจอข้อมูลที่ตรงกันก็จะเปรียบเทียบจนหมด
            let value = new RegExp(searchValue.value, 'g');
            product1 = [];

            //ทำการ map ข้อมูล โดยถ้าหากชื่อสินค้ากับข้อมูลที่พิมพ์ใน searchbar เปรียบเทียบกันแล้วไม่เป็น null จะทำการ นำข้อมูลสินค้าที่ตรงเข้าไปใน product1
            product.map((p) => {
                if (p.name.match(value) != null) {
                    product1.push(p);
                }
                console.log(p.name.match(value));
            })
            list();
        })
    } else {
        document.querySelector("#searchbar").innerHTML = "";
    }
    list(product)
});

//function แสดงรายการสินค้า
function list(product2 = product1) {
    foodlist.innerHTML = "";
    for (let p of product2) { //เปิด loop เพื่อเพิ่มlistอาหารอื่นๆ
        
        let ele = document.createElement("div"); //สร้าง div
        ele.setAttribute("id", p.id); //set id เป็น ตามเลข id ของแต่ละ obj นั้นๆ
        ele.setAttribute("class", "col-4") //set class เป็น col-4 
        let list = document.createElement("ul"); //สร้าง ul 
        list.setAttribute("class", "list-unstyled"); //set class เป็น list-unstyled

        //ให้ulเพิ่ม li โดยใช้ innerHTML ตามข้อมูลที่ใน Obj มี
        //ใช้ += เพื่อเก็บ stack แต่ละค่าไปเรื่อยๆ
        list.innerHTML += `<li><img src="${p.img}" class ="img-fluid rounded mx-auto d-block m-3"></li>`
        list.innerHTML += `<li class="fs-3">${p.name}</li>`;
        list.innerHTML += `<li>${p.description}</li>`;
        list.innerHTML += `<li><b>Price: ${p.price} บาท </b></li>`;
        list.innerHTML += `<li id="${p.id}" >Stock: ${p.stock}</li>`;

        ele.appendChild(list); //append เข้าใน list ("ul")
        foodlist.appendChild(ele); //append เข้าใน ele (div)
        let divBttn = document.createElement("div"); //สร้าง div
        divBttn.setAttribute("class", "cart"); //set class เป็น cart
        let buttn = document.createElement("button"); //สร้าง button
        let buttnCanCel = document.getElementById("cancel") //ให้ buttnCanCel เก็บค่า element ที่มี ID = cancel
        buttn.setAttribute("class", "btn btn-success rounded-pill"); //set class เป็น btn btn-success
        buttn.setAttribute("id", `${p.id}`);

        //ให้ tag button มีข้อความข้างในว่า Add to cart และ ไอค่อน + 
        buttn.innerHTML =  ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus " viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg> Add to cart`; 
        divBttn.appendChild(buttn);//append เข้าใน butt (button)
        ele.appendChild(divBttn);//append เข้าใน dibBttn (div)

        // function alertAdd แจ้งเตือนเมื่อกดเพิ่มสินค้าไปยังตะกร้า
        function alertAdd(event) {
            alert(`${p.name} ราคา ${p.price} บาท อยู่ในตะกร้าแล้ว !!!`);
            cal(); //เรียกใช้ function cal()
        }

        //function canCel นำสินค้าในตะกร้าออก
        function canCel() {
            cart.items = [];
            cart.itemIdIncart = [];
            cart.totalPrice = 0;
            cart.totalQty = 0;
            cal();
        }

        //function cal คำนวณจำนวนสินค้า และราคาสินค้า
        function cal() {
            countEle.textContent = cart.totalQty;
            countPriceEle.textContent = cart.totalPrice;
        }


        //กำหนดให้เมื่อกด buttnCancel จะเรียกใช้ function canCel()
        buttnCanCel.addEventListener("click",canCel,false);

        //กำหนดให้เมื่อกด buttn จะทำ functions ที่เช็คว่าในตะกร้านั้น มีสินค้าที่ add อยู่แล้วหรือไม่ ถ้าหากไม่มีจะนำเข้าตระกร้า
        //แต่ถ้าหากมีอยู่แล้วจะ จะตรวจสอบว่าสินค้านั้นมี id ตรงกับในตะกร้าหรือไม่
        //ถ้าหากตรงจะเพิ่มแค่จำนวนของสินค้านั้นๆ
        buttn.addEventListener("click",() => {
            if (!cart.itemIdIncart.includes(p.id)) {
                cart.itemIdIncart.push(p.id);
                cart.items.push({ product: p, qty: 0 })
            }
            cart.totalPrice = 0;
            cart.totalQty = 0;
            cart.items.forEach((pc) => {
                pc.product.id == p.id ? pc.qty++ : pc.qty;
                cart.totalPrice += pc.product.price * pc.qty;
                cart.totalQty += pc.qty;
            }) 
            alertAdd();
            console.log(cart.items);
        },false);

    }
}
