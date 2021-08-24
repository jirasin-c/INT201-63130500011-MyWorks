function BMI(name,pound,inch){
    let n = name; //ประกาศตัวแปรรับชื่อ
    let kg = pound * 0.453592; //แปลง pound เป็น kilogram
    let m = inch * 0.0254; //แปลง inch เป็น meter
    let result; //ประกาศตัวแปรที่เอาไว้เก็บเกณฑ์ของ BMI
    const bmi = kg/Math.pow(m, 2); //ประกาศตัวแปรเพื่อเก็บและคำนวณค่า BMI
    if(bmi < 18.50){ //ถ้าหากค่า bmi น้อยกว่า 18.50 จะเข้าเกณฑ์ผอม
        result = "น้ำหนักน้อย/ผอม";
    }else if(bmi > 18.50 && bmi < 22.90){ //ถ้าหากค่า bmi อยู่ระหว่าง 18.50 - 22.90 จะเข้าเกณฑ์ปกติ
        result = "ปกติ";
    }else if(bmi > 23 && bmi < 24.90){ //ถ้าหากค่า bmi อยู่ระหว่าง 23 - 24.90 จะเข้าเกณท้วม
        result = "ท้วม/โรคอ้วนระดับ 1";
    }else if(bmi > 25 && bmi < 29.90){ //ถ้าหากค่า bmi อยู่ระหว่าง 20 - 29.90 จะเข้าเกณฑ์อ้วน
        result = "อ้วน/โรคอ้วนระดับ 2";
    }else{
        result = "อ้วนมาก/โรคอ้วนระดับ 3"; //ถ้าหากค่า bmi มากกว่า 29.90 จะเข้าเกณฑ์อ้วนมาก
    }
    return `Name: ${n} | ${pound} Pound ${inch} Inch BMI = ${bmi} อยู่ในเกณฑ์: ${result}`; //return ผลลัพทธ์ของการคำนวณ
}
console.log(BMI("Georgia's", 36.5, 39));
console.log(BMI("qq", 130.1, 64.17));
console.log(BMI("eiei", 300, 70));
console.log(BMI("kiki", 250, 80));