function BMI(name,pound,inch){
    const toKilogram = 0.453592; //ประกาศตัวแปรที่เก็บสูตรคิดในการแปลงค่า pound เป็น kilogram
    const toMeter = 0.0254; //ประกาศตัวแปรที่เก็บสูตรคิดในการแปลงค่า inch เป็น meter
    let n = name; //ประกาศตัวแปรรับชื่อ
    let kg = pound * toKilogram; //แปลง pound เป็น kilogram
    let m = inch * toMeter; //แปลง inch เป็น meter
    let bmi = kg/Math.pow(m, 2); //ประกาศตัวแปรเพื่อเก็บและคำนวณค่า BMI
    let result; //ประกาศตัวแปรที่เอาไว้เก็บเกณฑ์ของ BMI
    if(bmi < 18.50){ //ถ้าหากค่า bmi น้อยกว่า 18.50 จะเข้าเกณฑ์ผอม
        result = "น้ำหนักน้อย/ผอม";
    }else if(bmi > 18.50 && bmi < 22.90){ //ถ้าหากค่า bmi อยู่ระหว่าง 18.50 - 22.9   0 จะเข้าเกณฑ์ปกติ
        result = "ปกติ";
    }else if(bmi > 23 && bmi < 24.90){ //ถ้าหากค่า bmi อยู่ระหว่าง 23 - 24.90 จะเข้าเกณท้วม
        result = "ท้วม/โรคอ้วนระดับ 1";
    }else if(bmi > 25 && bmi < 29.90){ //ถ้าหากค่า bmi อยู่ระหว่าง 20 - 29.90 จะเข้าเกณฑ์อ้วน
        result = "อ้วน/โรคอ้วนระดับ 2";
    }else{
        result = "อ้วนมาก/โรคอ้วนระดับ 3"; //ถ้าหากค่า bmi มากกว่า 29.90 จะเข้าเกณฑ์อ้วนมาก
    }
    toString = `Name: ${n} | Pound: ${pound} Inch: ${inch} | BMI: ${bmi} อยู่ในเกณฑ์: ${result}` //return ผลลัพธ์ของการคำนวณ
    return toString;
    // return `Name: ${n} | ${pound} Pound ${inch} Inch BMI = ${bmi} อยู่ในเกณฑ์: ${result}`;
}
console.log(BMI("Georgia's", 36.5, 39)); //Name: Georgia's | Pound: 36.5 Inch: 39 | BMI: 16.871807182141648 อยู่ในเกณฑ์: น้ำหนักน้อย/ผอม
console.log(BMI("qq", 130.1, 64.17)); //Name: qq | Pound: 130.1 Inch: 64.17 | BMI: 22.213202259726184 อยู่ในเกณฑ์: ปกติ
console.log(BMI("eiei", 300, 70)); //Name: eiei | Pound: 300 Inch: 70 | BMI: 43.04504119212319 อยู่ในเกณฑ์: อ้วนมาก/โรคอ้วนระดับ 3
console.log(BMI("kiki", 250, 80)); //Name: kiki | Pound: 250 Inch: 80 | BMI: 27.4636330522661 อยู่ในเกณฑ์: อ้วน/โรคอ้วนระดับ 2