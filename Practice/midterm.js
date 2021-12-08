//63130500011 จิรสิน ฉัตร์บรรยงค์
//2.1
//เปลี่ยนจากการเก็บข้อมูล ในClass ของข้อที่ 1 เป็น Obj เพราะทำไม่ทัน
const student = {
    id: "63130500011",
    nameTh: "จิรสิน ฉัตร์บรรยงค์",
    nameEng: "Jirasin Chatbanyong",
    subjectEnroll:{
        1:{
            1:"GEN101",
            2:"GEN121",
            3:"INT100",
            4:"INT101",
            5:"INT102",
            6:"INT114",
            7:"LNG220"
        }
    },
    gradOfSubjuct:{
        1:{
            GEN101: "B+",
            GEN121: "B+",
            INT100: "B",
            INT101: "B",
            INT102: "A",
            INT114: "C",
            LNG220: "B"
        }
    },
    gpa:{
        1: 3.00
    },
    gpax: 3.00,
    status: "ปกติ"
}
const subject = {
    subjectIdAndName:{
        1:"GEN101",
        2:"GEN121",
        3:"INT100",
        4:"INT101",
        5:"INT102",
        6:"INT114",
        7:"LNG220"
    },
    semester:{
        1:{
            subjectCredit:{
                1: 1,
                2: 3,
                3: 3,
                4: 3,
                5: 1,
                6: 3,
                7: 3
            }
        }
    }
    
}
// console.log(student);
// console.log(subject);

//2.2
function creditEnroll(student,subject) {
    let id = student.id;
    let nameTH = student.nameTh;
    let nameENG = student.nameEng;
    let countCredit = 0;
    for (const creditArr of subject.semestert) {
        
    }
    // for (let i = 0; i < semester.length; i++) {
    //     const creditArr =  Array.from(subject.semester['1']['subjectCredit']['i']);
    //     // countCredit += credit;
    // }
    let creditArr = Array.from(subject.semester);
    return creditArr;
}
console.log(creditEnroll(student,subject));

